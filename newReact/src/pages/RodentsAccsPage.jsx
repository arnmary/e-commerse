import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function RodentsAccsPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 62,
            imgSrc: '/cage1.jpg',
            altText: 'Cage',
            description: 'Клітка для гризунів Природа «Шиншила» 70 x 40 x 60 см (чорна)',
            price: 3800,
            link: '#',
          },
          {
            id: 63,
            imgSrc: '/cage1.jpg',
            altText: 'Cage',
            description: 'Клітка для гризунів Природа «Шиншила» 70 x 40 x 60 см (чорна)',
            price: 3800,
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