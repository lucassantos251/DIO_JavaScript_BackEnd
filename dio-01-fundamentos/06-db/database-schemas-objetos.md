# Database, Schemas e Objetos

## Database
É o banco de dados.
Grupo de schemas e seus objetos, como tabelas, types, views, funções, entre outros.
Seus schemas e objetos não podem ser compartilhados entre si.
Cada database é separado um do outro compartilhando apenas usuários/roles e configurações do cluster PostgreSQL.

## Schemas
É um grupo de objetos, como tabelas, types, views, funções, entre outros.
É possível relacionar objetos entre diversos schemas.
Por exemplo: schema public e schema curso podem ter tabelas com o mesmo nome (teste por exemplo) relacionando-se entre si.

## Objetos
São as tableas, views, funções, types, sequences, entre outros. pertencentes aos schemas.