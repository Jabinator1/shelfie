require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { getProducts, addProduct, updateProduct, removeProduct, getProduct } = require('./controller')
const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive({connectionString: CONNECTION_STRING, ssl: {rejectUnauthorized: false}})
.then(db => {app.set('db', db); console.log('Connected to database!')})
.catch(err => console.log(err))


app.get("/api/inventory", getProducts)
app.get("/api/inventory/:id", getProduct)
app.post("/api/product", addProduct)
app.put("/api/inventory/:id", updateProduct)
app.delete("/api/inventory/:id", removeProduct)


app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}.`))