import UpdateUserService from './UpdateUserService'
import FakeData from '../utils/fakeData'

import createConnection from '../database'
import { getConnection } from 'typeorm'

describe('UpdateUserService', () => {
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

  it('Deve editar o nome do usuário',async () => {
    const testUser = await fakeData.createUser() 

    const updateUserService = new UpdateUserService()

    const result = await updateUserService.execute({
      id: testUser.id,
      name: 'Test User'
    })

    expect(result).toHaveLength(0)
  })
})