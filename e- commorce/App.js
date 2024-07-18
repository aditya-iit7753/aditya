import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>E-Commerce Website</h1>
        <ProductList />
        <Cart />
        <Checkout />
      </div>
    </Provider>
  );
}

export default App;
