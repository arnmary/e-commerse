import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function BirdFoodPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 13,
            imgSrc: '/birdFood.jpg',
            altText: 'Food for bird',
            description: 'Корм для хвилястих папуг Vitakraft "Premium Menu" 1 кг.' ,
            price: 320,
            link: '#',
          },
          {
            id: 14,
            imgSrc: '/birdFood1.jpg',
            altText: 'Food for bird',
            description: 'Корм для амадин Vitakraft «Premium Menu» 500 г',
            price: 200,
            link: '#',
          },
          {
            id: 15,
            imgSrc: '/birdFood2.jpg',
            altText: 'Food for bird',
            description: 'Корм для середніх папуг Vitakraft «Premium Menu» 1 кг',
            price: 360,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'> Корм для птахів</h2>
      <div className="product-list w-100 d-flex flex-row flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="product card w-20">
            <img src={product.imgSrc} alt={product.altText} className="product-image w-100" />
            <h3 className="product-description">{product.description}</h3>
            <p className="product-price my-5">{product.price} грн.</p>
            <button
              onClick={() => addToCart(product)}
              className="product-link buyer inter-400"
            >
              Купити
            </button>
          </div>
        ))}
      </div>
    </>
    
  )
}