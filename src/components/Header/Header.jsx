import React from 'react';
import './Header.css';
import logo from'../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
         <img src={logo}></img>
        <div>
        <a href="/Order">Order</a>
         <a href="/Review">Order Review</a>
         <a href="/Inventory">Manage Inventory</a>
         <a href="/Login">Login</a>
        </div>
        </nav>
    );
};

export default Header;