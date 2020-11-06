CREATE TABLE inventory (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(200),
    product_price INT,
    product_img VARCHAR(3000)
);