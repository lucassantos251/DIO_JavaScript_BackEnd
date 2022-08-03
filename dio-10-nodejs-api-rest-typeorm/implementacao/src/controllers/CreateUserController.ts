import { Request, Response, NextFunction } from 'express'
import CreateUserService from '../services/CreateUserService'
import { v4 as uuid } from 'uuid'

class CreateUserController {
  async handle(req: Request, res: Response, next?: NextFunction) {

    const createUserService = new CreateUserService()

    const id: string = uuid()
    const name:string = req.body.name
    const email: string = req.body.email

    if(name.length === 0) {
      return res.status(400).json({mensagem: 'Preencha o nome'})
    }

    const user = await createUserService.execute({id, name, email})

    return res.status(201).json({id})
  }
}

export default CreateUserController