export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://orca-api-cfcah7b5f5hmg0ff.canadacentral-01.azurewebsites.net/api/v1";

export const __PROD__ = process.env.NODE_ENV === "production";

/**
 * authentication
 */
export const secretKey =
    process.env.AUTH_SECRET || "EkBwQzkZJuH8mBFyybCqXWXP4xzUj6FvYUeB68Ln9pQ=",
  secretName = process.env.AUTH_SECRET_NAME || "authjs.secret";

export const BASE_URL = "https://www.klubietikes.com";
