/* import React from 'react';
import {Link} from 'react-router-dom';


 const Navbar=()=>{
    return (    
                <div className='navBar'>
                    <div className='LandingPage'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='about'>
                        <Link to="/About">About</Link>
                    </div>
                    <div className='Projects'>
                        <Link to="/Projects">Projects</Link>
                    </div>
                    <div className='Contact'>
                        <Link to="/Contact">Contact</Link>
                    </div>
                </div>
    )

}

export default Navbar;

*/

import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class Navbar extends Component {
    state = { clicked:  false }
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    Miguel Bazan <i className="fab fa-react"></i>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }





}

export default Navbar;