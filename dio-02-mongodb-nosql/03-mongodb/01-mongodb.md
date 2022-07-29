# MongoDB

1. Introdução do MongoDB
2. Instalação do MongoDB utilizando Docker
3. Apresentação do MongoDB Cloud

## Introdução

- Open Source
- Alta Performance
- Schema-free
- Utiliza JSON para armazenamento dos dados
- Suporte a índices
- Auto-Sharding (escala horizontal)
- Map-Reduce (ferramenta de consulta e agregação)
- GridFS (armazenamento de arquivos)
- Rica linguagem de Consulta

Document ==> Tupla/Registro

Collection ==> Tabela

Embedding/linking ==> Join

### Quando utilizar:
- Utilizado para grande volume de dados. 
- Necessita de uma boa modelagem de dados para entrega de alta performance.
- Dados não necessariamente estruturados.

### Quando não utilizar:
- Não é bom quando existe a necessidade de relacionamentos/joins.
- Quando propriedades ACID e transações são importantes.
- Curiosidade: diversas entidades de pagamento não homologam sistemas cujos dados financeiros dos clientes não estejam em bancos de dados relacionais tradicionais.

Empresas que atualmente utilizam MongoDB: LinkedIn, Globo, MTV.