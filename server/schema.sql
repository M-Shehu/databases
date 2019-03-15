CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  room_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  messages VARCHAR(200),
  id_Users INT NOT NULL,
  id_Rooms INT NOT NULL,
  FOREIGN KEY (id_Users)
    REFERENCES `users`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (id_Rooms)
    REFERENCES `rooms`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

