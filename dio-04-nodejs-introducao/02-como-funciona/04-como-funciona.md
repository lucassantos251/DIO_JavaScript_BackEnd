# Como o Node.js funciona?

O Node.js trabalha com single-thread. Imagine que cada requisição é um pedido de delivery.

![sincrona](img/chrome-29_22-07-29_17h05m.png)

As requisições no Node.js são assíncronas, agilizando assim a entrega.

![assincrona](img/chrome-30_22-07-29_17h07m.png)

Com isso abordamos os conceitos de **Blocking**, **Non-blocking** e **Event-Loop**.

- Blocking:
  - Síncrono, pos a entrega depende que todas as requisições estejam prontas.

- Non-blocking
  - Assíncrono, pois a entrega é feita mesmo sem todas as requisições estarem prontas. (trabalha com o Event-loop).

- Event-loop
  - execução das requisições de forma assíncrona.

## Vantages

- Flexível
- Leveza
- Escalabilidade
- Redução de custos
- Maior repositório do mundo - NPM
- Mesma linguagem no front-end e back-end.