import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import React from 'react';  
// import styles from './Header.module.css';
import BagIcon from '../assets/BagIcon';

function Header() {  
    return (  
      <header  style={{ backgroundColor: "#4CAF50", padding: "10px", textAlign: "center", color: "white" }}>  
          <div >
              <NavBar />
          </div>
      </header>  

    );  
}  

export default Header;
