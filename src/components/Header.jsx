import NavBar from './NavBar';
import styles from '../components/Header.module.css'; 
function Header() {  
    return (  
      <header className={styles.Header}>  
          <div className={styles.navbarContainer}>
           <h2>Vistual Store</h2> 
          </div>
          <div className={styles.navbarContainer} >
              <NavBar />
          </div>
      </header>  

    );  
}  

export default Header;
