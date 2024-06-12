import { useCartContext } from "../context/CartContext";
import { Navbar as NavbarUI, NavbarBrand, NavbarContent, NavbarItem, Button, Chip, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CategoryDrpdown } from "./CategoryDropdown";
import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    "Shorts",
  ];

  return (
    <NavbarUI
      className="dark text-foreground bg-background"
      onMenuOpenChange={setMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={menuOpen ? "close menu" : "open menu"}
          className="sm:hidden"
        />
        <NavbarMenu className="dark text-foreground bg-transparent">
          {menuOpen && (
            <>
              <NavbarMenuItem>
                <Link color="foreground" to="/" className="mobile-navbar-link">
                  Home
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <CategoryDrpdown categories={categories} />
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link
                  color="foreground"
                  to="/about"
                  className="mobile-navbar-link"
                >
                  About Us
                </Link>
              </NavbarMenuItem>
            </>
          )}
        </NavbarMenu>
      </NavbarContent>
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
          <CategoryDrpdown categories={categories} />
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
