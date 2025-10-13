// import { useState } from 'react';
import Carrito from './components/Carrito';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Moda from './pages/Moda';
import Contactos from './pages/Contactos';
import ProductoDetalle from './pages/productoDetalle';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HotSale from './pages/Hotsale';

function App() {

  return (
    <>
          <Header />

            <Routes> 
            <Route path='/' element={<Inicio />}/> 
            <Route path='/moda' element={<Moda />}/> 
            <Route path='/Contactos' element={<Contactos />}/>
            <Route path='/Hotsale' element={<HotSale />}/>
            <Route path='/products/:id' element={<ProductoDetalle />}/>
                            
            </Routes>  
          <Footer/>  
    </>
   
   
    
  )
}

export default App