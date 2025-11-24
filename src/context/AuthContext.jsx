import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// creamos el contexto de Autenticacion
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  // establecer el localStorage al iniciar la aplicacion
  const login = (nombreUsuario) => {
    // Simulamos la creacion del token
    const token = `fake-token-${nombreUsuario}`;
    localStorage.setItem("authToken", token);
    setUsuario(nombreUsuario);
  };

  // funcion para cerrar sesion, remueve el token del localStorage
  const logout = () => {
    localStorage.removeItem("authToken");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
 
