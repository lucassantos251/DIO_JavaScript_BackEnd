# Conceitos essenciais do JavaScript

## Variáveis

Existem 3 modos de declarar:

- **var** - escopo global, pode ter seu valor alterado.
- **let** - escopo local, pode ter seu valor alterado.
- **const** - escopo local, somente leitura.

**var e let** - não precisam de um valor inicial, vem por padrão como **undefined**
**const** - deve ter um valor inicial, e não pode ser alterada.

Variáveis guardam valores dos tipos:
- Boolean
- null
- undefined
- Number
- String
- Array
- Object
- Function

### Objetos
São dados que possuem **propriedades** e **valores** que definem suas características.

    let xicara = {
      cor:'azul',
      tamanho:'p',
      funcao: tomarCafe()
    }

### Funções
Conjunto de instruções para realizar determinadas tarefas.
Há 3 modos de definir funções

**Declaração**:
- Uso comum, deve ser nomeada:

      function nomeDaFuncao(){

      };

**Expressão**:
- Função atribuída a expressões, nomeação opcional:

      var x = function nomeDaFuncao(){}

      var x = function(){}


**Arrow Function**:
- função de expressão de sintaxe curta, sempre anônima, não pode ser nomeada:

      var x = () => {}

MDN Web Docs - https://www.developer.mozilla.org/pt-BR/docs/Web/JavaScript