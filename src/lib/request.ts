import { getBearerToken } from "@/auth/dal";
import { API_URL } from "@/config/globals.config";
import { QueryParams, Response } from "@/types";
import { ResponseError, defaultError } from "./error";
import { removeFalsyValuesFromObj } from "./utils";

export default async function request<T = null>(
  endpoint: string | URL | Request,
  options:
    | (RequestInit & {
        params?: QueryParams;
      })
    | undefined = {}
) {
  /**
   * @constant
   */
  const isFormData = options.body ? options.body instanceof FormData : false;

  options.params = {
    ...options.params,
  };

  const queryString = options.params
    ? `${endpoint.toString().includes("?") ? "&" : "?"}${new URLSearchParams(
        removeFalsyValuesFromObj(options.params as any)
      )}`
    : "";

  /**
   * @authentication
   */
  const access_token = await getBearerToken();

  /**
   * @headers
   */
  const headers = {
    ...(!isFormData && { "Content-Type": "application/json" }),
    ...(access_token && { Authorization: `Bearer ${access_token}` }),
  };

  /**
   * @config
   */
  const config = {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  };

  try {
    const response = await fetch(
      `${API_URL}/${endpoint}${queryString}`,
      config
    );
    const data: Response<T> = await response.json();
    return data;
  } catch (err) {
    if (err instanceof ResponseError) {
      switch (true) {
        case err.response.status >= 400 && err.response.status < 500:
          const errorMessage = await err.response.text();
          const errorResponse = JSON.parse(errorMessage) as Response<T>;

          return errorResponse;
        default:
          return defaultError as unknown as Response<T>;
      }
    }

    return defaultError as unknown as Response<T>;
  }
}
