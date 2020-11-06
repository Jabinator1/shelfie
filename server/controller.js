module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        
        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => {console.log(err); res.sendStatus(500)})
    },
    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.get_product(id)
        .then(product => res.status(200).send(product[0]))
        .catch(err => {console.log(err); res.sendStatus(500)})
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const body = {...req.body}

        db.add_product(body)
        .then(() => res.sendStatus(201))
        .catch(err => {console.log(err); res.sendStatus(500)})
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {product_img, product_name, product_price} = req.body

        db.update_product([id, product_img, product_name, product_price])
        .then(() => res.sendStatus(200))
        .catch(err => {console.log(err); res.sendStatus(500)})
    },
    removeProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.remove_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {console.log(err); res.sendStatus(500)})
    },
}