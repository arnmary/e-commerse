import React,{useContext} from 'react';
import { CartContext } from '../CartContext';

export default function CatDishesPage() {
  const{cart, setCart}=useContext(CartContext)
    const products =[
        {
            id: 20,
            imgSrc: '/drinking.jpg',
            altText: 'Drinking Bowl',
            description: 'Trixie Flower Поїлка-фонтан для котів, біла',
            price: 1300,
            link: '#',
          },
          {
            id: 21,
            imgSrc: '/catBowl.jpg',
            altText: 'Bowl',
            description: 'Irak Plastik Миска з контейнером для води/корму, біла',
            price: 190,
            link: '#',
          },
          {
            id: 22,
            imgSrc: '/catBowl2.jpg',
            altText: 'Bowl',
            description: 'Trixie Jimmy Миска для котів та собак на гумовій основі, керамічна ',
            price: 340,
            link: '#',
          },
          {
            id: 23,
            imgSrc: '/catBowl3.jpg',
            altText: 'Bowl',
            description: 'Trixie Mimi Миска для котів, керамічна',
            price: 190,
            link: '#',
          },
          {
            id: 24,
            imgSrc: '/catBowl4.jpg',
            altText: 'Bowl',
            description: 'Trixie Металева миска на гумовій основі, з рибками 200ml.',
            price: 90,
            link: '#',
          },
          {
            id: 25,
            imgSrc: '/catBowl5.jpg',
            altText: 'Bowl',
            description: 'Trixie Pillars Килимок для котів Повільне годування',
            price: 755,
            link: '#',
          },
          {
            id: 26,
            imgSrc: '/catBowl6.jpg',
            altText: 'Bowl',
            description: 'Trixie Миска для котів пласка зелена 0.2 l.',
            price: 165,
            link: '#',
          },
          {
            id: 27,
            imgSrc: '/catBowl7.jpg',
            altText: 'Bowl',
            description: 'Trixie Миска для котів коротконосих порід, керамічна 300 ml.',
            price: 230,
            link: '#',
          },
          {
            id: 28,
            imgSrc: '/catBowl8.jpg',
            altText: 'Bowl',
            description: 'Trixie Миска для котів Повільне годування 15*15 см 0.35l.',
            price: 230,
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