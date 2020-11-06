import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component { 

    render() {
        const {product_id, product_img, product_name, product_price} = this.props.product
        const {deleteProduct} = this.props
        return (
            <div className="product-container">
                <img src={product_img} alt={product_name} className="product-image"/>
                <div className="product-data-container">
                    <div className="product-info">
                        <h4>{product_name}</h4>
                        <h5>${product_price}</h5>
                    </div>
                    <div className="product-buttons">
                        <button className="product-button" onClick={() => deleteProduct(product_id)}>Delete</button>
                        <Link to={`/edit/${product_id}`}><button className="product-button">Edit</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
