import { useCartContext } from "../context/CartContext";
import { Navbar as NavbarUI, NavbarBrand, NavbarContent, NavbarItem, Button, Chip } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Filters } from "./Filters";
import { FilterValue } from "../types";



interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export default function Navbar({ filterSelected, onFilterChange }: Props) {
  const { openCart, cartQuantity } = useCartContext();


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
            <Filters
              filterSelected={filterSelected}
              onFilterChange={onFilterChange}
            />                  
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
