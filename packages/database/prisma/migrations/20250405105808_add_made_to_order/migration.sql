-- AlterTable
ALTER TABLE "ProductVariant" ADD COLUMN     "isMadeToOrder" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "stock" DROP DEFAULT;
