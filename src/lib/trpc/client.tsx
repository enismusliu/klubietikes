import type { AppRouter } from '@/server/root';
import { createTRPCReact } from '@trpc/react-query';

/**
 * this util will be used to make client side calls
 */
export const trpc = createTRPCReact<AppRouter>();
