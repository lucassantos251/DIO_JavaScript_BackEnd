import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/user.routes'

const app = express()
const port = 3000

app.use(usersRoute)

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ message: 'Get com sucesso.'})
})

app.listen(port, () => {
  console.log('App is running on port:' + port)
})