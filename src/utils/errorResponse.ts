export class ErrorResponse extends Error {
  public readonly code;
  constructor(opts: {message: string; code: number | string}) {
    const message = opts.message;
    const code = opts.code;
    super(message);
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}
