# Conceitos

Roles (papéis ou funções), users (usuários) e grupo de usuários são "contas", perfis de atuação em um banco de dados, que possuem permissões em comum ou específicas.

Nas versões anteriores do PostgreSQL 8.1, usuários e roles tinham comportamentos diferentes. Atualmente, roles e users são alias.

É possível que roles pertençam a outras roles;

![img-01](img/01-roles.png)
![img-02](img/02-create-role.png)
![img-03](img/03-create-role.png)

## Associação entre roles

Quando uma role assume as permissões de outra role.
Necessário a opção **INHERIT**

No momento de criação da role:
- **IN ROLE** (passa a pertercer a role informada)
- **ROLE** (a role informada passa a pertercer a nova role)

Ou após a criação da role:
- **GRANT** [role a ser concedida] **TO** [role a assumr as permissões]

![img-04](img/04-associacao-role.png)

## Desassociar membros entre roles

- **REVOKE** [role que será revogada] **FROM** [role que terá suas permissões revogadas].

![img-05](img/05-desassociar-role.png)
![img-06](img/06-alterar-role.png)
![img-07](img/07-db-schema-table.png)
![img-08](img/08-revoke.png)
![img-09](img/09-db-schema.png)
![img-10](img/10-table.png)
![img-11](img/11-revogar.png)

## Excluir uma role

- **DROP ROLE** role_specification;

## Listar roles no terminal
Dentro do psql:

**\du**

