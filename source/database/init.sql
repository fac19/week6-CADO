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

INSERT INTO users (username, password) VALUES
('jimmyface123', 'password'),
('tomkitten', '123456'),
('assasinscreed', 'qwerty'),
('newUser', 'password123') 
;

INSERT INTO posts (user_id, category, tool_name, tool_description, tool_link) VALUES
('1', '4', 'Netflix', 'Stream shows and movies', 'netflix.com' ),
('4', '1', 'Amazon', 'Buy stuff you dont need', 'amazonprime.com'),
('3', '2', 'Pact Coffee', 'Get overpriced coffee', 'pactcoffee.com'),
('2', '3', 'Toilet Roll Checker', 'Check if you can survive isolation with your current supply', 'toiletrollchecker.com')
;

COMMIT;