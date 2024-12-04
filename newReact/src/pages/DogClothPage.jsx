import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function DogClothPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 50,
            imgSrc: '/dogCloth.jpg',
            altText: ' Cloth for dog',
            description: 'Pet Fashion Костюм «Judy» для дівчаток, пудровий xs',
            price: 900,
            link: '#',
          },
          {
            id: 51,
            imgSrc: '/dogsCloth2.jpg',
            altText: 'Cloth pets',
            description: 'Pet Fashion Комбінезон «Cold» для собак, бірюза s ',
            price: 800,
            link: '#',
          },
          {
            id: 52,
            imgSrc: '/dogCloth1.jpg',
            altText: 'Cloth for pets',
            description: 'Collar AiryVest One Курточка для собак, чорна m40',
            price: 780,
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