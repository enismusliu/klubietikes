import "server-only";

import { cookies } from "next/headers";

import { secretName } from "@/config/globals.config";
import { decrypt } from "./utils";

export const getBearerToken = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(secretName)?.value;
  const session = await decrypt(cookie);

  return !session ? null : session.access_token;
};

export const auth = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(secretName)?.value;
  const session = await decrypt(cookie);

  return !session ? null : session.user;
};

export const getPermissions = async (): Promise<{
  [key: string]: string[];
} | null> => {
  const cookieStore = await cookies();
  const permissions = cookieStore.get("permissions")?.value;
  return !permissions ? null : JSON.parse(permissions);
};

export async function hasPermission({
  module,
  permify,
}: {
  module: string;
  permify: string;
}) {
  const permissions = await getPermissions();
  return permissions &&
    permissions?.[module]?.find((item: string) => item === permify)
    ? true
    : false;
}
