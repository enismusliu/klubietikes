import { Error, Response } from "@/types";
import { MutationCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
  mutationCache: new MutationCache({
    onSuccess: (data, _variables, _context, mutation) => {
      const response = data as unknown as Response;
      if (response.errorMessages) throw response.errorMessages;
      if (!mutation.meta?.preventToaster) {
        const { successMessage } = data as Response;
        toast.success(successMessage || "Request Successfully", {
          duration: 1500,
        });
      }
    },
    onError: (error, _variables, _context, mutation) => {
      const errors = error as unknown as Error[];
      toast.error(errors[0].errorText, {
        duration:
          typeof mutation?.meta?.duration === "number"
            ? mutation.meta.duration
            : 1500,
      });
    },
  }),
});
