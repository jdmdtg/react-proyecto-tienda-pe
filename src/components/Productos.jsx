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
                  <img src={producto.image} height={150} width={150}/>
                  <table >
                    <tr>  
                      <td>
                        <button className={styles.buttonGreen} onClick={() => agregarProducto(producto)}>Add Cart</button>
                      </td>
                      <td> 
                        <button className={styles.buttonDetalle}>
                          <Link to={`/products/${producto.id}`}>Products Details</Link>                      
                        </button>
                      </td>
                    </tr>  
                  </table>
                  <h4>{producto.category}</h4>
                  <h4>{producto.title}</h4> 
                  <h4>{producto.price}$</h4>                                     
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Productos;