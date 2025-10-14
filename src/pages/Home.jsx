import { useState } from 'react';
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';

const Inicio = () => {
  const [carrito, setCarrito] = useState([]);
 
  // Agregar Producto.
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);   
  };
  
  // Eliminar Productos del carrito
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
  };

  return( 
    <>
    <table width="100%">
      <tr>
        <td><h2>Virtual Store</h2></td>
        <td align="center">Products in Cart: {carrito.length}</td>                      
      </tr>
    </table>   
          <Productos agregarProducto={agregarAlCarrito}/>
        <hr/>          
          <Carrito 
          productosEnCarrito={carrito}
          productosEliminados={eliminarDelCarrito}
          />
        
    </>
  );
}

export default Inicio;