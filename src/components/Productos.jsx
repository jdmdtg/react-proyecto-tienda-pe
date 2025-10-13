import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 

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
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <div>
            <li key={producto.id}>
               
               <table>
                <tr>
                  <td><img src={producto.image} height={100} width={100}/></td>
                    <td>  
                      <button onClick={() => agregarProducto(producto)}>Agregar al Carrito</button>
                      <Link to={`/products/${producto.id}`} >Detalles Produto</Link> 
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