import React from 'react';
import data from '../data/bird.json';
import Products from '../components/Products';
import Slider from '../components/Slider';

export default function Birdspage() {
  const { Links, products, sliderImages } = data;

  return (
    <>
      <div className='birdsPageDeck dogsPageDeck d-flex flex-row align-items-center justify-content-between w-100 rounded rounded-2'>
        <h2 className="birdDeckText dogDeckText p-5 p-sm-1 inter-500">
          🐾 Товари для птахів.
          Кращий вибір для вашого улюбленця в PetsMania! 🐾
        </h2>
        <img src="/parrot.png" alt="Parrot image" className='parrotImage ' />
      </div>
      <Slider sliderImages={sliderImages}/>
      <Products Links={Links} products={products} />
    </>
  );
}

