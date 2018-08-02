-- Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name varchar(40) NOT NULL,
devour BOOLEAN DEFAULT true,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);


