import '../App.css'
import { Col, Row } from 'react-bootstrap'
import { Cards } from '../components/Card'
import storeProduct from '../mocks/products.json'



export function Products(){
  return (
  <>
  <h1 className='page-title'>
    PRODUCTS
  </h1>
  <Row className='card-container'>
{storeProduct.map(product => (
    <Col key={product.id}>
      <Cards {...product}/>
    </Col>
  ))}  
  </Row>    
  </> 
  )
}
