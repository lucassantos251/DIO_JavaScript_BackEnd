import express from 'express'
import statusRoute from './routes/status.route'
import usersRoute from './routes/user.routes'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(statusRoute)
app.use(usersRoute)


app.listen(port, () => {
  console.log('App is running on port:' + port)
})