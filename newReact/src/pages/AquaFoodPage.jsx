import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function AquaFoodPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 4,
            imgSrc: '/fishFood.jpg',
            altText: 'Flakes',
            description: 'Корм для всіх тропічних риб Tetra MIN 500 ml.',
            price: 550 ,
            link: '#',
          },
          {
            id: 5,
            imgSrc: '/fishFood1.jpg',
            altText: 'Flakes',
            description: 'Корм для всіх акваріумних риб Tetra PRO Energy Crisps 30 ml',
            price: 75 ,
            link: '#',
          },
          {
            id: 6,
            imgSrc: '/fishFood2.jpg',
            altText: 'Carrier',
            description: 'Корм для Гуппі Tetra Guppy 30 ml.',
            price: 85,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        // alert(`${product.description} додано до кошика!`);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Корм для риб</h2>
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