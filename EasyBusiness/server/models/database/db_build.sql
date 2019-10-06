BEGIN;

 DROP TABLE IF EXISTS users CASCADE;
 DROP TABLE IF EXISTS customers CASCADE;
 DROP TABLE IF EXISTS suppliers CASCADE;
 DROP TABLE IF EXISTS deals CASCADE;
  DROP TABLE IF EXISTS inventory CASCADE;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  username_phone_number VARCHAR NOT NULL
);

CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  customer_name VARCHAR(30) NOT NULL,
  customer_phone_number INTEGER NOT NULL,
  debt INTEGER DEFAULT 0
);

CREATE TABLE suppliers (
  supplier_id SERIAL PRIMARY KEY,
  supplier_name VARCHAR(30) NOT NULL,
  supplier_phone_number INTEGER NOT NULL,
  supplier_location VARCHAR,
  supplier_products VARCHAR(100)
);

CREATE TABLE inventory (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
  product_price INTEGER NOT NULL,
  product_quantity INTEGER NOT NULL,
  supplier_price INTEGER DEFAULT 0 NOT NULL
);

CREATE TABLE deals (
  deal_id SERIAL PRIMARY KEY,
  deal_date_created TIMESTAMP DEFAULT now(),
  deal_profit INTEGER,
  deal_total INTEGER
);

INSERT INTO users (username,password,username_phone_number)
VALUES
('Ghassan', '123456' ,0544747667),
('Dana', '123456' , 0547135551);

INSERT INTO inventory (product_name,product_price ,product_quantity,supplier_price) 
VALUES
('Milk', 6 ,25, 4),
('Cheese', 15 ,30, 10.5);

INSERT INTO suppliers (supplier_name,supplier_phone_number ,supplier_location,supplier_products) 
VALUES
('Malk', 0547521542 ,'Smea', 'dairy'),
('Ibrahim', 0502545874 ,'Tarshiha', 'meat');

INSERT INTO customers (customer_name,customer_phone_number ,debt) 
VALUES
('Jehan', 0547521542 ,0.00),
('Asel', 0502545874 ,150.00);



COMMIT;