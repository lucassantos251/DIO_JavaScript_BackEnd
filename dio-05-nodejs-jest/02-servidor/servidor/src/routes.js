import { Router } from 'express'
import { usersController } from '../controllers/usersController.js'

const routes = Router()

routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

// GET - ler os dados
// POST - criar os dados
// PUT/PATCH - editar os dados
// DELETE - deletar os dados

// STATUS CODE
// 200 e 201 - sucesso e sucesso na criação de dados
// 403 - não autorizado
// 404 - pagina não encontrada

export { routes }
