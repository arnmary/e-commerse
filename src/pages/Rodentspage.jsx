import React from 'react'
import data from '../data/rod.json'
import Products from '../components/Products';
import Delivery from './Delivery';

export default function Rodentspage() {
   const{Links,products}=data;
   
    
  return (
    <>
      <div className='dogsPageDeck d-flex flex-row align-items-center justify-content-between w-100 rounded rounded-2'>
      <h2 className="dogDeckText p-5 roboto-500">
         🐾Все для щастя вашого гризуна <br/>
          в PetsMania 🐾
      </h2>
      <img src="/chinchilla.png" alt="Chinchilla image" className='catImage '/>
    </div>
      <Products Links={Links} products={products} />
       <Delivery />
    </>
  )
}
