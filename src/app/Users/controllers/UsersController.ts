import { Request, Response } from 'express'

class UsersController {
  async index(_req: Request, res: Response): Promise<Response> {
    const users = [
      { id: '123', email: 'admin@example.com' },
      { id: '456', email: 'jullmr@example.com' },
      { id: '789', email: 'vsoaz@example.com' },
    ]

    return res.status(200).json(users)
  }
}

export default new UsersController()
