import { useState, useEffect, createContext, useContext } from "react";

// Crear el contexto
export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const API =
    "https://6904e0af6b8dabde496575fb.mockapi.io/tienda_proyecto_final_react_jgm/productos";

  // Cargar productos al montar el componente
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      setError(null);

      const respuesta = await fetch(API);

      if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setError(error.message || "Error al cargar los productos");
    } finally {
      setCargando(false);
    }
  };

  // Funcion para agregar el producto a la API
  const agregarProducto = async (producto) => {
    try {
      setError(null);

      const respuesta = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });
      alert("Producto Agregado");
      const nuevoProducto = await respuesta.json();
      console.log("Producto agregado: ", nuevoProducto);

      if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

      //Agregar el nuevo producto a la lista
      setProductos([...productos, nuevoProducto]);
    } catch (error) {
      console.error("Error al agregar:", error);
      const mensajeError = "Hubo un problema al agregar el producto.";
      setError(mensajeError);
    }
  };

  const editarProducto = async (producto) => {
    try {
      setError(null);

      const respuesta = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

      const productoActualizado = await respuesta.json();
      setProductos(
        productos.map((p) =>
          p.id === productoActualizado.id ? productoActualizado : p
        )
      );
    } catch (error) {
      console.error("Error al editar:", error);
      const mensajeError = "Hubo un problema al editar el producto.";
      setError(mensajeError);
    }
  };

  // Funcion para eliminar producto de la API
  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar?");

    if (confirmar) {
      try {
        setError(null);

        const respuesta = await fetch(`${API}/${id}`, {
          method: "DELETE",
        });

        if (!respuesta.ok) throw new Error("Error al eliminar");

        // Filtra y crea un nuevo array sin el producto eliminado
        setProductos(productos.filter((p) => p.id !== id));
      } catch (error) {
        console.error(error.message);
        const mensajeError = "Hubo un problema al eliminar el producto.";
        setError(mensajeError);
      }
    }
  };

  return (
    <ProductosContext.Provider
      value={{
        productos,
        cargando,
        error,
        cargarProductos,
        agregarProducto,
        editarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductosContext = () => useContext(ProductosContext);

//   const agregarProducto = (nuevoProducto) => {
//     setProductos([...productos, nuevoProducto]);
//   };
// // ------- editar ------------------
//   const editarProducto = (productoActualizado) => {
//     setProductos(
//       productos.map((producto) =>
//         producto.id === productoActualizado.id ? productoActualizado : producto
//       )
//     );
//   };

// // -------------eliminar------------
//   const eliminarProducto = (id) => {
//     setProductos(productos.filter((producto) => producto.id !== id));
//   };

//   return (
//     <ProductoContext.Provider
//       value={{ productos, agregarProducto, editarProducto, eliminarProducto }}
//     >
//       {children}
//     </ProductoContext.Provider>
//   );
// };

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
