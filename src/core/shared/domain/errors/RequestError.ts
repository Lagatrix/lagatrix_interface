export class RequestError extends Error {
  public code: number

  constructor(message: string, code: number = 0) {
    super(message)
    this.code = code

    this.name = this.constructor.name
  }
}
