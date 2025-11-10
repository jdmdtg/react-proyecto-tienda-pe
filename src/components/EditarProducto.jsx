import { useState, useEffect } from "react";

const EditarProducto = ({productoSeleccionado}) => {

const [producto, setProducto] = useState({productoSeleccionado} ||
{
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen: "",
    descripcion: ""
});
 
const API =  "https://6904e0af6b8dabde496575fb.mockapi.io/tienda_proyecto_final_react_jgm/productos";

useEffect(() => {
    if (productoSeleccionado) {
        setProducto(productoSeleccionado);
    },[productoSeleccionado]});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch(`${API}/${producto.id}`, {
                method: "PUT",
                headers: {  "Content-Type": "application/json" },
                body: JSON.stringify(producto),
            });

            if (respuesta.ok) { throw new Error("Error al actualizar el producto");
                const datos = await respuesta.json();
                onActualizar(datos);
                <p style={{ color: "red" }}>Error al actualizar el producto</p>}
        } catch (error) {
            console.error(error.messge);
            //alert("Error al actualizar el producto");
        }
    };
return (
    <form onSubmit={handleSubmit}>
        <h2>Modificar Producto</h2>        
        <div>
            <label>Nombre:</label>
            <input
                type="text"
                name="nombre"   
                value={producto.nombre}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label>Precio:</label>
            <input  
                type="number"
                name="precio"
                //value={producto.precio || ''}
                value={producto.precio}
                onChange={handleChange} 
                min ='0'
                step='any'
                required
            />
        </div>
        <div>
            <label>URL de la Imagen:</label>
            <input
                type="text"     
                name="imagen"
                value={producto.imagen}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label>Descripción:</label>
            <textarea
                name="descripcion"
                value={producto.descripcion || ''}
                onChange={handleChange}
                required
            />
        </div>
        <button type="submit">Guardar Producto</button>  
    </form>
);
}
export default EditarProducto;
