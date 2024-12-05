import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function TerraAccsPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 71,
            imgSrc: '/mox.jpg',
            altText: 'Filler',
            description: 'Trixie Наповнювач натуральний мох для тераріуму 200 гр.',
            price: 300,
            link: '#',
          },
          {
            id: 72,
            imgSrc: '/trixieFiller.jpg',
            altText: 'Filler',
            description: 'Trixie наповнювач-кокосова стружка для тераріуму 4.5 л.',
            price: 120,
            link: '#',
          },
          {
            id: 73,
            imgSrc: '/filler.jpg',
            altText: 'Filler',
            description: 'Trixie Наповнювач букова кора для тераріуму 10л.',
            price: 500,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Товари для тераріумів</h2>
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