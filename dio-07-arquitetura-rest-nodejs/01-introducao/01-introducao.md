# Explorando o Estilo Arquitetural REST com Node.js

Instrutor: Renan Johannsen

Linkedin: https://linkedin.com/in/renanjpaula

GitHub: https://github.com/RenanJPaula

## Percurso

- Estilo Arquitetural REST
- Criando uma API REST na Prática com Node.js + Express
- Próximos Passos

A idéia é criar um micro-serviço de autenticação. Gerenciar o cadastro do usuário e gerenciar a autenticação do usuário dentro da nossa plataforma.

**Base Autentication** - baseado no protocolo HTTP (forma mais simples)

**JWT** - token (garantia de consistências)

![img01](img/Captura%20de%20tela%20de%202022-08-01%2019-01-33.png)

![img02](img/Captura%20de%20tela%20de%202022-08-01%2019-03-30.png)

### CRUD de Usuários
- GET /users
- GET /users/:uuid
- POST /users
- PUT /users/:uuid
- DELETE /users/:uuid

### Autenticação
- POST /token
- POST /token/validate

### Ferramentas

- Node.js
- Typescript
- Express