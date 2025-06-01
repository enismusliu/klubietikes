import 'server-only';

import { secretKey } from '@/config/globals.config';
import { SessionPayload } from '@/interfaces/auth/session-payload.interfaces';
import { SignJWT, jwtVerify } from 'jose';

const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '', key?: string) {
  if (!session) return null;

  try {
    const { payload } = await jwtVerify(
      session,
      key ? new TextEncoder().encode(key) : encodedKey,
      {
        algorithms: ['HS256'],
      },
    );

    return payload as SessionPayload;
  } catch (error) {
    return null;
  }
}
