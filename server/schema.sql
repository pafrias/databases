CREATE DATABASE chat;
USE chat;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (32) NOT NULL,
  PRIMARY KEY (id)
  /* default values?*/
);
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (32) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR (140),
  created DATE NOT NULL,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  PRIMARY KEY (id)
  /* will need foreign Keys*/
);

/* link user and room as FKs to users and rooms*/

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/*

*/