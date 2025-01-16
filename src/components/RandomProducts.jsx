
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';
import data from '../data/dog.json'


export default function RandomProducts() {
  const { cart, setCart } = useContext(CartContext);
  const{products}=data;
  

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

 
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(products);
    setRandomProducts(shuffled.slice(0, 6));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

  };

  return (
    <>
      <h2 className='randText py-3 inter-500'>Зазвичай замовляють</h2>

      <div className="product-list w-100 d-flex flex-row flex-wrap">
        {randomProducts.map((product) => (
          <div key={product.id} className="product card w-20">
            <img src={product.imgSrc} alt={product.altText} className="product-image w-100" />
            <h3 className="product-description">{product.description}</h3>
            <p className="product-price my-5">{product.price} грн.</p>
            <button
              onClick={() => addToCart(product)}
              className="product-link buyer inter-400"
            >
              Купити
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

