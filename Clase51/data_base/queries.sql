CREATE DATABASE clothes;

CREATE TABLE  users  (
   id   INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   username   VARCHAR(60) NOT NULL,
   fullname   VARCHAR(60) NOT NULL,
   email   VARCHAR(60) NOT NULL,
   phone   INT  NOT NULL,
   address   VARCHAR(255) NOT NULL,
   password   VARCHAR(60) NOT NULL,
   admin  BOOLEAN NOT NULL,
   enable  BOOLEAN NOT NULL
);
INSERT  INTO  users  VALUES (1,'admin','user admin','admin@gmail.com',5454545,'admin adress','admin',1,1),(2,'test','user test','test@gmail.com',5454545,'test address','test',0,1);

CREATE TABLE  products  (
   id   INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
   name   VARCHAR(60) NOT NULL,
   price  FLOAT NOT NULL,
   stock   INT  NOT NULL,
   enable  BOOLEAN NOT NULL
);
INSERT  INTO  products  VALUES (1,'jean shorts',425, 100,1);

CREATE TABLE  fop  (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR (60) NOT NULL
);
INSERT  INTO  fop  VALUES (1,'cash'),(2,'debit'),(3,'credit');

CREATE TABLE  status  (
   id   INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
   name   VARCHAR(60) NOT NULL
);
INSERT  INTO  status  VALUES (1,'NEW'),(2,'CONFIRMED'),(3,'SHIPPED'),(4,'DELIVERED'),(5,'CANCELLED');

CREATE TABLE  orders  (
   id   INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
   id_status   INT  NOT NULL,
   create_time  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
   quantity   INT  NOT NULL,
   id_fop   INT  NOT NULL,
   price  FLOAT NOT NULL,
   id_user   INT  NOT NULL,
  KEY  fk_id_status_id  ( id_status ),
  KEY  fk_id_fop_id  ( id_fop ),
  KEY  fk_id_user_id  ( id_user ),
  CONSTRAINT  fk_id_fop_id  FOREIGN KEY ( id_fop ) REFERENCES  fop  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT  fk_id_status_id  FOREIGN KEY ( id_status ) REFERENCES  status  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT  fk_id_user_id  FOREIGN KEY ( id_user ) REFERENCES  users  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT  INTO  orders  VALUES (1,1,'2020-05-20 00:00:00',1,1,425,2);

CREATE TABLE  orders_products  (
   id   INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   id_order   INT  NOT NULL,
   id_product   INT  NOT NULL,
  KEY  id_order  ( id_order ),
  KEY  id_product  ( id_product ),
  CONSTRAINT  orders_products_ibfk_1  FOREIGN KEY ( id_order ) REFERENCES  orders  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT  orders_products_ibfk_2  FOREIGN KEY ( id_product ) REFERENCES  products  ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT  INTO  orders_products  VALUES (1,1,1);

SELECT * FROM users;

SELECT DISTINCT o.id, o.create_time, o.price order_price, o.quantity, s.name status_name,
p.name product_name, p.price product_price, f.name payment, 
u.username, u.id 
FROM orders o 
JOIN orders_products op ON op.id_order = o.id 
JOIN status s ON s.id = o.id_status 
JOIN products p ON p.id = op.id_product 
JOIN fop f ON f.id = o.id_fop 
JOIN users u ON u.id = o.id_user
WHERE o.id_user = 2;

SELECT DISTINCT p.id, p.name product_name, p.price product_price, o.id orders_status
FROM orders o
JOIN orders_products op ON op.id_order = o.id 
JOIN products p ON p.id = op.id_product 
WHERE o.id = 1;