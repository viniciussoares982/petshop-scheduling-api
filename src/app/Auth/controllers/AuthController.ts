import { Request, Response } from 'express'

class AuthController {
  async create(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: 'hello world!' })
  }

  async destroy() {
    return undefined
  }
}

export default new AuthController()
