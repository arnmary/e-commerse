import React,{ useContext, useState} from 'react'
import data from '../data/bird.json'
import { CartContext } from '../CartContext';


export default function Birdspage() {
  const {cart, setCart} = useContext(CartContext);
  const[filteredCategory, setFilteredCategory]=useState('');
  const{Links} = data;
    const products =[
      {
        id: 13,
        imgSrc: '/birdFood.jpg',
        category: 'birdFood',
        altText: 'Food for bird',
        description: 'Корм для хвилястих папуг Vitakraft "Premium Menu" 1 кг.',
        price: 320,
        link: '#',
      },
      {
        id: 14,
        imgSrc: '/birdFood1.jpg',
        category: 'birdFood',
        altText: 'Food for bird',
        description: 'Корм для амадин Vitakraft «Premium Menu» 500 г',
        price: 200,
        link: '#',
      },
      {
        id: 15,
        imgSrc: '/birdFood2.jpg',
        category: 'birdFood',
        altText: 'Food for bird',
        description: 'Корм для середніх папуг Vitakraft «Premium Menu» 1 кг',
        price: 360,
        link: '#',
      },
      {
        id: 10,
        imgSrc: '/birdCag.jpg',
        category: 'birdCag',
        altText: 'Cage',
        description: 'Клітка для птахів Природа Арка (PR241494)',
        price: 1500,
        link: '#',
      },
      {
        id: 11,
        imgSrc: '/birdCag1.jpg',
        category: 'birdCag',
        altText: 'Cage',
        description: 'Клітка для птахів Fop Anita BIG FUN 53*32*67 см.',
        price: 5000,
        link: '#',
      },
      {
        id: 12,
        imgSrc: '/birdCag2.jpg',
        category: 'birdCag',
        altText: 'Cage',
        description: 'Клітка для птахів Природа Белла 37*25*37 см.',
        price: 1300,
        link: '#',
      },
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
      <h2 className="dogDeckText p-5 inter-500">
         🐾Товари для птахів.
          Кращий вибір для вашого улюбленця в PetsMania! 🐾
      </h2>
      <img src="/parrot.png" alt="Parrot image" className='catImage '/>
    </div>
    <div className="lincsConteiner py-5">
  {Links.map((link,index)=>(
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
    </>
  )
}
