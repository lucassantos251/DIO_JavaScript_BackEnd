# Revisao

## - PK
## - FK
## - Tipos de Dados
## - DDL
## - DML

## IDEMPOTÊNCIA
Propriedade que algumas ações/operações possuem possibilitando-as de serem executadas diversas vezes sem alterar o resultado após a aplicação inicial.

- IF EXISTS
- Comandos pertinentes ao DDL e DML

## Melhores práticas em DDL

Importante as tabelas possuírem campos que realmente serão utilizados e que sirvam de atributo direto a um objetivo em comum.

- Criar/Acrescentar colunas que são "atributos básicos" do objeto;
  Exemplo: tabela CLIENTE: coluna TELEFONE / coluna AGENCIA_BANCARIA

- Cuidado com regras (constraints)
- Cuidado com o excesso de FKs
- Cuidado com o tamanho indevido de colunas
  Exemplo: coluna CEP VARCHAR(255)