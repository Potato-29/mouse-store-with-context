import products from '../data.js';
import React from 'react';
import ProductCard from '../Components/ProductCard.js';

const Homescreen = () => {
  return (
    <div className='products'>
        {products.map((product) => (<ProductCard key={product.id} product={product} />))}
    </div>
  )
}

export default Homescreen