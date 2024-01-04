CREATE DATABASE Shop;

USE Shop;

CREATE TABLE sessions (
    idSession INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
    idProduct VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL,
    image VARCHAR(225) NOT NULL,
    idSession INT NOT NULL,
    FOREIGN KEY (idSession) REFERENCES sessions(idSession)
);

CREATE TABLE user (
    idUser VARCHAR(224) NOT NULL PRIMARY KEY
);