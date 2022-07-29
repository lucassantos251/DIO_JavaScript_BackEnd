# PostgreSQL

Site Oficial:
https://www.postgresql.org/

Download:
https://www.postgresql.org/download/

Documentação:
https://www.postgresql.org/docs/manuals/


>sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

>wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

>sudo apt-get update

>sudo apt-get -y install postgresql

>pg_lsclusters

>pg_createcluster -d /home/postgres/aula 14 aula --start

>su - postgres

>psql

![imagem-01](img/Captura%20de%20tela%20de%202022-07-25%2011-00-26.png)

# pgAdmin
Ferramenta gráfica para interagir com o banco de dados.

https://www.pgadmin.org

>sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add

>sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'

> sudo apt install pgadmin4

![imagem-02](img/Captura%20de%20tela%20de%202022-07-25%2011-27-33.png)