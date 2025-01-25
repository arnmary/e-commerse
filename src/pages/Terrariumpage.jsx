import React from 'react';
import data from '../data/terra.json'
import Delivery from './Delivery';
import Products from '../components/Products';

export default function Terrariumpage() {
  const { Links, products } = data;


  return (
    <>
      <div className='dogsPageDeck d-flex flex-row align-items-center justify-content-between w-100 rounded rounded-2'>
        <h2 className="dogDeckText p-5 p-sm-1 roboto-500">
          🐾Все для тераріумів – якісні товари для ваших улюбленців | PetsMania 🐾
        </h2>
        <img src="/lizard2.png" alt="Lizard image" className='catImage '/>
      </div>
        <Products Links={Links} products={products} />
        <Delivery />
    </>
  );
}
