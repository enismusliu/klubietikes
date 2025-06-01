// lib/trpc/server.ts
import { headers } from "next/headers";
import { createCaller } from "@/server/root";
import { createTRPCContext } from "@/server/trpc";

/**
 * Build a new tRPC caller inside a request scope.
 */
export async function getTrpcCaller() {
  // 1. Grab the incoming headers (only works inside a component or route handler)
  const incoming = await headers();

  // 2. Copy them into a mutable Headers instance
  const entries: [string, string][] = [];
  incoming.forEach((value, key) => entries.push([key, value]));
  const heads = new Headers(entries);

  // 3. Add your custom header
  heads.set("x-trpc-source", "rsc");

  // 4. Build the context and return a caller
  const ctx = await createTRPCContext({ headers: heads });
  return createCaller(ctx);
}
