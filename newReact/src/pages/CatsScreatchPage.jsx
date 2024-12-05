
import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function CatsScreatchPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 76,
            imgSrc: '/trixyScratch.jpg',
            altText: 'Screatcher',
            description: 'Trixie Кігтеточка(дряпка) Mimi Wave з картону 50*9*23 см.',
            price: 400,
            link: '#',
          },
          {
            id: 77,
            imgSrc: '/trixyScratch2.jpg',
            altText: 'Screatcher',
            description: 'Trixie Кігтеточка(дряпка) Espejo',
            price: 1400,
            link: '#',
          },
          {
            id: 78,
            imgSrc: '/dryapka.jpg',
            altText: 'Screatcher',
            description: 'Пухнистики Кігтеточка-драпак з полицею і напівтунелем',
            price: 750,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Кігтеточкиб(дряпки) для котів</h2>
      <div className="product-list w-100 d-flex flex-row flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="product card w-20">
            <img src={product.imgSrc} alt={product.altText} className="product-image w-100" />
            <h3 className="product-description">{product.description}</h3>
            <p className="product-price my-5">{product.price}</p>
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
