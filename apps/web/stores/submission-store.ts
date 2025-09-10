import { create } from "zustand";

interface FormSubmissionState {
  formData: Record<string, any> | null;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  progress: number; // ✅ progress bar

  // Actions
  setFormData: (data: Record<string, any>) => void;
  setSubmitting: (submitting: boolean) => void;
  setSuccess: (success: boolean) => void;
  setError: (error: string | null) => void;
  setProgress: (value: number) => void;
  reset: () => void;
}

export const useFormSubmissionStore = create<FormSubmissionState>((set) => ({
  formData: null,
  isSubmitting: false,
  isSuccess: false,
  error: null,
  progress: 0,

  setFormData: (formData) => set({ formData }),
  setSubmitting: (isSubmitting) => set({ isSubmitting }),
  setSuccess: (isSuccess) => set({ isSuccess }),
  setError: (error) => set({ error }),
  setProgress: (progress) => set({ progress }),
  reset: () =>
    set({
      formData: null,
      isSubmitting: false,
      isSuccess: false,
      error: null,
      progress: 0,
    }),
}));
