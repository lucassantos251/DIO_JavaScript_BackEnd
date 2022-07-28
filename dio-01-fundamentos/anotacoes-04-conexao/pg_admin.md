# PGAdmin

## Importante para conexão:

1. Liberar acesso ao cluster em postgresql.conf
2. Liberar acesso ao cluster para o usuário do banco de dados em pg_hba.conf
3. Criar/editar usuários

## Terminal:
- sudo -i (acesso ao root)
- su - postgres (acesso ao usuario postgresql)
- ### psql -host () -port () -User ()
- psql -h 127.0.0.1 -p 5432 -U postgres (parâmetro default)
- ### ALTERAR USUARIO () PASSWORD ('');
- ALTER USER postgres PASSWORD '';

(todos os comandos SQL terminam com ;)