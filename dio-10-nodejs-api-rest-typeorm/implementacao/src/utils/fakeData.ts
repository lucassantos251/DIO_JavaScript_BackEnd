import CreateUserService from '../services/CreateUserService'
import { v4 as uuid } from 'uuid'

class FakeData {
  createUserService = new CreateUserService()

  async execute(){

    const testUser1 = {
      id: uuid(),
      name: `Test User 1`,
      email: `test1@email.com`
    }

    const testUser2 = {
      id: uuid(),
      name: `Test User 2`,
      email: ``
    }

    await this.createUserService.execute(testUser1)
    await this.createUserService.execute(testUser2)
  }

  async createUser() {
    const testUser = {
      id: uuid(),
      name: `Test User`,
      email: `test@email.com`
    }

    const user = await this.createUserService.execute(testUser)
    return user
  }
}

export default FakeData