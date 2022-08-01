import { UserService } from './UserService'
import { getMockUser } from '../__mocks__/mockUser'

// sobre escrever a implementação real
jest.mock('../repositories/UserRepository')
const mockUserRepository = require('../repositories/UserRepository')

describe('User Service', () => {
  const mockUser = getMockUser()

  const userService = new UserService({
    userRepository: mockUserRepository,
    name: 'Teste',
    email: 'teste@email.com'
  })
  it('Deve retornar o usuário, quando for salvo', async () => {
    mockUserRepository.save = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
    const user = await userService.createUser()
    expect(user).toHaveProperty('user_id')
    expect(user).toMatchObject({
      name: 'Teste',
      email: 'teste@email.com'
    })
  })
})