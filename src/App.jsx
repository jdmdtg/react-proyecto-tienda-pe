import Header from './components/Header';
import Home from './pages/Home';
import Fashion from './pages/Fashion';
import Contactos from './pages/Contactos';
import ProductoDetalle from './pages/ProductoDetalle';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HotSale from './pages/Hotsale';

function App() {

  return (
    <>
          <Header />

            <Routes> 
            <Route path='/' element={<Home />}/> 
            <Route path='/Fashion' element={<Fashion />}/> 
            <Route path='/Hotsale' element={<HotSale />}/>
            <Route path='/Contactos' element={<Contactos />}/>
            <Route path='/products/:id' element={<ProductoDetalle />}/>
                            
            </Routes>  
          <Footer/>  
    </>   
  )
}

export default App