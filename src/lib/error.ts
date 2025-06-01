export class ResponseError extends Error {
  response: globalThis.Response;

  constructor(message: string, res: globalThis.Response) {
    super(message);
    this.response = res;
  }
}

export const defaultError = {
  data: null,
  successMessage: null,
  errorMessages: [
    {
      errorCode: "bad_request",
      errorText: "Something went wrong!",
    },
  ],
  isSuccess: false,
  status: "BadRequest",
};
