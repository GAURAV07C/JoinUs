/*
  Warnings:

  - Added the required column `required` to the `event_forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."event_forms" ADD COLUMN     "options" TEXT[],
ADD COLUMN     "placeholder" TEXT,
ADD COLUMN     "required" BOOLEAN NOT NULL;
