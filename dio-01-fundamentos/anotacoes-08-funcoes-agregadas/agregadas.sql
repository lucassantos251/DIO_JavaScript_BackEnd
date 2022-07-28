SELECT numero, nome FROM banco;
SELECT banco_numero, numero, nome FROM agencia;
SELECT numero, nome, email FROM cliente;
SELECT banco_numero, agencia_numero, cliente_numero FROM cliente_transacoes;

SELECT * FROM conta_corrente;

SELECT * FROM information_schema.columns WHERE table_name = 'cliente_transacoes';
SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'cliente_transacoes';

-- AVG
SELECT * FROM cliente_transacoes;
SELECT AVG(valor) FROM cliente_transacoes;

-- COUNT (having)
SELECT COUNT(numero) FROM cliente;
SELECT COUNT(numero), email FROM cliente WHERE email ILIKE '%gmail.com' GROUP BY email;
SELECT COUNT (id), tipo_transacao_id FROM cliente_transacoes GROUP BY tipo_transacao_id;
SELECT COUNT (id), tipo_transacao_id FROM cliente_transacoes GROUP BY tipo_transacao_id HAVING COUNT(id) > 150;

-- MAX
SELECT MAX(numero) FROM cliente;
SELECT MAX(valor) FROM cliente_transacoes;
SELECT MAX(valor), tipo_transacao_id FROM cliente_transacoes GROUP BY tipo_transacao_id;

-- MIN
SELECT MIN(numero) FROM cliente;
SELECT MIN(valor) FROM cliente_transacoes;
SELECT MIN(valor), tipo_transacao_id FROM cliente_transacoes GROUP BY tipo_transacao_id;

-- SUM
SELECT SUM (valor) FROM cliente_transacoes;
SELECT SUM (valor), tipo_transacao_id FROM cliente_transacoes GROUP BY tipo_transacao_id;
SELECT COUNT (id), tipo_transacao_id FROM cliente_transacoes GROUP BY tipo_transacao_id ORDER BY tipo_transacao_id;
SELECT COUNT (id), tipo_transacao_id FROM cliente_transacoes GROUP BY tipo_transacao_id ORDER BY tipo_transacao_id ASC;
SELECT COUNT (id), tipo_transacao_id FROM cliente_transacoes GROUP BY tipo_transacao_id ORDER BY tipo_transacao_id DESC;