import { useState } from "react";
const Formulario = () => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Nombre enviado:', nombre);
    <p style={{ color: "red" }}>${nombre} enviado</p>;
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        //placeholder="Ingrese su nombre"
      />
      <button>Enviar</button>
    </form>
  );
};
export default Formulario;
