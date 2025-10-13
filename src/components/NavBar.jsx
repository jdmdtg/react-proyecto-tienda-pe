import { Link } from "react-router-dom";
import React from 'react';  
import styles from './NavBar.module.css';


function NavBar() {  
    return (  
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}> </ul>
            <ul>
                <li className={styles.item}>  
                    <Link to="/" className={styles.item}>Home</Link>  
                    <Link to="/Moda" className={styles.item}>Fashion</Link>  
                    <Link to="/Hotsale" className={styles.item}>HotSale</Link>  
                    <Link to="/Contactos" className={styles.item}>Contacts</Link>  
                </li>
            </ul>  
        </nav>  
    );  
}  


export default NavBar; 