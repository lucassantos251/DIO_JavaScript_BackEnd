import createConnection from '../database'
import { getConnection } from 'typeorm'
import GetAllUserService from './GetAllUserService'
import FakeData from '../utils/fakeData'

describe('GetAllUserService', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async () => {
    const connection = getConnection()
    await connection.query('DELETE FROM users')
    await connection.close()
  })
  
  const fakeData = new FakeData()
  
  it('Deve retornar todos os usuários cadastrados.',async () => {
    await fakeData.execute()
    
    const expectedResponse = [
      {
        name: 'Test User 1',
        email: 'test1@email.com'
      },
      {
        name: 'Test User 2',
        email: ''
      }
    ]

    const getAllUserService = new GetAllUserService()

    const result = await getAllUserService.execute()

    expect(result).toMatchObject(expectedResponse)
  })
})