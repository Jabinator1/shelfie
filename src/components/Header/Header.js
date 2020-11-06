import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../assets/shelfie_icon.png'

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="icon-and-title">
                    <img src={icon} className="icon"/>
                    <h1>SHELFIE</h1>
                </div>
                <nav>
                    <NavLink className="nav-link" to="/">Dashboard</NavLink>
                    <NavLink className="nav-link" to="/add">Add Inventory</NavLink>
                </nav>
            </header>
        )
    }
}

export default Header
