import CreateUserController from './CreateUserController'
import { Request } from 'express'
import { mockResponse } from '../utils/mocks/MockResponse'
import createConnection from '../database'
import { getConnection } from 'typeorm'

describe('CreateUserController', ()=> {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async() => {
    const connection = getConnection()
    await connection.query('DELETE FROM users')
    await connection.close()
  })

  const createUserController = new CreateUserController()

  const response = mockResponse()

  it('Deve retornar 201 quando o usuário for criado', async ()=> {    
    const request = {
      body: {
        name: 'Test User',
        email: 'test@email.com'
      }
    } as Request

    await createUserController.handle(request, response)

    expect(response.state.status).toBe(201)
  })
  it('Deve retornar o status 201 quando o email não for informado', async () => {
    const request = {
      body: {
        name: 'Test User',
        email: ''
      }
    } as Request

    await createUserController.handle(request, response)

    expect(response.state.status).toBe(201)
  })

  it('Deve retornar o status 400 quando o nome não for informado', async () => {
    const request = {
      body: {
        name: '',
        email: 'test@email.com'
      }
    } as Request

    await createUserController.handle(request, response)

    expect(response.state.status).toBe(400)
  })

})