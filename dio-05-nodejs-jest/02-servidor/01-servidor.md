# Iniciando o servidor

Instalando o node com todas as opções padrão

    npm init --y

Instalando a dependência Nodemon, é uma função que tem hotreload na leitura do script

    yarn add nodemon

Instalando a dependência Express, é quem permite construir rotas e caminhos do servidor

    yarn add express

Adicionando scripts ao package.json

    debaixo da propriedade scripts
    "start": "nodemon src/index.js",

    debaixo da propriedade main
    "type": "module"
