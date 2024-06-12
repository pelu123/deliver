import { Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Products } from './pages/Products'
import { About } from './pages/About'
import { CartProvider } from './context/CartContext'
import { FilterProvider } from './context/FilterContext'
import Footer from './components/Footer'


function App() {
  
  return (
    <>
    <FilterProvider>
      <CartProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/products/:category?" element={<Products/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </CartProvider>
      </FilterProvider>
    </>
  );
}

export default App
