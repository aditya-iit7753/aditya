import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductDetail;
