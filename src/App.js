import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import {Switch, Route } from 'react-router-dom'
import './App.css';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import './components/Header/Header.css'
import './components/Product/Product.css'
import './components/Form/Form.css'


class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/add" component={AddProduct} />
          <Route path="/edit/:id" component={EditProduct} />
        </Switch>
      </div>
    )
  }
}

export default App

