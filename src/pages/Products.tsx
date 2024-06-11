import '../App.css'
import { Col, Row } from 'react-bootstrap'
import storeProduct from '../mocks/products.json'
import { useLocation, useParams } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../App.css";
import { formatCurrency } from "../utilities/formatCurrency";
import { useCartContext } from "../context/CartContext";



export function Products() {
  const category = useParams().category
  const location = useLocation()
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCartContext();
  

  const searchParams = new URLSearchParams(location.search)
  const productCategory = searchParams.get('category')

  const filteredProduct = category
    ? storeProduct.filter((product) => product.category === category)
    : storeProduct;

  return (
    <>
      <h1 className="page-title">{category}</h1>
    <div className='products-container'>
      <Row className="card-container">
        {filteredProduct.map((product) => (          
          <Col key={product.id}>
            <div
              style={{ maxWidth: "30%", margin: "1.66%", marginBottom: "20px" }}
              className="card-container"
            >
              <Card
                sx={{ maxWidth: 280 }}
                key={storeProduct[0].id}
                className="justify-center"
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={category}
                />
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {productCategory}
                  </Typography>
                  <Typography>{formatCurrency(product.price)}</Typography>
                </CardContent>
                <CardActions className="card-content">
                  {getItemQuantity(product.id) === 0 ? (
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                      onClick={() => increaseCartQuantity(product.id)}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  ) : (
                    <div className="cart-actions">
                      <Button
                        size="medium"
                        onClick={() => increaseCartQuantity(product.id)}
                      >
                        +
                      </Button>
                      {getItemQuantity(product.id)}
                      <Button
                        size="medium"
                        color="error"
                        onClick={() => decreaseCartQuantity(product.id)}
                      >
                        -
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </CardActions>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
  </div>
    </>
  );
}

