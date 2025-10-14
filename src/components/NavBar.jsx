import { Link } from "react-router-dom";
import styles from './NavBar.module.css';


function NavBar() {  
    return (  
        <nav>
            <ul className={styles.lista}>            
                <li className={styles.item}>
                    <Link to="/" className={styles.link}>Home</Link>  
                    <Link to="/Fashion" className={styles.link}>Fashion</Link>  
                    <Link to="/Hotsale" className={styles.link}>HotSale</Link>  
                    <Link to="/Contactos" className={styles.link}>Contacts</Link>  
                </li>
            </ul>  
        </nav>  
    );  
}  


export default NavBar; 