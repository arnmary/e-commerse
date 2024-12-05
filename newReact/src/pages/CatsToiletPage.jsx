import React,{useContext} from 'react'
import { CartContext } from '../CartContext';
export default function CatsToiletPage() {
    const { cart, setCart } = useContext(CartContext); 
    const products =[
        {
            id: 32,
            imgSrc: '/toilet.jpg',
            altText: 'Carrier',
            description: 'Туалет під наповнювач АнімАлл з сіткою 57x39x23 см',
            price: 1025,
            link: '#',
          },
          {
            id: 33,
            imgSrc: '/product14.jpg',
            altText: 'Carrier',
            description: 'Туалет під наповнювач АнімАлл з лопаткою 58x42x24 см',
            price:650,
            link: '#',
          },
          {
            id: 34,
            imgSrc: '/product15.jpg',
            altText: 'Carrier',
            description: 'Туалет для кішок Trixie з сіткою «Berto» 39 x 22 x 59 см',
            price: 760,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };

  return (
    <>
      
      <h2 className='text-start inter-500'>Туалети та наповнювачі туалетів для котів</h2>
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
