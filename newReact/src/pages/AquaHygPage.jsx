import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function AquaHygPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 7,
            imgSrc: '/filtrAqua.jpg',
            altText: 'Filtr',
            description: 'Фільтр внутрішній для акваріума Aquael Pat Mini (107715 /111121)',
            price: 800,
            link: '#',
          },
          {
            id: 8,
            imgSrc: '/filtrAqua1.jpg',
            altText: 'Filtr',
            description: 'Фільтр для акваріума AQUA EL FAN 3 Plus (102370 /3071)',
            price: 1030,
            link: '#',
          },
          {
            id: 9,
            imgSrc: '/filtrAqua2.jpg',
            altText: 'Filtr',
            description: 'Внутрішній фільтр для акваріума Aquael Turbo Filter 1000 (109403)',
            price: 850,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        // alert(`${product.description} додано до кошика!`);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Товари для підтримки чистоти в акваріумах</h2>
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