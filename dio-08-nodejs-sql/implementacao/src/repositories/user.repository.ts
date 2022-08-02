import db from "../db";
import User from "../models/user.model";


class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `
      SELECT uuid, username
      FROM app_user
    `;

    const { rows } = await db.query<User>(query)
    return rows || []
  }

  async findById(uuid:string): Promise<User> {
    const query =`
      SELECT uuid, username
      FROM app_user
      WHERE uuid = $1
    `;
    const values = [uuid]
    const { rows } = await db.query<User>(query, values)
    const [user] = rows
    // const user = rows[0]
    return user
  }

  // async createUser(username:string, password:string): Promise<User> {
  //   const query =`
  //     INSERT INTO app_user (username, password) 
  //     VALUES ($1, crypt($2, 'my_salt'));
      
  //     SELECT uuid, username
  //     FROM app_user
  //     WHERE username = $1;
  //   `
  //   const values = [username, password]
  //   const { rows } = await db.query<User>(query, values)
  //   const [user] = rows
  //   return user
  // }

  async createUser(user: User): Promise<string> {
    const script = `
      INSERT INTO app_user (username, password)
      VALUES ($1, cript ($2, 'my_salt'))
      RETURNING uuid;
    `

    const values = [user.username, user.password]
    const { rows } = await db.query<{ uuid: string }>(script, values)
    const [newUser] = rows
    return newUser.uuid
  }
}

export default new UserRepository()