CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT NOT NULL PRIMARY KEY,
  room_name VARCHAR(50)
);

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY,
  username VARCHAR(50)
);

CREATE TABLE messages (
  id INT NOT NULL,
  messages VARCHAR(200),
  id_Users INT NOT NULL,
  id_Rooms INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_Users)
    REFERENCES `users`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (id_Rooms)
    REFERENCES `rooms`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

