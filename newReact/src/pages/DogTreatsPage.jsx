import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function DogTreatsPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 59,
            imgSrc: '/dogTreats.jpg',
            altText: 'Treats',
            description: 'Trixie Bonny Mix Кісточки для собак 500g.',
            price: 280,
            link: '#',
          },
          {
            id: 60,
            imgSrc: '/dogTreats1.jpg',
            altText: 'Treats',
            description: 'Trixie Premio Rice Duck Bones Кісточки з качкою та рисом для собак 80g.',
            price: 110,
            link: '#',
          },
          {
            id: 61,
            imgSrc: '/dogTreats2.jpg',
            altText: 'Treats',
            description: 'Trixie Premio Chickies Курячі кісточки з кальцієм для собак',
            price: 150,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Ласощі для собак</h2>
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