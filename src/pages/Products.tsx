import '../App.css'
import { Col, Row } from 'react-bootstrap'
import { Cards } from '../components/Card'
import storeProduct from '../mocks/products.json'
 import { FilterValue } from '../types'
import { PRODUCTS_FILTER } from '../consts'
import { Filters } from '../components/Filters'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export function Products({ onFilterChange }: Props) {
  const location = useLocation();
  const { filter } = queryString.parse(location.search);
  let filterValue: FilterValue = PRODUCTS_FILTER.ALL;

  if (Object.values(PRODUCTS_FILTER).includes(filter as FilterValue)) {
    filterValue = filter as FilterValue;
  }

  const [filterSelected, setFilterSelected] = useState(filterValue);

  useEffect(() => {
    setFilterSelected(filterValue);
    onFilterChange(filterValue);
  }, [filter, onFilterChange]);

  const filteredProducts =
    filterSelected === PRODUCTS_FILTER.ALL
      ? storeProduct
      : storeProduct.filter((product) => product.category === filterSelected);
  return (
    <>
      <h1 className="page-title">PRODUCTS</h1>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={onFilterChange}
      />
      <Row className="card-container">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <Cards {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

