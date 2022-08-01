# Introdução

NoSQL significa banco de dados não relacionais.

## Objetivos

1. Entender os fatores que levaram a criação dos bancos NoSQL.
2. Conhecer as principais diferenças gerais entre os DB SQL e NoSQL.
3. Conhecer as características e vantagens do uso do DB NoSQL.

>1970 - BD Relacional
>
>1998 - Introdução NoSQL
> 
>2009 - Reaparição NoSQL

## Fatores

Houve aumento significativo no volume de dados.

Houve aumento de aplicações não convencionais.

>**N**ot **O**nly **SQL** = **NoSQL**

## Diferenças

### Escalabilidade:

Banco de Dados **relacional**
- Vertical (um único banco de dados)
  - Aumento da capacidade para um único recurso
  - Processador, memória e disco rígido.
- Horizontal (vários bancos de dados)
  - Replicas de dados
  - **APENAS PARA LEITURA**

Banco de Dados **não relacionais**
- Horizontal (vários bancos de dados)
  - Particionando os dados (sharding) entre nós é o mais conhecido.

### Schemas

Schema: BD Relacional

![bd-relacional](img/chrome-4-(22-07-27_11h09m).png)

Schema: BD NoSQL

![bd-nao-relacional](img/chrome-6-(22-07-27_11h11m).png)

Schema-free/schemaless

### Performance:

BD Relacional

![bd-relacional-performance](img/chrome-8-(22-07-27_11h13m).png)

Depende exclusivamente da performance de disco.

BD NoSQL

![bd-nao-relacional-performance](img/chrome-9-(22-07-27_11h13m).png)

Depende unicamente do tamanho do seu cluster.

### Transações:

BD Relacional
- **ACID**
  - Atomicidade: não executa pela metade
  - Consistência: exatamente em conformidade com os schemas pré-definidos
  - Isolamento: não interfere em outras transações
  - Durabilidade: seu dado jamais será perdido.

BD NoSQL
- **BASE**
- Basically Available
- Soft-State
- Eventually Consistent

### Características e vantagens

- Flexibilidade
- Escalabilidade
- Alta performance.