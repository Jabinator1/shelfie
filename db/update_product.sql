UPDATE inventory
SET product_img = $2,
    product_name = $3,
    product_price = $4
WHERE product_id = $1;