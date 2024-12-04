import React from 'react'
import { Link } from 'react-router-dom';
export default function Terrariumpage() {
  const links=[
    { value: 'Корм для рептилій', link: '/terrarium/food' },
    { value: 'Аксесуари для терраріумів ', link: '/terrarium/accsesories' },
    
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
         🐾Все для тераріумів – якісні товари для ваших улюбленців | PetsMania 🐾
      </h2>
      <img src="/lizard2.png" alt="Lizard image" className='catImage '/>
    </div>
    <div className="conteiner my-0">
<div className="lincsConteiner py-5">
  {linkEl}
</div>
    </div>
     
    </>
  )
}
