import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';
import { useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './redux/cartSlice';
import { removeFromCart } from './redux/cartSlice';


function ProductPage() {
const products = [
  {
    id: 1,
    name: 'Fiddle Leaf Fig',
    price: 45,
    image: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Indoor'
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 30,
    image: 'https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Indoor'
  },
  {
    id: 3,
    name: 'Aloe Vera',
    price: 25,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Succulent'
  },
  {
    id: 4,
    name: 'Peace Lily',
    price: 35,
    image: 'https://images.unsplash.com/photo-1616690248297-1ec539dd910f?q=80&w=3077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Indoor'
  },
  {
    id: 5,
    name: 'Spider Plant',
    price: 20,
    image: 'https://images.unsplash.com/photo-1647631703145-01e8bf7cd149?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Indoor'
  },
  {
    id: 6,
    name: 'Cactus',
    price: 15,
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?q=80&w=2871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Succulent'
  }
];

const dispatch = useDispatch();
const cart = useSelector(state => state.cart.items);
  return (
    <div>
    <div>
  <h2>Cart Contents</h2>
  <ul>
    {cart.map(item => (
      <li key={item.id}>
        {item.name} - {item.quantity} x ${item.price}
        <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
        <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
        <button onClick={() => dispatch(removeFromCart(item))}>Delete</button>
      </li>
    ))}
  </ul>
</div>
      <h2>Our Houseplants</h2>
<div style={{ display: 'flex', gap: '1rem' }}>
  {products.map(plant => (
    <div key={plant.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <img src={plant.image} alt={plant.name} style={{ width: '100%' }} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
    </div>
  ))}
</div>

    </div>
  );
}

export default ProductPage;
