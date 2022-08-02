CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS app_user(
  uuid uuid DEFAULT uuid_generate_v4(),
  username VARCHAR(50) NOT NULL,
  password VARCHAR(20) NOT NULL,
  PRIMARY KEY (uuid)
);

INSERT INTO app_user (username, password) VALUES ('admin', crypt('admin', 'my_salt'));
INSERT INTO app_user (username, password) VALUES ('Lucas', crypt(' 970521', 'my_rer'));