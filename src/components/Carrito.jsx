import styles from '../components/Carrito.module.css';

const Carrito = ({ productosEnCarrito, productosEliminados }) => {
  return (
    <div>
      <h2>Carrito</h2>
      {productosEnCarrito.map((producto, indice) => (
        <div key={indice}>
          <img src={producto.image} alt={producto.title} height={80} width={80} />
          <p> {producto.title} : {producto.price}$ </p>
          <button className={styles.buttonRed} onClick={() => productosEliminados(indice)}>Eliminate</button>
        </div>
      ))}
    </div>
  );
};

export default Carrito;