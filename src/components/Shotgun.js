import React from 'react';
import ProductCategory from './ProductCategory';

const Shotgun = ({ addToCart }) => (
  <ProductCategory category="shotgun" title="Shotgun" addToCart={addToCart} />
);

export default Shotgun;
