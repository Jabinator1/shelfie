import axios from 'axios'
import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {


    constructor() {
        super() 

        this.state = {
            inventory: [],
        }
    }

    updateInventory = () => {
        axios.get("/api/inventory")
        .then(res => this.setState({inventory: res.data}))
        .catch(err => console.log(err))
    }

    deleteProduct = id => {
        axios.delete(`/api/inventory/${id}`)
        .then(this.updateInventory)
        .catch(err => console.log(err))
    }
    
    componentDidMount = () => {
        this.updateInventory()
    }

    render() {

        const inventoryMapped = this.state.inventory.map(product => (
                <Product 
                    key={product.product_id} 
                    product={product} 
                    deleteProduct={this.deleteProduct}
                />
            )
        )
        return (
            <div>
                {inventoryMapped}
            </div>
        )
    }
}

export default Dashboard
