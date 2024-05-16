import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import storeProduct from "../mocks/products.json";
import { formatCurrency } from "../utilities/formatCurrency";
import "../App.css";
import { RemoveShoppingCart } from "@mui/icons-material";

type CartItemProps = {
  id: number
  quantity: number
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useCartContext();
  const product = storeProduct.find((product) => product.id === id);
  if (!product) return null;

  return (
    <div style={{ maxWidth: "90%", margin: "1.66%" }}>
      <Card sx={{ display: "flex", flexDirection: "row", maxWidth: "280" }}>
        <CardMedia
          component="img"
          height="110"
          image={product.image}
          alt={product.name}
          sx={{ maxWidth: "30%" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "70%" }}>
          <CardContent
            sx={{ flex: "1 0 auto" }}
          >
            <Typography variant="h5" color="black">
              {product.name} {" "}
              {quantity > 1 && (
                <span className="text-muted" style={{fontSize: ".65rem"}}>
                X{quantity}
                </span>
              )}
            </Typography>
            <Typography>
                {formatCurrency(product.price)}
                {quantity > 1 && (
                 <div>
                    {formatCurrency(product.price * quantity)}
                </div>   
                )}               
            </Typography>
          </CardContent>
          <Button onClick={() => removeFromCart(id)}>
            <RemoveShoppingCart style={{color: "red"}}/>
          </Button>
        </Box>
      </Card>
    </div>
  );
}
