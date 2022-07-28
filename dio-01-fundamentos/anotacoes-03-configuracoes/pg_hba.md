# pg_hba.conf

Arquivo responsável pelo controle de autenticação dos usuários no servidor PostgreSQL.

## Métodos de autenticação
- TRUST (conexão sem requisição de senha)
- REJECT (rejeitar conexões)
- MD5 (criptografia md5)
- PASSWORD (senha sem criptografia)
- GSS (generic security service application program interface)
- SSPI (security support provider interface - somente para windows)
- KRB5 (kerberos V5)
- IDENT (utiliza usuário do sistema operacional do cliente via ident server)
- PEER (utiliza o usuário do sistema operacional do cliente)
- LDAP (ldap server)
- RADIUS (radius server)
- CERT (autenticação via certificado SSL do cliente)
- PAM (pluggable authentication modules. O usuário precisa estar no banco de dados)

![imagem-06](img/Captura%20de%20tela%20de%202022-07-25%2012-12-24.png)
![imagem-07](img/Captura%20de%20tela%20de%202022-07-25%2012-17-29.png)