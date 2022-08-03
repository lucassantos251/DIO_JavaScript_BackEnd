import { getRepository } from 'typeorm'
import User from '../entities/User'

class GetAllUserService {
  async execute(){
    const usuarios = await getRepository(User)
      .createQueryBuilder('users')
      .select()
      .getMany()

      console.log(usuarios)
      return usuarios
  }
}

export default GetAllUserService