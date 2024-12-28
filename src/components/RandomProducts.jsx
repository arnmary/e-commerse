
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';

export default function RandomProducts() {
  const { cart, setCart } = useContext(CartContext);
  const products = [
    {
      id: 101,
      imgSrc: '/prod1.jpg',
      altText: 'Leash',
      description: 'M-Pets (М-Петс) Liberty Dog Retractable Leash - Повідець-рулетка для собак',
      price: 504,
      link: '#',
    },
    {
      id:107,
      imgSrc: '/glove.jpg',
      altText: 'Glove',
      description: 'AnimAll Groom Рукавичка для вичісування шерсті для тварин, блакитна',
      price: 195,
      link: '#',
    },
    {
      id: 103,
      imgSrc: '/prod2.jpg',
      altText: 'Toy',
      description: 'Kong Dotz, Ø 15 см,  Іграшка для собак',
      price: 800,
      link: '#',
    },
    {
      id: 105,
      imgSrc: '/dogShamp.jpg',
      altText: 'Shampoo',
      description: 'VetExpert Specialist Shampoo Антибактеріальний протигрибковий шампунь для котів і собак 250ml.',
      price: 650,
      link: '#',
    },
    {
      id:42,
      imgSrc: '/product8.jpg',
      altText: 'Snecs',
      description: 'Nutri Pockets для котів Морський мікс 150г',
      price: 205,
      link: '#',
    },
    {
      id: 20,
      imgSrc: '/drinking.jpg',
      altText: 'Drinking Bowl',
      description: 'Trixie Flower Поїлка-фонтан для котів, біла',
      price: 1300,
      link: '#',
    },
    {
      id: 27,
      imgSrc: '/catBowl7.jpg',
      altText: 'Bowl',
      description: 'Trixie Миска для котів коротконосих порід, керамічна 300 ml.',
      price: 230,
      link: '#',
    },

  ];

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
    <div>
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
    </div>
  );
}

