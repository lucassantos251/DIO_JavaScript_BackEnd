import { Request, response, Response } from 'express'
import UpdateUserService from '../services/UpdateUserService'

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const updateUserService = new UpdateUserService()

    //const id = req.id
    const { id, name, email } = req.body

    if(id.length === 0) {
      return res.status(400).json({mensagem: 'Id não informado'})
    }

    if(name.length === 0) {
      return res.status(400).json({mensagem: 'Nome não informado'})
    }

    await updateUserService.execute({ id, name, email })

    return res.status(204)
  }

}

export default UpdateUserController