import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
  
  const { id } = useParams();
  const [products, setProducto] = useState(null);
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(respuesta => respuesta.json())
      .then(dato => 
        setProducto(dato)
    );
  },[id]);

  if(!products)
    return <p>Cargando ......</p>
  
  return(
    <>
      <h2>Detalles del Producto Nro {id}</h2>
      <img src={products.image} alt={products.title} width={100} height={100} />
      <h3>{products.title}</h3>
      <p>{products.description}</p>
    </>
    
  );
}

export default ProductoDetalle;