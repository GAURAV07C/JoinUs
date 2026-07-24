import { useMutation } from "@tanstack/react-query";
import { useFormSubmissionStore } from "@/stores/submission-store";
import { submitFormAndRegisterAction } from "@/actions/submition";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export function useFormSubmission(eventId: string, formId: string) {
  const router = useRouter();
  const setFormData = useFormSubmissionStore((state) => state.setFormData);
  const setSubmitting = useFormSubmissionStore((state) => state.setSubmitting);
  const setSuccess = useFormSubmissionStore((state) => state.setSuccess);
  const setError = useFormSubmissionStore((state) => state.setError);
  const setProgress = useFormSubmissionStore((state) => state.setProgress);
  const reset = useFormSubmissionStore((state) => state.reset);

  const mutation = useMutation({
    mutationFn: async (data: Record<string, any>) => {
      setSubmitting(true);
      setError(null);
      setProgress(0);
      setFormData(data);

      const steps = [25, 50, 75, 100];

      for (const step of steps) {
        await new Promise((res) => setTimeout(res, 400));
        setProgress(step);
      }

      const result = await submitFormAndRegisterAction(eventId, formId, data);

      if (!result.success) {
        throw new Error(result.message);
      }

      return result;
    },
    onSuccess: (data) => {
      setSuccess(true);
      toast.success(data.message);

      if (data.registrationId) {
        router.push(
          `/event/${eventId}/qr?registrationId=${data.registrationId}`
        );
      }
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "Failed to submit form";
      setError(message);
      toast.error(message);
    },
    onSettled: () => setSubmitting(false),
  });

  return {
    submitForm: mutation.mutateAsync,
    isSubmitting: useFormSubmissionStore((state) => state.isSubmitting),
    progress: useFormSubmissionStore((state) => state.progress),
    isSuccess: useFormSubmissionStore((state) => state.isSuccess),
    error: useFormSubmissionStore((state) => state.error),
    reset,
  };
}
