import express from 'express'
import basicAuthenticationMiddleware from './middlewares/basic-authentication.middleware'
import errorHandler from './middlewares/error-handler.middleware'
import authorizationRoute from './routes/authorization.routes'
import statusRoute from './routes/status.routes'
import usersRoute from './routes/user.routes'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(statusRoute)
app.use(usersRoute)
app.use(authorizationRoute)

app.use(errorHandler)

app.listen(port, () => {
  console.log('App is running on port:' + port)
})