import React from 'react';
import ProductCategory from './ProductCategory';

const Handgun = ({ addToCart }) => (
  <ProductCategory category="handgun" title="Handgun" addToCart={addToCart} />
);

export default Handgun;
