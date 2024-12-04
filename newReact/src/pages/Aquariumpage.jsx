import React from 'react'
import { Link } from 'react-router-dom'

export default function Aquariumpage() {
  const links=[
    { value: 'Корм для риб', link: '/aquarium/food' },
    { value: 'Засоби для чищення акваріумів', link: '/aquarium/hygiene' },
    { value: 'Аксесуари для акваріумів ', link: '/aquarium/accsesories' },
    
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
         🐾PetsMania: Все для Вашого Акваріума – Якість, Яку Обирають Риби 🐾
      </h2>
      <img src="/fish1.png" alt="Fish image" className='catImage '/>
    </div>
    <div className="conteiner my-0">
<div className="lincsConteiner py-5">
  {linkEl}
</div>
    </div>
     
    </>
  )
}
