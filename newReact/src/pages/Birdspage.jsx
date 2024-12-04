import React from 'react'
import { Link } from 'react-router-dom'
export default function Birdspage() {
  const links=[
    { value: 'Корм для птахів', link: '/birds/food' },
    { value: 'Клітки та аксесуари для птахів ', link: '/birds/cages' }
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
         🐾Товари для птахів.
          Кращий вибір для вашого улюбленця в PetsMania! 🐾
      </h2>
      <img src="/bird1.png" alt="Parrot image" className='catImage '/>
    </div>
    <div className="lincsConteiner py-5">
  {linkEl}
</div>
     
    </>
  )
}
