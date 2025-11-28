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
    <div className="container">
      <div className="row">
        <h4 className="text-center">Lista de Productos.</h4>
        {/* Botón para agregar producto */}
        <button
          onClick={abrirFormularioAgregar}
          className={styles.botonAgregar}
        >
          <CirclePlus className="w-5 h-5" />
          <p>Nuevo</p>
        </button>

        {/* Lista de productos */}
        {productos.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          <div className="">
            {productos.map((producto) => (
              <div key={producto.id} className="">
                <div className="border border-4  ">
                  {/* Imagen del producto */}
                  <div className="">
                    <img
                      className="card-img-top col-12 col-md-4 col-lg-3"
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">{producto.nombre}</h3>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <h6>Existencia:{producto.cantidad}</h6>
                    <h6 className="card-text">
                      Descripción: {producto.descripcion}{" "}
                    </h6>
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
              </div>
            ))}
            ;
          </div>
        )}

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
