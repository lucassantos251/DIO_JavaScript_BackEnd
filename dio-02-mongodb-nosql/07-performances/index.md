# Perfomance

É uma boa prática a criação de index para as propriedades dos dados.

Consultando uma query com index criado evita que o banco de dados percorra todos os documentos em busca de uma query.

    db.getCollection('clients).createIndex({name: 1}, {"name": "idx_name"});