import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useCartContext } from "../context/CartContext";

 

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps){
    const { closeCart } = useCartContext()
    return (   
        <div className="shopping-cart-container">  
        <Drawer anchor="right" open={isOpen} onClose={closeCart}>
            <List className="dark text-foreground bg-background">
                <ListItem>
                    <ListItemText>Cart</ListItemText>
                    <Button onClick={closeCart}>X</Button>
                </ListItem>
            </List>
        </Drawer>
        </div>
        )
 }
 //<Offcanvas show={isOpen} onHide={closeCart} placement="end">
//             <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Cart</Offcanvas.Title>
//                 <Button onClick={closeCart}>X</Button>
//             </Offcanvas.Header>
//         </Offcanvas>