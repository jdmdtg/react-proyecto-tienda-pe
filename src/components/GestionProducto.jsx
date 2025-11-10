import { useState, useEffect } from "react";
import FormProducto from "./FormProducto";
import EditarProducto from "./EditarProducto";
import styles from "./GestionProducto.module.css";
import { Form } from "react-router-dom";
// import CirclePlus from "../assets/circle-plus.svg";

const GestionProducto = () => {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState([]);
    const API =  "https://6904e0af6b8dabde496575fb.mockapi.io/tienda_proyecto_final_react_jgm/productos";
    
// cargamos los productos desde la API al llamar el componente
    useEffect(() => {
          cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            setCargando(true);
            const respuesta = await fetch((API);
            const datos = await respuesta.json();
            setProductos(datos);
            
        } catch (error) {
            console.error("Error al cargar los productos:", error);
            <p>Error al cargar el producto</p>
        }finally {
            setCargando(false);
        }

};
//***************************************************** */
// Funcion para seleccionar un producto para editar
//***************************************************** */
const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
};

if(cargando) 
    return <div> Cargando Productos ...</div>;

//***************************************************** */
//Agregar producto a API
//***************************************************** */
const agregarProducto = async (producto) => {
    try {
        const respuesta = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },    
            body: JSON.stringify(producto),
        });
    
        if (!respuesta.ok) 
            throw new Error("Error al agregar el producto");

        const datos = await respuesta.json();
        //console.log("Producto agregado:", datos);
        <p style={{ color: "red" }}>Producto Agregado Correctamente</p>
            
      
        //Agregar el nuevo producto a la lista
        
        setProductos([...productos, datos]);
     } catch (error) {
            console.error("Error al agregar el producto:", error);
            <p style={{ color: "red" }}>Error al agregar el producto</p>
     }
    };

    //***************************************************** */
    // Función Eliminar producto de la API
    //***************************************************** */

    const eliminarProdcuto = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de eliminar este producto?");
        
        if (confirmar){
            try {
                const respuesta = await fetch(`${API}/${id}`, {
                    method: "DELETE",
                });

                if (!respuesta.ok) {
                    throw new Error("Error al eliminar el producto");
                    //filtrar y crear un nuevo array sin el producto eliminado
                    setProductos(productos.filter((pro) => pro.id !== id));
                }
            }catch (error) {
                console.error("Error al eliminar el producto:", error.messge);
                <p style={{ color: "red" }}>Error al eliminar el producto</p>
            }
        }
    };

    return(

        <div>
            <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.botonAgregarProducto}>
                    <CirclePlus />
                    <p>Agregar Producto</p>
                </div>
                {productos.map((producto) => (
                    <div 
                        key={producto.id}
                        onClick={() => seleccionarProducto(producto)}
                        className={styles.productoItem}
                    >
                <img className={style.imagen} src={producto.imagen}  />
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
                <button onClick={() => eliminarProdcuto(producto.id)}>Eliminar</button>
                </div>
            ))}
            </div>
            
            {/* formulario para editar producto */}
            <div className={styles.panel}>
                <FormularioProducto onAgregar={agregarProducto} />
                <EditarProducto producto={productoSeleccionado} />
            </div>
        </div>
    </div>
    );
};

export default GestionProducto;
