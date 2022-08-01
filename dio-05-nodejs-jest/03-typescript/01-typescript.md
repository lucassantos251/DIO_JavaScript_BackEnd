# Typescript

O que é Typescript?

Typescript é uma linguagem de programação e um superset do Javascript. Ele permite trabalhar com tipagens no desenvolvimento das aplicações.

Typescript é uma dependência de desenvolvimento, ele não ficará ativo para o usuário final.

    yarn add -D typescript

Inicialização do Typescript

    npx tsc --init

Primeiro ele gera um arquivo Javascript para ser executado

    npx tsc index.ts

    // criação do index.js

Instalação da dependência de ts-node-dev

    yarn add -D ts-node-dev

    yarn ts-node-dev

Não funcionou na minha maquina, tive que usar o:

    npx tsc --watch

para primeiro compilar o código em .js e dele rodar a aplicação.