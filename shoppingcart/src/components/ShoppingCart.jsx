import React, { useState } from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item">
      <h3>{item.product.name}</h3>
      <p>Price: ${item.product.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => updateQuantity(item.product, item.quantity - 1)}>-</button>
      <button onClick={() => updateQuantity(item.product, item.quantity + 1)}>+</button>
      <button onClick={() => removeFromCart(item.product)}>Remove</button>
    </div>
  );
}
const ShoppingCart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        // Add more products here
      ]);
    
      const [cart, setCart] = useState([]);
    
      const addToCart = (product) => {
        const existingItem = cart.find(item => item.product.id === product.id);
    
        if (existingItem) {
          const updatedCart = cart.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          setCart(updatedCart);
        } else {
          setCart([...cart, { product, quantity: 1 }]);
        }
      };
    
      const removeFromCart = (product) => {
        const updatedCart = cart.filter(item => item.product.id !== product.id);
        setCart(updatedCart);
      };
    
      const updateQuantity = (product, newQuantity) => {
        const updatedCart = cart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
        setCart(updatedCart);
      };
  return (
    <div className="shopping-cart">
    <div className="products">
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <CartItem key={item.product.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      ))}
    </div>
  </div>
  )
}

export default ShoppingCart