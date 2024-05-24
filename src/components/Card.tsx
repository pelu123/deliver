import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../App.css";
import { formatCurrency } from "../utilities/formatCurrency";
import { useCartContext } from "../context/CartContext";
import { Product } from "../types";

interface StoreProductProps extends Product {}


export function Cards({ id, name, category, description, price, image }: StoreProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCartContext();
  const quantity = getItemQuantity(id);
  return (
    <div style={{ maxWidth: '30%', margin: '1.66%' }} className="card-container" >
      <Card sx={{ maxWidth: 280 }} key={id} className="justify-center">
        <CardMedia component="img" height="140" image={image} alt={category} />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography>{formatCurrency(price)}</Typography>
        </CardContent>
        <CardActions className="card-content">
          {quantity === 0 ? (
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => increaseCartQuantity(id)}
            >
              <AddShoppingCartIcon />
            </IconButton>
          ) : (
            <div className="cart-actions">
              <Button size="medium" onClick={() => increaseCartQuantity(id)}>
                +
              </Button>
              {quantity}
              <Button
                size="medium"
                color="error"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    </div>
  );
}


