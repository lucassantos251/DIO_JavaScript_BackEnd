# Comandos Administrativos

## Ubuntu
### - pg_lsclusters
- lista todos os clusters PostgreSQL

### - pg_createcluster [version] [cluster name]
- cria um novo cluster PostgreSQL

### - pg_dropcluster [version] [cluster]
- apaga um cluster PostgreSQL

### - pg_ctlcluster [version] [cluster] [action]
- Start, Stop, Status, Restart de clusters PostgreSQL

## Windows
- Via Serviços do Windows.

## Binários do PostgreSQL:
- createdb
- createuser
- dropdb
- dropuser
- initdb
- pg_ctl
- pg_basebackup
- pg_dump / pg_dumpall (pseudo backup, não tem como usar restore)
- pg_restore
- psql
- reindexdb
- vacuumdb