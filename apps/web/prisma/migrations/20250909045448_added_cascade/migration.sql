-- DropForeignKey
ALTER TABLE "public"."event_forms" DROP CONSTRAINT "event_forms_eventId_fkey";

-- DropForeignKey
ALTER TABLE "public"."event_registrations" DROP CONSTRAINT "event_registrations_eventId_fkey";

-- DropForeignKey
ALTER TABLE "public"."event_registrations" DROP CONSTRAINT "event_registrations_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."form_submissions" DROP CONSTRAINT "form_submissions_eventId_fkey";

-- DropForeignKey
ALTER TABLE "public"."form_submissions" DROP CONSTRAINT "form_submissions_formId_fkey";

-- DropForeignKey
ALTER TABLE "public"."form_submissions" DROP CONSTRAINT "form_submissions_userId_fkey";

-- AddForeignKey
ALTER TABLE "public"."event_registrations" ADD CONSTRAINT "event_registrations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event_registrations" ADD CONSTRAINT "event_registrations_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event_forms" ADD CONSTRAINT "event_forms_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."form_submissions" ADD CONSTRAINT "form_submissions_formId_fkey" FOREIGN KEY ("formId") REFERENCES "public"."event_forms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."form_submissions" ADD CONSTRAINT "form_submissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."form_submissions" ADD CONSTRAINT "form_submissions_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
