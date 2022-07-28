# Tabelas, Colunas e Tipos de dados

Conjuntos de dados dispostos em colunas e linhas referentes a um objetivo comum.
As colunas são consideradas como "campos da tabela", como atributos da tabela.
As linhas de uma tabela são chamadas também de tuplas, e é onde estão contidos os valores, os dados.

## Primary Key / Chave Primária / PK

No conceito de modelo de dados relacional e obedecendo as regras de normalização, uma PK é um conunto de um ou mais campos que nunca se repetem em uma tabela e que seus valores garantem a integridade do dado único e a utilização do mesmo como referência para o relacionamento entre demais tabelas.

- não pode haver duas ocorrências de uma mesma entidade com o mesmo conteúdo na PK.
- a chave primária não pode ser composta por atributo opcional, ou seja, atributo que aceite nulo.
- os atributos identificadores devem ser o conjunto mínimo que pode identificar cada instância de uma entidade.
- não devem ser usadas chaves externas.
- não deve conter informação volátil.

## Foreign Key / Chave Estrangeira / FK

Campo, ou conjunto de campos que são referêncicas de chaves primárias de outras tabelas ou da mesma tabela.
Sua principal função é garantir a integridade referencial entre tabelas.

## Tipos de dados

**Numeric Types**
Monetary Types
**Character Types**
Binary Data Types
**Date/Time Types**
**Boolean Type**
Enumerated Types
Geometric Types
Network Adress Types
Bit String Types
Text Search Types
UUID Types
XML Types
JSON Types
Arrays
Composite Types
Range Types
Domain Types
Object Identifier Types
pg_lsn Type
Pseudo-Types

Cuidado com o tamanho dos dados.