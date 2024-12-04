
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';

export default function RandomProducts() {
  const { cart, setCart } = useContext(CartContext);
  const products = [
    {
      id: 1,
      imgSrc: '/prod1.jpg',
      altText: 'Leash',
      description: 'M-Pets (М-Петс) Liberty Dog Retractable Leash - Повідець-рулетка для собак',
      price: 504,
      link: '#',
    },
    {
      id: 2,
      imgSrc: '/prod2.jpg',
      altText: 'Leash',
      description: 'Dog Collar - Повідець для собак',
      price: 305,
      link: '#',
    },
    {
      id: 3,
      imgSrc: '/prod3.jpg',
      altText: 'Toy',
      description: 'Dog Chew Toy - Іграшка для собак',
      price: 150,
      link: '#',
    },
    {
      id: 4,
      imgSrc: '/prod4.jpg',
      altText: 'Treats',
      description: 'Dog Treats - Ласощі для собак',
      price: 200,
      link: '#',
    },
  ];

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

 
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(products);
    setRandomProducts(shuffled.slice(0, 3));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    // alert(${product.description} додано до кошика!);
  };

  return (
    <div>
      <h2>Зазвичай замовляють</h2>
      <div className="product-list w-100 d-flex flex-row flex-wrap">
        {randomProducts.map((product) => (
          <div key={product.id} className="product card w-25">
            <img src={product.imgSrc} alt={product.altText} className="product-image w-100" />
            <h3 className="product-description">{product.description}</h3>
            <p className="product-price my-5">{product.price} грн.</p>
            <button
              onClick={() => addToCart(product)}
              className="product-link buyer"
            >
              Купити
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

