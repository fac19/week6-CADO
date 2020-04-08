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
  category INTEGER NOT NULL,
  tool_name VARCHAR(255), 
  tool_description VARCHAR(255), 
  tool_link VARCHAR(255)
);

INSERT INTO users (username, password) VALUES
('jimmyface123', 'sherabbit49')
;

INSERT INTO posts (user_id, category, tool_name, tool_description, tool_link) VALUES
('1', '4', 'Netflix', 'Stream shows and movies', 'netflix.com' ),
('1', '4', 'Netflix', 'Stream shows and movies', 'netflix.com')
;

COMMIT;