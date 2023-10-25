import React from 'react';  
import Cart from '../Carts/Cart';
// import SearchBar from './SearchBar';
import './Header.css';
import logo from '../../capaslivros/visary.svg';

function Header(){
  return (
    <header className="header">
      
      <div className="container">
        <img className="logo" src ={logo}/>
        {/* <SearchBar /> */}
        <Cart />
        
      </div>
    </header>
  );

}

export default Header;
