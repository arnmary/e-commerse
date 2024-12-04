import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function AquaAccsPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 1,
            imgSrc: '/fishFeeder.png',
            altText: 'Feeder',
            description: 'Годівниця автоматична для акваріума Juwel (89000)',
            price: 1650,
            link: '#',
          },
          {
            id: 2,
            imgSrc: '/fishFeeder2.jpg',
            altText: 'Feeder',
            description: 'Автоматична годівниця для риб Sunsun AK-02',
            price: 950,
            link: '#',
          },
          {
            id: 3,
            imgSrc: '/aquaAccs.jpg',
            altText: 'Carpet',
            description: 'Кришка світильник для акваріума Природа LED LIGHT 60х30 ПР (PR241936)',
            price: 3000,
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