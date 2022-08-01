# Funções

Conjunto de códigos que são executados **dentro de uma transação** com a finalidade de facilitar a programação e obter o reaproveitamento/reutilização de códigos.

Existem 4 tipos de funções:
- query language functions (funções escritas em SQL)
- procedural language functions (funções escritas em, por exemplo, PL/pgSQL ou PL/py)
- internal functions
- C-language functions

Vamos falar de **USER DEFINED FUNCTIONS**.
Funções que podem ser escritas pelo usuário.

## Linguagens

> - SQL
> - **PL/pgSQL**
> - PL/PY
> - PL/PHP
> - PL/RUBY
> - PL/Java
> - PL/Lua
> ....

https://www.postgresql.org/docs/14/external-pl.html

![imagem-01](img/chrome-3-(22-07-26_16h23m).png)

## Idempotência

>CREATE **OR REPLACE** FUNCTION [nome da função]

- Mesmo nome
- Mesmo tipo de retorno
- Mesmo número de parâmetros/argumentos

## Returns

Tipo de retorno (data type)
- INTEGER
- CHAR / VARCHAR
- BOOLEAN
- ROW
- TABLE
- JSON

## Segurança

- INVOKER: 

Padrão, você vai permitir que a função seja executada com as **permissões do usuário** que está executando a função.

- DEFINER
Permissões **HERDADAS** do usuário que **CRIOU** a função.

## Comportamento

- Immutable

Não pode alterar o banco de dados.
Funções que garantem o mesmo resultado para os mesmos argumentos/parâmetros da função. Evitar a utilização de selects, pois tabelas podem sofrer alterações.

- Stable

Não pode alterar o banco de dados.
Funções que garantem o mesmo resultado para os mesmos argumentos/parâmetros da função. Trabalha melhor com tipos de current_timestamp e outros tipos de variáveis. Podem conter selects.

- Volatile

Comportamento padrão. Aceita todos os cenários.

## Boas práticas

- CALLED ON NULL INPUT
  
Padrão. Se qualquer um dos parâmetros/argumentos for NULL, a função será executada.

- RETURNS NULL ON NULL IMPOUT

Se qualquer um dos parâmetros/argumentos for NULL, a função retornará NULL.

## Recursos

- COST

Custo/row em unidades de CPU.

- ROWS

Número estimado de linhas que será analisada pelo planner.

![imagem-02](img/chrome-4-(22-07-26_16h37m).png)
![imagem-03](img/chrome-5-(22-07-26_16h39m).png)
![imagem-04](img/chrome-6-(22-07-26_16h40m).png)