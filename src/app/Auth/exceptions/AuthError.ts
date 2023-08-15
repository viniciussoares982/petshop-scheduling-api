/* eslint-disable no-useless-constructor */

export default class AuthError extends Error {
  constructor(message: string) {
    super(message)
  }
}
