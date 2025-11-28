import React, { useState } from "react";

const BarraBusqueda = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="secundary">
      {/* barra de busqueda */}
      <form className="d-flex my-3" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button class="btn btn-outline-primary" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};
export default BarraBusqueda;
