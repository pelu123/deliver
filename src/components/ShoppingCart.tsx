import { Close } from "@mui/icons-material";
import { useCartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { Button, Drawer, List, Box, Typography } from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";
import storeProduct from "../mocks/products.json"



 

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useCartContext();
  return (
    <div className="shopping-cart-container">
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={closeCart}
        PaperProps={{
          style: {
            backgroundColor: "grey",
            maxWidth: "35%",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1}
        >
          <Typography style={{ color: "black" }} variant="h5">
            Cart
          </Typography>
          <Button onClick={closeCart}>
            <Close style={{ color: "black" }} />
          </Button>
        </Box>
        <List>
          {cartItems.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(cartItems.reduce((total, cartProduct) => {
                const product = storeProduct.find(p => p.id === cartProduct.id)
                return total + (product?.price || 0) * cartProduct.quantity
            }, 0))}
          </div>
        </List>
      </Drawer>
    </div>
  );
}
