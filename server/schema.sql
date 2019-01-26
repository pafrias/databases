CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL,
  name VARCHAR(32),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL,
  name VARCHAR(32),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL,
  message VARCHAR(140),
  created DATE,
  user_id INT,
  room_id INT,
  PRIMARY KEY (id)
);

/* link user and room as FKs to users and rooms*/

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/*

*/