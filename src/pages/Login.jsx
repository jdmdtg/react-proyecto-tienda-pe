import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [usuario, serUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const { login } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario == "admin" && contrasenia == "admin1234") {
      login(usuario);
      navigate("/admin");
    } else {
      <p style={{ color: "red" }}>Credenciales Incorrectos</p>;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div>
          <label htmlFor="">User</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => serUsuario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
          />
        </div>
        <button type="submit">Get Into</button>
      </form>
    </>
  );
};

export default Login;
