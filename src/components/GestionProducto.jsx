import { useState } from "react";
import FormProducto from "./FormProducto";
import { useProductosContext } from "../context/ProductosContext";
import styles from "./GestionProducto.module.css";
import CirclePlus from "../assets/CirclePlus";
import SquarePen from "../assets/SquarePen";
import TrashIcon from "../assets/TrashIcon";

const GestionProductos = () => {
  // Cargando contexto de producto
  const { productos, eliminarProducto } = useProductosContext();
  // Estados
  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Abrir formulario para AGREGAR
  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null); // Sin producto inicial
    setMostrarForm(true);
  };

  // Abrir formulario para EDITAR
  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto); // Pasar el producto a editar
    setMostrarForm(true);
  };

  // Cerrar formulario
  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

  return (
    <div className="bg-info bg-opacity-11 p-3 rounded-3">
      <div className={styles.panel}>
        <div className={styles.cabecera}>
          <h4>Lista de Productos.</h4>
          {/* Botón para agregar producto */}
          <button
            onClick={abrirFormularioAgregar}
            className={styles.botonAgregar}
          >
            <CirclePlus />
            <p>Nuevo</p>
          </button>
        </div>

        {/* Lista de productos */}
        <div>
          {productos.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <div style={{ display: "grid", gap: "5px" }}>
              {productos.map((producto) => (
                <div key={producto.id} className={styles.productoItem}>
                  <img
                    className={styles.imagen}
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                  <h3>{producto.nombre}</h3>
                  <div>
                    <h6>Precio:</h6> <p> ${producto.precio}</p>
                    <h6>Existencia:</h6> <p>{producto.cantidad}</p>
                    <h6>Descripción:</h6> <p>{producto.descripcion}</p>
                  </div>
                  {/* Botones para editar y eliminar este producto */}
                  <button
                    className={styles.boton}
                    onClick={() => abrirFormularioEditar(producto)}
                  >
                    {/* boton editar */}
                    <SquarePen />
                  </button>

                  <button
                    className={styles.boton}
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    {/* boton eliminar */}
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal - Formulario condicional */}
        {mostrarForm && (
          <>
            {/* Pasar los props correctos según el modo */}
            <FormProducto
              productoInicial={productoSeleccionado || {}}
              modo={modoFormulario}
              onCerrar={cerrarFormulario}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GestionProductos;

// import { useState, useEffect } from "react";
// import FormProducto from "./FormProducto";
// import EditarProducto from "./EditarProducto";
// import styles from "./GestionProducto.module.css";
// // import { useProductosContext } from "../context/ProductosContext";
// // import { Form } from "react-router-dom";
// import CirclePlus from "../assets/CirclePlus";
// // import SquarePen from "../assets/SquarePen";
// // import TrashIcon from "../assets/TrashIcon";

// const GestionProducto = () => {
//   // const [productoSeleccionado, setProductoSeleccionado] = useState(null);
//   const [cargando, setCargando] = useState(true);
//   const [productos, setProductos] = useState([]);
//   const API =
//     "https://6904e0af6b8dabde496575fb.mockapi.io/tienda_proyecto_final_react_jgm/productos";

//   // cargamos los productos desde la API al llamar el componente
//   // useEffect(() => {
//   //   cargarProductos();
//   // }, []);

//   // const URL =
//   // "https://6904e0af6b8dabde496575fb.mockapi.io/tienda_proyecto_final_react_jgm/productos";

//   useEffect(() => {
//     fetch(API)
//       .then((respuesta) => respuesta.json())
//       .then((datos) => setProductos(datos))
//       //.then((datos) => {setProductos(datos);setCargando(false);})
//       .catch(
//         (error) => setCargando(false) + error.messge
//         // setError("Error al cargar productos." + error.message)
//       )
//       .finally(() => setCargando(false));
//   }, []);

//   if (cargando) return <p>Cargando productos...</p>;

//   // const cargarProductos = () => {
//   //   // try{
//   //     setCargando(true);
//   //     fetch(API);
//   //     ((respuesta)=> respuesta.json())
//   //     // ((datos) =>  setProductos(datos))
//   //     const datos = respuesta.json();
//   //     // setProductos(datos);
//   //   // }catch{((error)=> setCargando(false));
//   //   // }
//   // };

//   // const cargarProductos = async () => {
//   //   try {
//   //     setCargando(true);
//   //     console.error("Error al cargar los productos:", 1);
//   //     const respuesta = await fetch(API);
//   //     const datos = await respuesta.json();
//   //     setProductos(datos);
//   //   } catch (error) {
//   //     console.error("Error al cargar los productos:", error);
//   //     <p>Error al cargar el producto</p>;
//   //   } finally {
//   //     setCargando(false);
//   //   }
//   // };

//   //***************************************************** */
//   // Funcion para seleccionar un producto para editar
//   //***************************************************** */
//   // const seleccionarProducto = (producto) => {
//   //   setProductoSeleccionado(producto);
//   // };

//   // if (cargando) return <div> Cargando Productos ...</div>;

//   //***************************************************** */
//   //Agregar producto a API
//   //***************************************************** */
//   const agregarProducto = async (producto) => {
//     try {
//       const respuesta = await fetch(API, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(producto),
//       });

//       if (!respuesta.ok) throw new Error("Error al agregar el producto");

//       const datos = await respuesta.json();
//       //console.log("Producto agregado:", datos);
//       <p style={{ color: "red" }}>Producto Agregado Correctamente</p>;

//       //Agregar el nuevo producto a la lista
//       setProductos([...productos, datos]);
//     } catch (error) {
//       console.error("Error al agregar el producto:", error);
//       <p style={{ color: "red" }}>Error al agregar el producto</p>;
//     }
//   };

//   // //***************************************************** */
//   // // Función Eliminar producto de la API
//   // //***************************************************** */

//   const eliminarProducto = async (id) => {
//     const confirmar = window.confirm(
//       "¿Estás seguro de eliminar este producto?"
//     );

//     if (confirmar) {
//       try {
//         const respuesta = await fetch(`${API}/${id}`, {
//           method: "DELETE",
//         });

//         if (!respuesta.ok) throw new Error("Error al eliminar el producto");
//         //filtrar y crear un nuevo array sin el producto eliminado
//         setProductos(productos.filter((pro) => pro.id !== id));
//       } catch (error) {
//         console.error("Error al eliminar el producto:", error.messge);
//         <p style={{ color: "red" }}>Error al eliminar el producto</p>;
//       }
//     }
//   };

//   return (
//     <div>
//       {/* <div className={styles.container}> */}

//       {/* <div className={styles.panel}> */}
//       {/* boton agregar producto */}
//       <div className={styles.botonAgregarProducto}>
//         <botton onClick={() => agregarProducto(productos)}>
//           <CirclePlus />
//           Agregar Producto
//         </botton>
//       </div>
//       {/* </div> */}

//       {productos.map((producto) => (
//         <div
//           key={producto.id}
//           // onClick={() => seleccionarProducto(producto)}
//           // className={styles.productoItem}
//         >
//           <img className={styles.imagen} src={producto.imagen} />
//           <h3>{producto.nombre}</h3>
//           <p>Precio: ${producto.precio}</p>
//           <p>Cantidad: {producto.cantidad}</p>
//           {/* boton eliminar */}
//           <button onClick={() => eliminarProducto(producto.id)}>
//             Eliminar
//           </button>
//         </div>
//       ))}
//       {/* </div> */}

//       {/* formulario para editar producto */}
//       {/* <div className={styles.panel}> */}
//       {/* <FormularioProducto onAgregar={agregarProducto} /> */}
//       {/* <EditarProducto productoSeleccionado={productoSeleccionado} /> */}
//       {/* </div> */}
//       {/* </div> */}
//     </div>
//   );
// };

// export default GestionProducto;
