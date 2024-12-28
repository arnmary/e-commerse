import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import Delivery from './Delivery';

export default function Terrariumpage() {
  const { cart, setCart } = useContext(CartContext);
  const [filteredCategory, setFilteredCategory] = useState('');


  const links = [
    { value: 'Аксесуари для терраріумів ', category: 'terraAccs' },
  ];

  const linkEl = links.map((item, index) => (
    <Link
      key={index}
      className='mt-5 me-3 py-2 linc-secondary link-body-emphasis d-inline-flex text-decoration-none icon-link icon-link-hover rounded btn btn-outline-warning bg bg-indigo'
      to={item.link}>
      {item.value}
    </Link>
  ));
const products =[
  { id: 71, imgSrc: '/mox.jpg', category: 'terraAccs', altText: 'Filler', description: 'Trixie Наповнювач натуральний мох для тераріуму 200 гр.', price: 300, link: '#' },
  { id: 72, imgSrc: '/trixieFiller.jpg', category: 'terraAccs', altText: 'Filler', description: 'Trixie наповнювач-кокосова стружка для тераріуму 4.5 л.', price: 120, link: '#' },
  { id: 73, imgSrc: '/filler.jpg', category: 'terraAccs', altText: 'Filler', description: 'Trixie Наповнювач букова кора для тераріуму 10л.', price: 500, link: '#' },
];
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const filteredProducts = filteredCategory
    ? products.filter((product) => product.category === filteredCategory)
    : products;

  return (
    <>
      <div className='dogsPageDeck d-flex flex-row align-items-center justify-content-between w-100 rounded rounded-2'>
        <h2 className="dogDeckText p-5 roboto-500">
          🐾Все для тераріумів – якісні товари для ваших улюбленців | PetsMania 🐾
        </h2>
        <img src="/lizard2.png" alt="Lizard image" className='catImage '/>
      </div>
      <div className="conteiner my-0">
        <div className="lincsConteiner py-5">
          {links.map((link, index) => (
            <button
              key={index}
              className="btn btn-outline-warning text-black m-2"
              onClick={() => setFilteredCategory(link.category)}
            >
              {link.value}
            </button>
          ))}
          <button
            className="btn btn-outline-warning text-dark my-3"
            onClick={() => setFilteredCategory('')}
          >
            Показати всі
          </button>
        </div>
        <h2 className="text-start inter-500  py-3">Товари</h2>
        <div className="product-list w-100 d-flex flex-row flex-wrap">
           {
         filteredProducts.map((product) => (
            <div key={product.id} className="product card w-20">
              <img src={product.imgSrc} alt={product.description} className="product-image w-100" />
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
      <Delivery />
    </>
  );
}
