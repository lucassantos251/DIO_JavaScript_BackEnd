# VIEWS 

Views são visões.
São "camadas" para as tabelas.
São "alias" para uma ou mais queries.
Aceitam comandos de SELECT, **INSERT**, **UPDATE** e **DELETE**. ( * caso tenha joins, não funcionam)

![Image-1]()

## Temporary
VIEW presente apenas na sessão do usuário.
Se voce se desconectar e conectar novamente, a VIEW não estará disponível

## Recursive
Cria um looping chamando ela mesma
Obrigatório a existência dos campos da VIEW
UNION ALL
