# Agregações

1. Apresentar conceitos de agregações

Agregação é o procedimento de processar dados em uma ou mais etapas, onde o resultado de cada etapa é utilizado na etapa seguinte, de modo a retornar um resultado combinado.

Existem dois tipos de agregações

- Agregações de Pipeline
  - filtros
  - operadores ($group, $addFields)
- Agregações de propósito único
  - count
  - distinct

Propósito único não permite as costumizações das agregações utilizando pipeline.

Agregação de Pipeline, operador group - agrupa os dados

    db.getCollection('restaurants').aggregate([{$group: {_id: "$cuisine", total: {$sum: 1}}}])

Agregação de Pipeline, operador addField - adiciona campos apenas para o resultado da sua agregação, sem modificar a collection original

    db.getCollection('restaurants').aggregate([{$addfields: {"teste":true}}])

Funções: $sum, $avg, $max e $min

    db.getCollection('restaurants').aggregate([{$group: {_id: "$cuisine", total: {$sum: 1}, id_maximo: {$max: "restaurant_id"}}}])

Operadores lógicos: $and, $or, $not e %nor

    db.getCollection('restaurants').aggregate([{$match: {$and:[{cuisine: 'American'}, {borough: 'Brooklyn'}]}}])

    db.getCollection('restaurants').aggregate([{$match: {$or:[{cuisine: 'American'}, {borough: 'Brooklyn'}]}}])

Operadores de comparação:
- \'>'  Maior que. No mongo $gt
- \'>' Menor que. No mongo $lt
- \'<>' Difernete de. No mongo $nte
- '=' Igual. No mongo $eq
- '<=' Menor ou igual. No mongo $lte
- '>=' Maior ou igual. No mongo $gte