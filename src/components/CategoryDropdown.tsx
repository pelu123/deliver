import { useNavigate } from "react-router-dom"
import { Dropdown, DropdownTrigger, NavbarItem, Button, DropdownMenu, DropdownItem } from "@nextui-org/react"
import  products  from "../mocks/products.json"


interface CategoryDropdownProps {
  categories: string[];
}

export const CategoryDrpdown: React.FC<CategoryDropdownProps> = ({categories}: CategoryDropdownProps) => {
  const navigate = useNavigate();
  const handleCategoryClick = (category: string) => {
    if(products){
      const product = products.find((p) => p.category === category)
      navigate(`/products/${category}`, {state: {product}}); 
    }else{
      console.log("products not found")
    }   
  };

  return (
    <>
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            radius="sm"
            variant="light">
              Products
            </Button>
          </DropdownTrigger>          
        </NavbarItem>
        <DropdownMenu aria-label="Categories">
          {categories.map((category) => {
            return (
              <DropdownItem
                textValue="category"
                key={category}
                onClick={() => handleCategoryClick(category)}
                href={(`/products/${category}`)}
              >
                {category}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

