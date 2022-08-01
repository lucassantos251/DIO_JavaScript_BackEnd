import { database } from '../src/database.js';
export class UsersController {
    listarUsuario(request, response) {
        return response.status(200).json(database);
    }
    criarUsuario(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response.status(403).json({ 'mensagem': `Não é possível criar usuários sem um nome` });
        }
        database.push(name);
        return response.status(201).json({ 'mensagem': `Usuário ${name} criado com sucesso.` });
    }
}
