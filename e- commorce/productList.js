import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import ProductDetail from './ProductDetail';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductDetail key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
