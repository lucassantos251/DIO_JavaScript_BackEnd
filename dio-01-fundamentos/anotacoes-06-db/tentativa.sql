INSERT INTO banco (numero, nome) VALUES (1, 'Banco do Brasil S.A.'::VARCHAR(50));
INSERT INTO agencia (banco_numero, numero, nome) VALUES (1,1, 'Agencia número 1 do Banco do Brasil S.A.');
INSERT INTO cliente (nome, email) VALUES ('Umbelina neves', 'umbelina_neves@usa.net');
INSERT INTO conta_corrente (banco_numero, agencia_numero, numero, digito, cliente_numero) VALUES (1,1,1,1,1);
INSERT INTO tipo_transacao (nome) VALUES ('Débito');
INSERT INTO cliente_transacoes (banco_numero, agencia_numero, conta_corrente_numero, conta_corrente_digito, cliente_numero, tipo_transacao_id, valor) VALUES (1,1,1,1,1,1,50);