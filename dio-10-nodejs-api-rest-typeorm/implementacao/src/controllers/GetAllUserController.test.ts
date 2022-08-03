import GetAllUserController from './GetAllUserController'
import createConnection from '../database'
import { getConnection } from 'typeorm'
import FakeData from '../utils/fakeData'
import { mockRequest } from '../utils/mocks/MockRequest'
import { mockResponse } from '../utils/mocks/MockResponse'

describe('GetAllUserController',() => {
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

  it('Deve retornar status 200 quando pegar todos os usuários', async () => {
    await fakeData.execute()

    const getAllUserController = new GetAllUserController()

    const request = mockRequest({})

    const response = mockResponse()

    await getAllUserController.handle(request, response)

    expect(response.state.status).toBe(200)
  })
})