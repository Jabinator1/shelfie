import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Form extends Component {

    constructor() {
        super()

        this.state = {
            product_img: "",
            product_name: "",
            product_price: 0,
            test: false
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    cancel = () => {
        this.setState({product_img: "", product_name: "", product_price: 0, test: true})
    }

    post = (e, body) => {
        e.preventDefault()

        axios.post("/api/product", body)
        .then(this.setState({test: true}))
        .catch(err => console.log(err))
    }

    update = (e, body) => {
        e.preventDefault()

        axios.put(`/api/inventory/${this.props.currentProduct.product_id}`, body)
        .then(() => {
            this.cancel()
            this.setState({test: true})
        })
        .catch(err => console.log(err))
    }

    componentDidUpdate = (prevProps) => {
        const {currentProduct} = this.props

        if (prevProps.currentProduct !== currentProduct) {
            this.setState(currentProduct)
        } 
    }
    
    componentDidMount = () => {
        if (this.props.isEditing) {
            this.setState(this.props.currentProduct)
        }
    }

    render() {

        const inputInfo = [
            {header: "Image URL:", name: "product_img"},
            {header: "Product Name:", name: "product_name"},
            {header: "Price:", name: "product_price",}
        ]

        const inputsMapped = inputInfo.map(input => (
            <div className="input-container" key={input.name}>
                <h4 className="input-header">{input.header}</h4>
                <input className="input-box" name={input.name} onChange={e => this.changeHandler(e)} value={this.state[input.name]}/>
            </div>
        ))

        const {isEditing} = this.props

        if (this.state.test) {
            return <Redirect to="/"></Redirect>
        }

        return (
            <div className="form-container">
                <form onSubmit={isEditing ? e => this.update(e, this.state) : e => this.post(e, this.state)}>
                    <img alt={this.state.product_name} className="product-image-edit" src={this.state.product_img}/>
                    {inputsMapped}
                    <div className="save-and-cancel-buttons-container">
                        <button className="save-and-cancel-button" type="reset" onClick={this.cancel}>Cancel</button>
                        <button className="save-and-cancel-button" type="submit">{isEditing ? "Save Changes" : "Add to Inventory"}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
