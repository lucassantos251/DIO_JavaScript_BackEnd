import { Request, Response } from 'express'
import DeleteUserService from '../services/DeleteUserService'


class DeleteUserController {
  async handle(req: Request, res: Response) {
    const deleteUserService = new DeleteUserService()

    const { id } = req.params

    await deleteUserService.execute({ id })

    return res.sendStatus(204)
  }
}

export default DeleteUserController