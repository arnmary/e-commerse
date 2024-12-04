import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function DogAccsPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 44,
            imgSrc: '/prod1.jpg',
            altText: 'Leash',
            description: 'M-Pets (М-Петс) Liberty Dog Retractable Leash - Повідець-рулетка для собак',
            price: 450,
            link: '#',
          },
          {
            id: 45,
            imgSrc: '/harness.jpg',
            altText: 'Harness',
            description: 'Trixie Silver Reflect Шлея для собак, світловідбиваюча',
            price: 650,
            link: '#',
          },
          {
            id: 46,
            imgSrc: '/collar.jpg',
            altText: 'Collar',
            description: 'AnimAll Нашийник для собак «Хмаринки»',
            price: 190,
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