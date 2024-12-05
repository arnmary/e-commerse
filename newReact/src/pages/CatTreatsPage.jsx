import React,{useContext} from 'react';
import { CartContext } from '../CartContext';

export default function CatTreatsPage() {
  const{cart, setCart}=useContext(CartContext)
    const products =[
        {
            id: 35,
            imgSrc: '/product1.jpg',
            altText: 'Snecs',
            description: 'Mediterranean Natural Serrano Snacks Cat Anti Hairball Salmon & Tuna',
            price: 70,
            link: '#',
          },
          {
            id: 36,
            imgSrc: '/product2.jpg',
            altText: '',
            description: 'Лизун вітамінізований AnimAll TastyVit з мататабі 30 г',
            price: 150,
            link: '#',
          },
          {
            id: 37,
            imgSrc: '/product3.jpg',
            altText: 'Cream',
            description: 'AnimAll VetLine Malt фітопаста для виведення шерсті для котів 100 мл 🐾 AmigoVet',
            price: 225,
            link: '#',
          },
          {
            id: 38,
            imgSrc: '/product4.jpg',
            altText: 'Snecs',
            description: 'Кремові ласощі для котів Trixie Creamy Snack біла риба (5X14)',
            price: 105,
            link: '#',
          },
          {
            id: 39,
            imgSrc: '/product5.jpg',
            altText: 'Snecs',
            description: 'Кремові ласощі для котів Trixie Creamy Snack курка (5X14)',
            price: 105,
            link: '#',
          },
          {
            id: 40,
            imgSrc: '/product6.jpg',
            altText: 'Snecs',
            description: 'Кремові ласощі для котів Trixie Creamy Snack креветки (5X14)',
            price: 105,
            link: '#',
          },
          {
            id: 41,
            imgSrc: '/product7.jpg',
            altText: 'Snecs',
            description: 'Печиво для кішок “Cookies” з лососем та котячою м’ятою, 50 г',
            price: 75,
            link: '#',
          },
          {
            id:42,
            imgSrc: '/product8.jpg',
            altText: 'Snecs',
            description: 'Nutri Pockets для котів Морський мікс 150г',
            price: 205,
            link: '#',
          },
          {
            id: 43,
            imgSrc: '/product9.jpg',
            altText: 'Snecs',
            description: 'Nutri Pockets для кішок Лосось+Омега 3+6 60г',
            price: 120,
            link: '#',
          },
    ];
    const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
    };
  return (
    <>
       <h2 className='catalogTitle text-lg-start inter-500 text-sm-center fs-3'>Ласощі для котів</h2>
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
