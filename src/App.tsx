import { Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Products } from './pages/Products'
import { About } from './pages/About'
import { CartProvider } from './context/CartContext'
import { useState } from 'react'
import { FilterValue } from './types'
import { PRODUCTS_FILTER } from './consts'





function App() {
  const [filterSelected, setFilterSelected] = useState<FilterValue>(PRODUCTS_FILTER.ALL)
  const onFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
 

  return (
    <>
      <CartProvider>
        <Navbar filterSelected={filterSelected} onFilterChange={onFilterChange}/>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products filterSelected={filterSelected} onFilterChange={onFilterChange}/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </CartProvider>
    </>
  );
}

export default App
