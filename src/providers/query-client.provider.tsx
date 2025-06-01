"use client";

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { PropsWithChildren } from "react";

import {
  QueryClient,
  QueryClientProvider as TSQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/lib/query-client";
import TRPCProvider from "./trpc.provider";

function makeQueryClient() {
  return queryClient;
}

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  return (browserQueryClient ??= makeQueryClient());
};

export default function QueryClientProvider({ children }: PropsWithChildren) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return (
    <TRPCProvider queryClient={queryClient}>
      <TSQueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </TSQueryClientProvider>
    </TRPCProvider>
  );
}
