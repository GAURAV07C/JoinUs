/*
  Warnings:

  - You are about to drop the column `rejectionReason` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."event_forms" ALTER COLUMN "fields" DROP NOT NULL,
ALTER COLUMN "required" DROP NOT NULL,
ALTER COLUMN "lable" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."events" DROP COLUMN "rejectionReason";
