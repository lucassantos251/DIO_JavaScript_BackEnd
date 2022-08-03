import UpdateUserController from './UpdateUserController'

import createConnection from '../database'
import { getConnection } from 'typeorm'

import { Request } from 'express'
import { mockResponse } from '../utils/mocks/MockResponse'
import FakeData from '../utils/fakeData'

describe('UpdateUserController', () => {
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

  it('Deve retornar status 204 quando usuário for editado', async () => {

    const mockUser = await fakeData.createUser() 
    
    const updateUserController = new UpdateUserController()

      const request = {
        body: {
          id: mockUser.id,
          name: 'Update',
          email: 'update@email.com'
        }
      } as Request

      const response = mockResponse()

      await updateUserController.handle(request, response)

      expect(response.state.status).toBe(204)
  })
})