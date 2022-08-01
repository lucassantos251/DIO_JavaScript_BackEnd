import { Request, Response, NextFunction, Router } from "express";

const usersRoute = Router()

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{
    username: 'Lucas'
  }]
  res.status(200).json(users)
})

usersRoute.get('users/:uuid', (req: Request, res: Response, next: NextFunction) => {
  req.
  res.sendStatus(200)
})

export default usersRoute;

/* ### CRUD de Usuários
- GET /users
- GET /users/:uuid
- POST /users
- PUT /users/:uuid
- DELETE /users/:uuid

### Autenticação
- POST /token
- POST /token/validate */