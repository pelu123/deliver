import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import storeProduct from "../mocks/products.json";
import { formatCurrency } from "../utilities/formatCurrency";
import "../App.css";
import { RemoveShoppingCart } from "@mui/icons-material";
import { useState, useEffect }from "react"

type CartItemProps = {
  id: number
  quantity: number
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useCartContext();
  const product = storeProduct.find((product) => product.id === id);
  if (!product) return null;

  //Resposive logic for CartItem
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 940);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ maxWidth: "90%", margin: "1.66%" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          maxWidth: isMobile ? "100%" : "280",
        }}
      >
        <CardMedia
          component="img"
          height={isMobile ? "auto" : "110"}
          image={product.image}
          alt={product.name}
          sx={{
            flex: isMobile ? "100%" : "auto",
            maxWidth: isMobile ? "100%" : "30%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            maxWidth: isMobile ? "100%" : "70%",
            maxHeight: isMobile ? "100%" : "auto",
          }}
        >
          <CardContent
            sx={{
              flex: isMobile ? "100%" : "auto",
              padding: isMobile ? "0.5rem" : "",
            }}
          >
            <Typography variant="h5" color="black">
              {product.name}{" "}
              {quantity > 1 && (
                <span className="text-muted" style={{ fontSize: ".65rem" }}>
                  X{quantity}
                </span>
              )}
            </Typography>
            <Typography>
              {formatCurrency(product.price)}
              {quantity > 1 && (
                <div>{formatCurrency(product.price * quantity)}</div>
              )}
            </Typography>
          </CardContent>
          <Button onClick={() => removeFromCart(id)}>
            <RemoveShoppingCart style={{ color: "red" }} />
          </Button>
        </Box>
      </Card>
    </div>
  );
}
