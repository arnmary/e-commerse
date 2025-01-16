import React from 'react'
import Dogsdeck from '../components/Dogsdeck';
import data from '../data/dog.json'
import Products from '../components/Products';
import Slider from '../components/Slider';
import Delivery from './Delivery';

export default function Dogspage() {
  const{sliderImages, Links, products}= data;

  return (
<>
       <Dogsdeck/>
       <Slider sliderImages={sliderImages}/>
        <Products Links={Links} products={products} />
       <Delivery />
</>
  
  );
}


