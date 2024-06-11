import { Button } from "@nextui-org/react"
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import  products  from "../mocks/products.json"

type Props = {
    category: string
}

export default function HeaderHomeButtons({category}: Props) {
    const navigate = useNavigate();
    const handleCategoryClick = (category: string) => {
        if(category === "Hoodies"){
            const product = products.filter((p) => p.category === category)
            navigate(`/products/${category}`, {state: {product}});
        }
    }
    return (
      <div className="header-home-buttons">
        {category === "Hoodies" && (
          <Button
            variant="flat"
            style={{ marginRight: "8px" }}
            onClick={() => handleCategoryClick(category)}
          >
            Hoodies
          </Button>
        )}
        <Link to="/about">
          <Button variant="ghost" >More about DELIVER</Button>
        </Link>
      </div>
    );
}