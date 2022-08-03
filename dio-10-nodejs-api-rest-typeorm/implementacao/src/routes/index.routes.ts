import { Router, Request, Response, NextFunction } from 'express'

const indexRoute = Router()

indexRoute.get('/', (req: Request, res: Response, next?: NextFunction) => {
  return res.status(200).json(
    {
      "mensagem": "Bem vindo a API",
      "rotas": "/users"
    })
})

export default indexRoute