export class CustomError extends Error {
  public readonly code;
  constructor(opts: {message: string; code: number}) {
    const message = opts.message;
    const code = opts.code;

    super(message);

    this.code = code;
    // this.name = 'customError';

    // Object.setPrototypeOf(this, new.target.prototype);
  }
}
