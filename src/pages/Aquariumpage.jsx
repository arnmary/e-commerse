import React from 'react';
import data from '../data/aqua.json';
import Delivery from './Delivery';
import Products from '../components/Products';

export default function Aquariumpage() {
  const { Links, products } = data;

  return (
    <>
      <div className="dogsPageDeck d-flex flex-row align-items-center justify-content-between w-100 rounded rounded-2">
        <h2 className="dogDeckText p-5 p-sm-1 roboto-500">
          🐾PetsMania: Все для Вашого Акваріума – Якість, Яку Обирають Риби 🐾
        </h2>
        <img src="/fish1.png" alt="Fish image" className="catImage" />
      </div>
      <Products Links={Links} products={products} />
      <Delivery />
    </>
  );
}

