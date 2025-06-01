"use server";

import { __PROD__, secretName } from "@/config/globals.config";
import { SessionPayload } from "@/interfaces/auth/session-payload.interfaces";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { encrypt } from "./utils";

/**
 *
 * @param SessionPayload
 */
export async function createSession(payload: SessionPayload) {
  const session = await encrypt(payload);
  const cookieStore = await cookies();

  cookieStore.set(secretName, session, {
    httpOnly: true,
    secure: __PROD__,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(secretName);
}

/**
 *
 * @param SessionPayload
 */
export async function createMiddlewareSession(
  response: NextResponse,
  payload: SessionPayload
) {
  const session = await encrypt(payload);

  response.cookies.set(secretName, session, {
    httpOnly: true,
    secure: __PROD__,
    sameSite: "lax",
    path: "/",
  });
}
