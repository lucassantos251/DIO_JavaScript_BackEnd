import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:5001'
})

describe('/user', () => {
  it('Deve retornar o status 201', async () => {
    const user = await server.post('/user', {
      name: 'Teste',
      email: 'teste@email.com'
    })

    expect(user.status).toBe(201)
  })
})