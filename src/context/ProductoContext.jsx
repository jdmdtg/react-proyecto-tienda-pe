import { createContext, useState } from "react";

// Crear el contexto
export const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };
// ------- editar ------------------
  const editarProducto = (productoActualizado) => {
    setProductos(
      productos.map((producto) =>
        producto.id === productoActualizado.id ? productoActualizado : producto
      )
    );
  };

// -------------eliminar------------
  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <ProductoContext.Provider
      value={{ productos, agregarProducto, editarProducto, eliminarProducto }}
    >
      {children}
    </ProductoContext.Provider>
  );
};

//   Proveedor del contexto
//   export function ProductoProvider({ children }) {
//   return (
//     <ProductoContext.Provider
//       value={{ eliminarProducto, agregarProducto, productos }}
//     >
//       {children}
//     </ProductoContext.Provider>
//   );
// }
