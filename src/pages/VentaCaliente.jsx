const VentaCaliente = () => {
  return (
    <>
      <h2 className="text-center bg-warning">Ventas Calientes</h2>
      <h1 className="text-center border border-danger my-4">70% off</h1>
      <div className="container">
        <div className="row">
          <div className="card col-12 col-md4 col-lg-3">
            <img
              className="card-img-top img-fluid"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_618250-MLA96506403976_112025-F.webp"
              alt="Bochin Articulo 900 Para Usos Multiples Con Puntera De Nylon"
            />
            <div>
              <h5 className="text-center">
                "Bochin Articulo 900 Para Usos Multiples Con Puntera De Nylon"
              </h5>
            </div>
            <h6 className="text-center text-">No disponibles.</h6>
          </div>
          <div className="card col-12 col-md4 col-lg-3">
            <img
              className="card-img-top img-fluid"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_721291-MLA89332212647_082025-F.webp"
              alt="Botín De Trabajo Y Seguridad Cas Boro C/puntera Certificado"
            />
            <div>
              <h5 className="text-center">
                "Botín De Trabajo Y Seguridad Cas Boro C/puntera Certificado"
              </h5>
            </div>
            <h6 className="text-center">No disponibles.</h6>
          </div>
          {/* -------------------------- */}
          <div className="card col-12 col-md4 col-lg-3">
            <img
              className="card-img-top img-fluid"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_640461-MLA89125804055_082025-F.webp"
              alt="Zapato De Trabajo Y Seguridad Ombu Ozono Plus Con Puntera"
            />
            <div>
              <h5 className="text-center">
                "Zapato De Trabajo Y Seguridad Ombu Ozono Plus Con Puntera"
              </h5>
            </div>
            <h6 className="text-center">No disponibles.</h6>
          </div>
          {/* -------------------------- */}
          <div className="card col-12 col-md4 col-lg-3">
            <img
              className="card-img-top img-fluid"
              src="https://http2.mlstatic.com/D_NQ_NP_2X_839362-MLA89133683955_082025-F.webp"
              alt="Zapato De Trabajo Y Seguridad Ombú Prusiano Con Puntera"
            />
            <div>
              <h5 className="text-center">
                "Zapato De Trabajo Y Seguridad Ombú Prusiano Con Puntera"
              </h5>
            </div>
            <h6 className="text-center">No disponibles.</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default VentaCaliente;
