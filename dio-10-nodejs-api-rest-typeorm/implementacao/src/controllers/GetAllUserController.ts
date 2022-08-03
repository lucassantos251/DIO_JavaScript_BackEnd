import { Request, Response } from 'express'
import GetAllUserService from '../services/GetAllUserService'

class GetAllUserController {
  async handle(req: Request, res: Response) {
    const getAllUserService = new GetAllUserService()

    const users = await getAllUserService.execute()

    return res.status(200).json(users)
  }
}

export default GetAllUserController