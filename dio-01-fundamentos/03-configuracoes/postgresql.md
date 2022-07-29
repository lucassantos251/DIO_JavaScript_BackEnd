# PostgreSQL.conf

Arquivo onde estão definidas e armazenadas todas as configurações do servidor PostgreSQL.
Alguns parâmetros só podem ser alterados com uma reinicialização do banco de dados.
A view pg_settings, acessada por dentro do banco de dados, guarda todas as configurações atuais.

![imagem-01](img/Captura%20de%20tela%20de%202022-07-25%2011-49-48.png)

Por padrão, encontra-se dentro do diretório PGDATA definido no momento da inicialização do cluster de banco de dados.

No Ubuntu, se o PostgreSQL foi instalado a partir do repositório oficial, o local do arquivo postgresql.conf será diferente do diretório de dados.
>/etc/postgresql/[versao]/[nome do cluster]/postgresql.conf

![imagem-02](img/Captura%20de%20tela%20de%202022-07-25%2011-52-30.png)
![imagem-03](img/Captura%20de%20tela%20de%202022-07-25%2011-52-43.png)
![imagem-04](img/Captura%20de%20tela%20de%202022-07-25%2011-53-15.png)
![imagem-05](img/Captura%20de%20tela%20de%202022-07-25%2011-53-39.png)

## Configurações de conexão

### - LISTEN_ADDRESSES
Endereço(s) TCP/IP das interfaces que o servidor PostgreSQL vai escutar/liberar conexões. (não use *)

### - PORT
A porta TCP que o servidor PostgreSQL vai ouvir. O padrão é 5432.

### - MAX_CONNECTIONS
Número máximo de conexões simultâneas no servidor PostgreSQL.

### - SUPERUSER_RESERVED_CONNECTIONS
Número de conexões (slots) reservadas para conexões ao banco de dados de super usuários.

## Configurações de autenticação

### - AUTHENTICATION_TIMEOUT
Tempo máximo em segundos para o cliente conseguir uma conexão com o servidor.

### - PASSWORD_ENCRYPTION
Algoritmo de criptografia das senhas dos novos usuários criados no banco de dados.

### - SSL
Habilita a conexão criptografada por SSL
(Somente se o PostgreSQL foi compilado com suporte SSL)

## Configurações de Memória

### - SHARED_BUFFERS
Tamanho da memória compartilhada do servidor Postgre para cache/buffers de tabelas, índices e demais relações. (Recomendado utilizar 25% da memória)

### - WORK_MEM
Tamanho da memória exclusiva para operações de agrupamento e ordenação (ORDER BY, DISTINCT, MERGE JOINS).

### - MAINTENANCE_WORK_MEM
Tamanho da memória exclusiva para operações administrativas como VACUUM, INDEX, ALTER TABLE. (recomendado aumentar a memória para execução e depois diminuir)
