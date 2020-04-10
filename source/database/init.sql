BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),         
  password VARCHAR(255)       
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  category VARCHAR(255) NOT NULL,
  tool_name VARCHAR(255), 
  tool_description VARCHAR(255), 
  tool_link VARCHAR(255)
);

COMMIT;