# Transações

Conceito fundamental de todos os sistemas de bancos de dados.
Forma segura de executar um conjunto de scripts.
Conceito de múltiplas etapas/códigos reunidos em apenas 1 transação, onde o resultado precisa ser tudo ou nada.

## Exemplos:

>**UPDATE** conta **SET** valor = valor - 100.00
>
>  **WHERE** nome = 'Alice';

>**UPDATE** conta **SET** valor = valor + 100.00
>
> **WHERE** nome = 'Bob';

### BEGIN
- Inicia o bloco de transação
### COMMIT
- Se tudo der certo, o commit envia as informações.
- Caso der algo errado, será feito um rollback.

> **BEGIN;**
> 
>UPDATE conta SET valor = valor - 100.00
>
>  WHERE nome = 'Alice';
> 
>UPDATE conta SET valor = valor + 100.00
>
> WHERE nome = 'Bob';
>
> **COMMIT;**

### ROLLBACK
- Desfaz as instruções aplicadas.

> BEGIN;
> 
>UPDATE conta SET valor = valor - 100.00
>
>  WHERE nome = 'Alice';
> 
>UPDATE conta SET valor = valor + 100.00
>
> WHERE nome = 'Bob';
>
> **ROLLBACK;**

### SAVEPOINT
- Cria um ponto de save naquele lugar.
- Pode ser usado com ROLLBACK TO [savepoint]

> BEGIN;
> 
>UPDATE conta SET valor = valor - 100.00
>
>  WHERE nome = 'Alice';
>
> **SAVEPOINT my_savepoint;**
>
> UPDATE conta SET valor = valor +100.00
> 
> WHERE nome = 'Bob';
> 
> -- oops... não é para o BOb, é para o Wally!!!
> 
> **ROLLBACK TO my_savepoint;**
> 
>UPDATE conta SET valor = valor + 100.00
>
> WHERE nome = 'Wally';
>
> COMMIT;