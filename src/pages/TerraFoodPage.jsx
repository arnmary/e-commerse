import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function TerraFoodPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 74,
            imgSrc: '/carrier.jpg',
            altText: 'Carrier',
            description: 'AnimAll Переноска для котів та собак до 10 кг',
            price: '500 грн.',
            link: '#',
          },
          {
            id: 75,
            imgSrc: '/frontalBag.jpg',
            altText: 'Carrier',
            description: 'Сумка-переноска Trixie Sling фронтальна з поліестеру рожева/чорна до 5кг 50*25*18см',
            price: '1050 грн.',
            link: '#',
          },
          {
            id: 76,
            imgSrc: '/carrier.jpg',
            altText: 'Carrier',
            description: 'AnimAll Переноска для котів та собак до 10 кг',
            price: '500 грн.',
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start  inter-500'>Корм для тераріумів</h2>
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