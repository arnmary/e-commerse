import React from 'react'
import { Link } from 'react-router-dom'
import RandomProducts from '../components/RandomProducts';
export default function Rodentspage() {
  const links=[
    { value: 'Корм для гризунів', link: '/rodents/food' },
    { value: 'Гігієна гризунів', link: '/rodents/hygiene' },
    { value: 'Клітки та аксесуари для гризунів', link: '/rodents/accessories' },
  ]
  const linkEl = links.map((item,index)=>(
    <Link
    key={index}
    className=' mt-5 me-3 py-2 linc-secondary link-body-emphasis d-inline-flex text-decoration-none icon-link icon-link-hover rounded btn btn-outline-warning bg bg-indigo'
     to = {item.link}>
     {item.value}
    </Link>
   ));
  return (
    <>
      <div className='dogsPageDeck d-flex flex-row align-items-center justify-content-between w-100 rounded rounded-2'>
      <h2 className="dogDeckText p-5 roboto-500">
         🐾Все для щастя вашого гризуна <br/>
          в PetsMania 🐾
      </h2>
      <img src="/chinchilla.png" alt="Chinchilla image" className='catImage '/>
    </div>
    <div className="conteiner my-0">
<div className="lincsConteiner py-5">
  {linkEl}
</div>
    </div>
    <RandomProducts></RandomProducts>
    
    </>
  )
}
