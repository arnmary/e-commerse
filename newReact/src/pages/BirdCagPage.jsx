import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function BirdCagPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 10,
            imgSrc: '/birdCag.jpg',
            altText: 'Cage',
            description: 'Клітка для птахів Природа Арка (PR241494)',
            price: 1500,
            link: '#',
          },
          {
            id:11,
            imgSrc: '/birdCag1.jpg',
            altText: 'Cage',
            description: 'Клітка для птахів Fop Anita BIG FUN 53*32*67 см.',
            price: 5000,
            link: '#',
          },
          {
            id: 12,
            imgSrc: '/birdCag2.jpg',
            altText: 'Cage',
            description: 'Клітка для птахів Природа Белла 37*25*37 см.',
            price: 1300,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.description} додано до кошика!`);
      };
  return (
    <>
         <h2>Список товарів</h2>
      <div className="product-list w-100 d-flex flex-row flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="product card w-20">
            <img src={product.imgSrc} alt={product.altText} className="product-image w-100" />
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