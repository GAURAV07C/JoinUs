import fs from "node:fs";
import path from "node:path";
import { PrismaClient } from "@prisma/client";

const ROOT_DIR = process.cwd();
const MIGRATIONS_DIR = path.join(ROOT_DIR, "apps/web/prisma/migrations");

const IGNORABLE_PG_CODES = new Set([
  "42710", // duplicate object
  "42P07", // relation already exists
  "42701", // duplicate column
  "42703", // undefined column
  "42P16", // invalid table definition (often duplicate primary key)
  "42704", // undefined object on drop
  "42P01", // undefined table on drop
  "42P17", // invalid object definition edge cases
]);

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const env = {};
  const content = fs.readFileSync(filePath, "utf8");

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const idx = line.indexOf("=");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key) env[key] = value;
  }
  return env;
}

function resolveDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

  const envRoot = parseEnvFile(path.join(ROOT_DIR, ".env"));
  if (envRoot.DATABASE_URL) return envRoot.DATABASE_URL;

  const envWeb = parseEnvFile(path.join(ROOT_DIR, "apps/web/.env.local"));
  if (envWeb.DATABASE_URL) return envWeb.DATABASE_URL;

  throw new Error(
    "DATABASE_URL not found. Set it in env or in .env/apps/web/.env.local"
  );
}

function stripSqlComments(sql) {
  return sql
    .replace(/\/\*[\s\S]*?\*\//g, "\n")
    .split("\n")
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n");
}

function extractPgCode(error) {
  if (error?.meta?.code) return String(error.meta.code);
  const message = String(error?.message || "");
  const match = message.match(/Code:\s*`([0-9A-Z]+)`/);
  return match ? match[1] : "";
}

async function main() {
  const databaseUrl = resolveDatabaseUrl();
  process.env.DATABASE_URL = databaseUrl;

  if (!fs.existsSync(MIGRATIONS_DIR)) {
    throw new Error(`Migrations directory not found: ${MIGRATIONS_DIR}`);
  }

  const prisma = new PrismaClient();
  const migrationDirs = fs
    .readdirSync(MIGRATIONS_DIR)
    .filter((name) => /^\d+_/.test(name))
    .sort();

  for (const dir of migrationDirs) {
    const migrationFile = path.join(MIGRATIONS_DIR, dir, "migration.sql");
    if (!fs.existsSync(migrationFile)) continue;

    const rawSql = fs.readFileSync(migrationFile, "utf8");
    const statements = stripSqlComments(rawSql)
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);

    console.log(`\n== Applying ${dir} (${statements.length} statements) ==`);

    for (const statement of statements) {
      try {
        await prisma.$executeRawUnsafe(statement);
      } catch (error) {
        const code = extractPgCode(error);
        if (IGNORABLE_PG_CODES.has(code)) {
          console.log(`SKIP ${code}: ${statement.slice(0, 90)}`);
          continue;
        }
        throw error;
      }
    }
  }

  const tables = await prisma.$queryRawUnsafe(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema='public'
      AND table_name IN ('users','events','event_registrations','event_forms','form_submissions')
    ORDER BY table_name;
  `);

  console.log(
    `\nTables present: ${tables.map((row) => row.table_name).join(", ")}`
  );
  await prisma.$disconnect();
  console.log("Done.");
}

main().catch((error) => {
  console.error("db:push:pooler-fix failed");
  console.error(error);
  process.exit(1);
});
