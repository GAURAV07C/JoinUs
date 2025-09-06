/*
  Warnings:

  - Added the required column `lable` to the `event_forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."event_forms" ADD COLUMN     "lable" TEXT NOT NULL;
