import { Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Products } from './pages/Products'
import { About } from './pages/About'
import { CartProvider } from './context/CartContext'



function App() {
 
  return (
    <>
      <CartProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </CartProvider>
    </>
  );
}

export default App