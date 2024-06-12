import { Button, Card, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import  products  from "../mocks/products.json"
import { useCartContext } from "../context/CartContext";


export function HomeCards() {
  const { increaseCartQuantity } = useCartContext();

  const [start, setStart] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    window.addEventListener("resize", updateCardsToShow);
    updateCardsToShow();

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handleNext = () => {
    setStart((prevStart) => prevStart + cardsToShow);
  };

  const handlePrev = () => {
    setStart((prevStart) => prevStart - cardsToShow);
  };

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 md:ml-3 md:mr-3">
        {products.slice(start, start + cardsToShow).map((product) => (
          <Tooltip
            key={product.id}
            content="Add to cart"
            showArrow={true}
            color="success"
          >
            <Card
              key={product.id}
              isPressable
              onPress={() => increaseCartQuantity(product.id)}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  height="100%"
                  alt={product.name}
                  className="w-full object-cover h-full"
                  src={product.image}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{product.name}</b>
                <p className="text-default-500">${product.price}</p>
              </CardFooter>
            </Card>
          </Tooltip>
        ))}
      </div>
      <div className="flex justify-between w-full mt-4 ">
        <Button disabled={start === 0} onClick={handlePrev} className="ml-5">
          Prev
        </Button>
        <Button
          disabled={start + cardsToShow >= products.length}
          onClick={handleNext}
          className="mr-5"
        >
          Next
        </Button>
      </div>
    </>
  );
}