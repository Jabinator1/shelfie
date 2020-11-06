import axios from 'axios'
import React, { Component } from 'react'
import Form from './Form/Form'

class AddProduct extends Component {
    
    constructor() {
        super()
    
        this.state = {
          product: {}
        }
    }

    componentDidMount = () => {
        axios.get(`/api/inventory/${this.props.match.params.id}`)
        .then(res => this.setState({product: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Form isEditing={true} currentProduct={this.state.product}/>
        )
    }
}

export default AddProduct