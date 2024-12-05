import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function DogCarrPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 47,
            imgSrc: '/carrier.jpg',
            altText: 'Carrier',
            description: 'AnimAll Переноска для котів та собак до 10 кг 58*42*42',
            price: 760,
            link: '#',
          },
          {
            id: 48,
            imgSrc: '/frontalBag.jpg',
            altText: 'Carrier',
            description: 'Сумка-переноска Trixie Sling фронтальна з поліестеру рожева/чорна до 5кг 50*25*18см',
            price: 1050,
            link: '#',
          },
          {
            id: 49,
            imgSrc: '/dogCarrier.jpg',
            altText: 'Carrier',
            description: 'Trixie Skudo - універсальна переноска для собак 30*32*49',
            price: 1260,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Переноски та сумки для собак</h2>
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