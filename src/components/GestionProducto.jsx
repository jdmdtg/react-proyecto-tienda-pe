import { useState } from "react";
import FormProducto from "./FormProducto";
import { useProductosContext } from "../context/ProductosContext";
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

  const mostrarmensaje = () => {
    window.alert("Botón en contrucción.");
  };

  return (
    <div className="container">
      <div className="row">
        {/* Botón para agregar producto */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end border border-2">
          {/* d-grid gap-2 d-md-flex */}
          <button
            className="btn btn-primary me-md-2 "
            // btn btn-success col-12 col-md-6 col-lg-2  btn-sm
            onClick={abrirFormularioAgregar}
            title="Agregar Nuevo Producto"
            // className={styles.botonAgregar}
          >
            <CirclePlus className="" />
            <p>Nuevo</p>
          </button>
          <button
            className="btn btn-danger me-md-2"
            // btn btn-success col-12 col-md-6 col-lg-2  btn-sm
            onClick={mostrarmensaje}
            title="Eliminar todos los productos."
            // className={styles.botonAgregar}
          >
            <TrashIcon className="" />
            <p>Eliminar</p>
          </button>
        </div>

        <h4 className="text-center mt-2">Lista de Productos.</h4>
        {/* Lista de productos */}
        {productos.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          <div className="border border-1">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="mt-3 border border-3 bs-primary-border"
              >
                {/* Imagen del producto */}
                <div className="card col-12 col-md-4 col-lg-3 mt-2">
                  <img
                    className=" "
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                </div>

                <div className="card-body">
                  <h4 className="card-title">{producto.nombre}</h4>
                  <h6 className="card-text mt-2">Precio: ${producto.precio}</h6>
                  <h6>Existencia:{producto.cantidad}</h6>
                  <h5 className="card-text">
                    Descripción: {producto.descripcion}
                  </h5>
                </div>

                {/* Botones para editar y eliminar este producto */}
                <button
                  className="btn btn-primary col-12 col-md-6 col-lg-2 btn-sm mt-2"
                  onClick={() => abrirFormularioEditar(producto)}
                >
                  {/* boton editar */}
                  <SquarePen />
                </button>

                <button
                  className="btn btn-danger col-12 col-md-6 col-lg-2 btn-sm mt-2"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  {/* boton eliminar */}
                  <TrashIcon />
                </button>
              </div>
            ))}
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
