import { createContext, useState } from "react";

// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
  // Usamos filter() para crear un nuevo array que excluye el elemento
  // con el índice dado.
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const MsnCompletoLaCompra = () => {
    alert("Usted Completo la Compra con Éxito");
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        MsnCompletoLaCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
