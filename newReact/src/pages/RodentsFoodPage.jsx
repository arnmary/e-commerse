import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function RodentsFoodPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 65,
            imgSrc: '/crispy.jpg',
            altText: 'Food for rodents',
            description: 'Versele-Laga Crispy Muesli Корм для кроликів 1 кг.',
            price: 220,
            link: '#',
          },
          {
            id: 66,
            imgSrc: '/seno.jpg',
            altText: 'Sand',
            description: 'Padovan Fieno-Hay сіно для гризунів 20л.',
            price: 250,
            link: '#',
          },
          {
            id: 67,
            imgSrc: '/rodFood.jpg',
            altText: 'Sand',
            description: 'Versele-Laga Crispy Pellets Корм для шиншил і дегу',
            price: 300,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Корм для гризунів</h2>
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