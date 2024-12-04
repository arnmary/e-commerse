import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function DogDishPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 53,
            imgSrc: '/dogsBowl.jpg',
            altText: 'Bowl',
            description: 'Trixie Eat on Feet Миски для собак, подвійна на підставці 2*200',
            price: 170,
            link: '#',
          },
          {
            id: 54,
            imgSrc: '/dogBowl1.jpg',
            altText: 'Bottle',
            description: 'Trixie Поїлка з мискою для собак 500ml.',
            price: 230,
            link: '#',
          },
          {
            id: 55,
            imgSrc: '/dogBowl2.jpg',
            altText: 'Bowl',
            description: 'Trixie Миска для собак подвійна, біла',
            price: 590,
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