import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Carrito.module.css';

const Productos = ({ agregarProducto }) => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar productos');
        setCargando(false);
       })
      
  },[]);

  if (cargando) 
    return <p>Cargando productos...</p>

  if (error) 
    return error

  return(
    <div>
      <h2>Products</h2>
      <ul>
        {productos.map((producto) => (
          <div>
            <li key={producto.id}>
               
               <table>
                <tr>
                  <td><img src={producto.image} height={100} width={100}/></td>
                    <td>  
                      <button className={styles.buttonGreen} onClick={() => agregarProducto(producto)}>Add Cart</button>
                      <Link to={`/products/${producto.id}`} >Product Details</Link> 
                    </td> 
                </tr>  
                <tr>                   
                  <td>{producto.category}</td>
                  <td><h3>{producto.title} : Price {producto.price}$ </h3></td>    
               </tr>
               </table>
                        
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Productos;