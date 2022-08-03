import DeleteUserController from './DeleteUserController'

import createConnection from '../database'
import { getConnection } from 'typeorm'

import FakeData from '../utils/fakeData'
import { mockRequest } from '../utils/mocks/MockRequest'
import { mockResponse } from '../utils/mocks/MockResponse'

describe('DeleteUserController', () => { 
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async () => {
    const connection = getConnection()
    await connection.close()
  })

  const fakeData = new FakeData()

  it('Deve retornar status 204 quando o usuário for deletado', async () => {
    const mockUser = await fakeData.createUser()

    const deleteUserController = new DeleteUserController()

    const request = mockRequest({
      params: {
        id: mockUser.id
      }
    })

    const response = mockResponse()

    await deleteUserController.handle(request, response)

    expect(response.state.status).toBe(204)
  })
})