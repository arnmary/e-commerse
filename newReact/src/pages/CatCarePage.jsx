import React,{useContext} from 'react';
import { CartContext } from '../CartContext';

export default function CatCarePage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 16,
            imgSrc: '/clipper.jpg',
            altText: 'lipper',
            description: 'Trixie Luxe Кігтеріз для домашніх тварин, маленький',
            price: 290,
            link: '#',
          },
          {
            id:17,
            imgSrc: '/glove.jpg',
            altText: 'Glove',
            description: 'AnimAll Groom Рукавичка для вичісування шерсті для тварин, блакитна',
            price: 195,
            link: '#',
          },
          {
            id: 18,
            imgSrc: '/ointment.jpg',
            altText: 'Ointment',
            description: 'VetExpert Paw Protection Захисна мазь для подушечок лап котів і собак 75 ml.',
            price: 360,
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