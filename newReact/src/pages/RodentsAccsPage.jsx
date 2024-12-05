import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function RodentsAccsPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 62,
            imgSrc: '/perenoska.jpg',
            altText: 'Carrier',
            description: 'Переноска для гризунів Trixie PICO 30 * 23 * 21 см ',
            price: 530,
            link: '#',
          },
          {
            id: 63,
            imgSrc: '/rodBuild.jpg',
            altText: 'House for rodents',
            description: 'Будинок для хом`яка Природа Мрія',
            price: 220,
            link: '#',
          },
          {
            id: 64,
            imgSrc: '/cage1.jpg',
            altText: 'Cage',
            description: 'Клітка для гризунів Природа «Шиншила» 70 x 40 x 60 см (чорна)',
            price: 3800,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Аксесуари для гризунів</h2>
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