SELECT numero, nome, ativo FROM banco;

CREATE OR REPLACE VIEW vw_bancos AS (
    SELECT numero, nome, ativo
    FROM banco
);

SELECT numero, nome ativo FROM vw_bancos;

CREATE OR REPLACE VIEW vw_bancos_2 (banco_numero, banco_nome, banco_ativo) AS(
    SELECT numero, nome, ativo
    FROM banco
);

SELECT banco_numero, banco_nome, banco_ativo FROM vw_bancos_2;

INSERT INTO vw_bancos_2 (banco_numero, banco_nome, banco_ativo)
VALUES (51, 'Banco Boa Idéia', TRUE);

SELECT banco_numero, banco_nome, banco_ativo FROM vw_bancos_2 WHERE banco_numero = 51;
SELECT numero, nome, ativo FROM banco WHERE numero = 51;

UPDATE vw_bancos_2 SET banco_ativo = FALSE WHERE banco_numero = 51;

DELETE FROM vw_bancos_2 WHERE banco_numero = 51;



CREATE OR REPLACE TEMPORARY VIEW vw_agencia AS (
    SELECT nome FROM agencia
);

SELECT nome FROM vw_agencia; -- erro em outra sessão

CREATE OR REPLACE VIEW vw_bancos_ativos AS (
    SELECT numero, nome, ativo FROM banco
    WHERE ativo IS TRUE
-- ) WITH LOCAL CHECK OPTION;
);

INSERT INTO vw_banco_ativos (numero, nome ativo) VALUES (51,'Banco Boa Ideia', FALSE); --viola a check option (WHERE ativo IS TRUE)

CREATE OR REPLACE VIEW vw_bancos_com_a AS (
    SELECT numero, nome, ativo
    FROM vw_bancos_ativos
    WHERE nome ILIKE 'a%'
--) WITH LOCAL CHECK OPTION;
) WITH CASCADED CHECK OPTION;

SELECT numero, nome, ativo from vw_bancos_com_a;

INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (333, 'Alfa Omega', TRUE);

INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (334, 'Beta Omega', TRUE); -- viola a check option (WHERE nome ILIKE 'a%')

INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (331, 'Alfa Gama', FALSE); -- funciona apenas se o check option estiver desativado

INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (332, 'Alfa Gama Beta', FALSE); -- cascaded valida as checks das views herdadas


