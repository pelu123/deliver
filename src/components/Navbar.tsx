import { useCartContext } from "../context/CartContext";
import { Navbar as NavbarUI, NavbarBrand, NavbarContent, NavbarItem, Button, Chip } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CategoryDrpdown } from "./CategoryDropdown";


export default function Navbar() {
  const { openCart, cartQuantity } = useCartContext();
  const categories = [
    "Caps",
    "Pants",
    "Shoes",
    "Headphones",
    "Tshirts",
    "Sunglasses",
    "Smartwatch",
    "Hoodies",
    "Boots",
    "Shorts"
  ]
   
  return (
    <NavbarUI className="dark text-foreground bg-background">
      <NavbarBrand>
        <p className="font-bold text-inherit">DELIVER</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <CategoryDrpdown categories={categories}/>         
        </NavbarItem> 
        <NavbarItem>
          <Link color="foreground" to="/about">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button onClick={openCart}>
          <ShoppingCartIcon />
          {cartQuantity > 0 && <Chip color="warning">{cartQuantity}</Chip>}
        </Button>
      </NavbarContent>
    </NavbarUI>
  );
}
