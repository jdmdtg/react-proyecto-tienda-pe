//import { useState, useContext } from "react";
import { useState } from "react";
//import { ProductoContext } from "../context/ProductoContext";

const FormProducto = ({ onAgregar }) => {
  //const { agregarProducto, editarProducto } = useContext(ProductoContext);
  const [errores, setErrores] = useState({}); // Estado para los errores de validación, tipo objeto
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    imagen: "",
    descripcion: "",
  });

  const HashChange = (e) => {
    // evento de control de cambios en el formulario
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!producto.nombre.trim())
      nuevosErrores.nombre = "El nombre es obligatorio";

    if (!producto.precio || Number(producto.precio) <= 0)
      nuevosErrores.precio = "El precio debe ser un número positivo";

    if (!producto.imagen.trim() || producto.imagen.length < 6)
      nuevosErrores.imagen = "La URL de la imagen no es valida";

    if (!producto.descripcion.trim() || producto.descripcion.length < 10)
      nuevosErrores.descripcion =
        "La descripción debe tener al menos 10 caracteres";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0; // obj que toma los errores y devuelve true si no hay errores
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    const productoAEnviar = {
      // pasas todos las propiedades del producto y conviertes el precio a float
      ...producto,
      precio: parseFloat(producto.precio),
    };

    onAgregar(productoAEnviar); // Llamas a la función onAgregar pasada como prop con el producto a enviar

    setProducto({
      // Reseteas el formulario
      nombre: "",
      precio: "",
      imagen: "",
      descripcion: "",
    });
    setErrores({}); // Reseteas los errores
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Agregar Producto</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={HashChange}
          />
          {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={producto.precio}
            onChange={HashChange}
            min={0}
            step="any"
          />
          {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
        </div>
        <div>
          <label>Imagen (URL):</label>
          <input
            type="text"
            name="imagen"
            value={producto.imagen}
            onChange={HashChange}
          />
          {errores.imagen && <p style={{ color: "red" }}>{errores.imagen}</p>}
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={producto.descripcion}
            onChange={HashChange}
          />
          {errores.descripcion && (
            <p style={{ color: "red" }}>{errores.descripcion}</p>
          )}
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </>
  );
};

export default FormProducto;
