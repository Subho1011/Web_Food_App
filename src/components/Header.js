import React, { useState, useContext } from 'react';
import './Header.css';
import logo from '../../img/logo.png'
import Button from './utils/Button';
import { SearchContext } from '../context/SearchContext';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [localSearchWord, setLocalSearchWord] = useState('');
  // Here we are importing the state variable and function which we had declared in SeachProvider
  const [searchWord, setSearchWord] = useContext(SearchContext);
  const photo = [logo];
  // Function to modify the searchWord state variable with every keystroke
  const searchHandelar = (e) => {
    setLocalSearchWord(e.target.value);
  };
  // This function will update the state variable in SeachProvider
  const searchBtnClick = () => {
    // props.onSearch(searchWord);
    setSearchWord(localSearchWord);
    console.log("Search Button Clicked");
    console.log(searchWord);
  }

  return (
    <div className="nav-bar">
      <Link to="/">
        <div className="brand">
          <img src={photo[0]} alt="Brand logo" className="brand-logo"></img>
          <span className="brand-text">Web Food</span>
        </div>
      </Link>
      <div className="search-container">
        <div className="search-bar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search-bar-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type="text"
            placeholder='Type Restaurant Name.Example:Golbari'
            value={localSearchWord} //It will show the text you have typed.
            onChange={searchHandelar}
          ></input>
        </div>
        <button className="search-button" onClick={searchBtnClick}>Search</button>
      </div>
      <div className="login">
        <button>Login</button>
        <Button>Signup</Button>
      </div>
      <button className="cart">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cart-logo">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <span className="cart-text">My Cart</span>
      </button>
    </div>
  );
}

export default Header;