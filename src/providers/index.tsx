import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dialog from "@/components/dialog";
import QueryClientProvider from "./query-client.provider";
import { UserProviderProps } from "./provider.types";

export default function Providers({ children }: UserProviderProps) {
  return (
    <QueryClientProvider>
      <TooltipProvider>
        {children}
        <Toaster position="bottom-left" richColors theme="light" />
        <Dialog />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
