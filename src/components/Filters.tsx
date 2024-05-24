import { Dropdown, DropdownTrigger, NavbarItem, Button, DropdownMenu, DropdownItem } from "@nextui-org/react"
//import { Link } from "react-router-dom";
import { FILTER_BUTTONS } from "../consts";
import { FilterValue } from "../types";


interface Props {
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void
}

// eslint-disable-next-line react/prop-types
export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
    const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        onFilterChange(filter)
    }

    return (
      <>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Products
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Categories">
            {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
              const isSelected = key === filterSelected;
              const className = isSelected ? "selected" : "";

              return (
                <DropdownItem key={key} >
                  <a
                    color="foreground"
                    href={href}
                    className={className}
                    onClick={handleClick(key as FilterValue)}
                  >
                    {literal}
                  </a>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </>
    );
}