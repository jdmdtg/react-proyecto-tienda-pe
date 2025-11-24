import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import styles from "../components/FormProducto.module.css";
import X from "../assets/X";

const FormProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) => {
  const [producto, setProducto] = useState(productoInicial);
  const { agregarProducto, editarProducto } = useProductosContext();
  // const [errores, setErrores] = useState({}); // Estado para los errores de validación, tipo objeto

  const HandleChange = (e) => {
    // evento de control de cambios en el formulario
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  // *******handleSubmit con validacion***************************************************
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modo === "agregar") {
      // if (!validarFormulario()) return;
      // alert({ errores });
      await agregarProducto(producto);
    } else {
      await editarProducto(producto);
    }
    onCerrar();
  };

  return (
    <div className={styles.modalOverlay} arial-modal="true" role="dialog">
      <div clasname={styles.modalContainer}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2 className="{styles.modalHeadersTitle}">
              {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
            </h2>
            <button
              type="button"
              onClick={onCerrar}
              className={styles.closeButton}
            >
              <X />
            </button>
          </div>

          {/* creamos el formulario */}
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.colSpan2}>
                {/* ******************nombre */}
                <label className={styles.formLabel}>Nombre:</label>
                <input
                  className={styles.formInputBase}
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={producto.nombre || ""}
                  placeholder="Ingrese el nombre del producto."
                  onChange={HandleChange}
                  required
                />
              </div>
              {/* ******************precio */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>Precio:</label>
                <input
                  className={styles.formInputBase}
                  type="number"
                  name="precio"
                  id="precio"
                  value={producto.precio || ""}
                  placeholder="Ingrese el precio del producto.($0.00)"
                  onChange={HandleChange}
                  min={0}
                  step="any"
                  required
                />
              </div>
              {/* ******************imagen */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>(URL) de la Imagen:</label>
                <input
                  className={styles.formInputBase}
                  type="text"
                  name="imagen"
                  id="imagen"
                  value={producto.imagen || ""}
                  placeholder="Ingrese la URL de la imagen del producto. (http://...)"
                  onChange={HandleChange}
                  required
                />
              </div>
              {/* ******************descripcion */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Descripción:</label>
                <textarea
                  className={styles.formInputBase}
                  name="descripcion"
                  id="descripcion"
                  value={producto.descripcion || ""}
                  placeholder="Ingrese la descripción del producto."
                  onChange={HandleChange}
                  required
                ></textarea>
              </div>
              {/* ******************existencia */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>Existencia:</label>
                <input
                  className={styles.formInputBase}
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  value={producto.cantidad || ""}
                  placeholder="Ingrese la existencia en deposito del producto.(0.000)"
                  onChange={HandleChange}
                  min={0}
                  step="any"
                />
              </div>
              {/* ****************** botones */}
              <div className={styles.modalActions}>
                <button
                  type="submit"
                  className={`${styles.btnBase} ${styles.btnPrimary}`}
                >
                  {modo === "agregar" ? <>Agregar</> : <>Actualizar</>}
                </button>

                <button
                  type="button"
                  className={`${styles.btnBase} ${styles.btnSecondary}`}
                  onClick={onCerrar}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormProducto;

/* </>  

                        <>
                        <form onSubmit={handleSubmit}>
                          <h2>Agregar Producto</h2>
                          <div>
                            <label>Nombre:</label>
                            <input
                           
                            type="
                          text"
                              name="nombre"
                              value={producto.nombre}
                              onChange={HandleChange}
                            />
                            {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
                          </div>
                          <div>
                            <label>Precio:</label>
                            <input
                              type="number"
                              name="precio"
                              value={producto.precio}
                              onChange={HandleChange}
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
                              onChange={HandleChange}
                            />
                            {errores.imagen && <p style={{ color: "red" }}>{errores.imagen}</p>}
                          </div>
                          <div>
                            <label>Descripción:</label>
                            <textarea
                              name="descripcion"
                              value={producto.descripcion}
                              onChange={HandleChange}
                            />
                            {errores.descripcion && (
                              <p style={{ color: "red" }}>{errores.descripcion}</p>
                            )}
                          </div>
                          <button type="submit">Agregar Producto</button>
                        </form>
                        </> */
// }

// **********************************************************
// const validarFormulario = () => {
//   const nuevosErrores = {};

//   if (!producto.nombre.trim())
//     nuevosErrores.nombre = "El nombre es obligatorio";

//   if (!producto.precio || Number(producto.precio) <= 0)
//     nuevosErrores.precio = "El precio debe ser un número positivo";

//   if (!producto.imagen.trim() || producto.imagen.length < 6)
//     nuevosErrores.imagen = "La URL de la imagen no es valida";

//   if (!producto.descripcion.trim() || producto.descripcion.length < 10)
//     nuevosErrores.descripcion =
//       "La descripción debe tener al menos 10 caracteres";
//   if (Number(producto.cantidad) <= 0)
//     nuevosErrores.cantidad = "La Existencia debe ser un número positivo";

//   setErrores(nuevosErrores);
//   return Object.keys(nuevosErrores).length === 0; // obj que toma los errores y devuelve true si no hay errores
// };

// ***************validacion*******************************************
// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (!validarFormulario()) return;

//   const productoAEnviar = {
//     // pasas todos las propiedades del producto y conviertes el precio a float
//     ...producto,
//     precio: parseFloat(producto.precio),
//   };
// **********************************************************
//   onAgregar(productoAEnviar); // Llamas a la función onAgregar pasada como prop con el producto a enviar

//   setProducto({
//     // Reseteas el formulario
//     nombre: "",
//     precio: "",
//     imagen: "",
//     descripcion: "",
//   });
//   setErrores({}); // Reseteas los errores
// };
