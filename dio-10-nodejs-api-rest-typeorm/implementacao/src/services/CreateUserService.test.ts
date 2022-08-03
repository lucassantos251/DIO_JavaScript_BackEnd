import { getConnection } from 'typeorm'
import createConnection from '../database'
import CreateUserService from './CreateUserService'

describe('CreateUserService', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async () => {
    const connection = getConnection()
    await connection.query('DELETE FROM users')
    await connection.close()
  })

  it('Deve retornar o ID do usuário criado', async () => {
    const createUserService = new CreateUserService()

    const testUser = {
      id: '5b618a05-5f36-4405-9dfd-426657c3dc5a',
      name: 'Teste',
      email: 'teste@email.com'
    }

    const result = await createUserService.execute(testUser)

    console.log(result)

    expect(result).toHaveProperty('id')
  })
})