import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario == "admin" && contrasenia == "admin1234") {
      login(usuario);
      navigate("/Admin");
    } else {
      // <p style={{ color: "red" }}>Credenciales Incorrectos</p>;
      alert("Credenciales Incorrectos");
    }
  };

  return (
    <>
      <div className="row g-3 align-items-center container mt-5">
        <form className="text-center" onSubmit={handleSubmit}>
          <h2 className="text-center">Iniciar</h2>

          <div className="col-auto text-center mb-2">
            <label className="col-form-label" htmlFor="">
              Usuario
            </label>
          </div>
          <div className="col-auto text-center mb-2">
            <input
              className="col-form-input"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="col-auto text-center mb-2">
            <label className="col-form-label" htmlFor="">
              Contraseña
            </label>
          </div>

          <div className="col-auto text-center mb-2">
            <input
              className="col-form-input"
              type="password"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
            />
          </div>

          <button className="btn btn-primary mt-3" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
