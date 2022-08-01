# Fundamentos de banco de dados

### Dados:
Valores brutos, fatos brutos, observações documentadas, registros soltos, que são recolhidos e armazenados sem sofrer qualquer tratamento.

### Informações:
Estruturação de dados, organização de dados. Conjunto de dados relacionados entre si que geram valor, que criam sentidos aos dados. Material do conhecimento.

## Modelo relacional de dados

### Modelar:
Criar um modelo, vai explicar as características de funcionamento, vai explicar o comportamendo de um programa ou software, modelo de dados são ferramentas que permitem como os dados estão organizados e relacionados entre si

### Modelo relacional:
Modelo mais comum, que classifica e organiza as informações em tabelas com linhas e colunas (EXCEL). As linhas, ou tuplas, são os dados organizados, são os valores das tabelas, e as colunas são os atributos destes dados.

![imagem-01](img/Captura%20de%20tela%202022-07-25%20102322.png)

### Tabelas:
Conjuntos de dados dispostos em colunas e linhas referentes a um objetivo comum. 
As colunas são consideradas como "campos da tabela", como atributos da tabela.
As linhas de uma tabela são chamadas também de tuplas, e é onde estão contidos os valores, os dados.


![imagem-02](img/Captura%20de%20tela%202022-07-25%20103808.png)

### Coisas tangíveis:
Elementos físicos (carro, produto, animal)

### Funções:
Perfis de usuário, status de compra

### Eventos ou ocorrências:
Produtos de um pedido, histórico de dados

### Colunas importantes:
- Chave Primária / Primary Key / PK:
  
Conjunto de um ou mais campos que nunca se repetem. Identidade da tabela. São utilizados como índice de referência na criação de relacionamentos entre tabelas.

- Chave Estrangeira / Foreign Key / FK:
  
Valor de referência a uma PK de outra tabela ou da mesma tabela para criar um relacionamento.

### Sistema de Gerenciamento de banco de dados:
Ou sistemas de gestão de base de dados. Chamamos pela sigla SGBD. Conjunto de programas ou softwares responsáveis pelo gerenciamento de um banco de dados. Programas que facilitam a administração de um banco de dados.

ORACLE, PostgreSQL, MySQL, Microsoft SQL Server, mongoDB, elasticsearch, IMB DB2

## Introdução ao PostgreSQL

- Sistema de gerenciamento de banco de dados objeto relacional.
- SGBD Opensource.
- Point in time recovery.
- Linguagem procedural com suporte a várias linguagens de programação (perl, python, etc)
- Views, functions, procedures, triggers.
- Consultas complexas e Common table expressions (CTE).
- Suporte a dados geográficos (PostGIS).
- Controle de concorrência multi-versão.

Site Oficial:
https://www.postgresql.org/

Download:
https://www.postgresql.org/download/

Documentação:
https://www.postgresql.org/docs/manuals/


![imagem-03](img/Captura%20de%20tela%202022-07-25%20104515.png)
![imagem-04](img/Captura%20de%20tela%202022-07-25%20104749.png)