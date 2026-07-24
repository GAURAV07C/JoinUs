/*
  Warnings:

  - You are about to drop the column `lable` on the `event_forms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."event_forms" DROP COLUMN "lable",
ADD COLUMN     "label" TEXT;
