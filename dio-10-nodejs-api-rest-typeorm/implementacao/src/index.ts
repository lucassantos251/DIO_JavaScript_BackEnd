import 'reflect-metadata'
import express from 'express'
import routes from './routes'
import createConnection from './database'

createConnection()
const server = express()
const port = 3000

server.use(express.json())

server.use(routes)

server.listen(port, () => {
  console.log('Servidor rodando http://localhost:3000')
})