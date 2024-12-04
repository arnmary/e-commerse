import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
export default function CatsCarrierPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 29,
            imgSrc: '/carrier.jpg',
            altText: 'Carrier',
            description: 'AnimAll Переноска для котів та собак до 6 кг',
            price: 500,
            link: '#',
          },
          {
            id: 30,
            imgSrc: '/frontalBag.jpg',
            altText: 'Carrier',
            description: 'Сумка-переноска Trixie Sling фронтальна з поліестеру рожева/чорна до 5кг 50*25*18см',
            price: 1050,
            link: '#',
          },
          {
            id: 31,
            imgSrc: '/carrier1.jpg',
            altText: 'Carrier',
            description: 'AnimAll Переноска для котів та собак до 10 кг 32*38*42',
            price: 750,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.description} додано до кошика!`);
      };
  return (
    <>
         <h2 className='catalogTitle text-lg-start inter-500 text-sm-center fs-3'>Сумки та переноски для котів</h2>
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
