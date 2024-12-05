import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function RodentsHygPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 68,
            imgSrc: '/napoln.jpg',
            altText: 'Sand',
            description: 'Наповнювач для тварин SANI PET універсальний, 2,5 кг лимон ',
            price: 180,
            link: '#',
          },
          {
            id: 69,
            imgSrc: '/kupalka.jpg',
            altText: 'Bath',
            description: 'Купалка для шиншили Trixie ',
            price: 420,
            link: '#',
          },
          {
            id: 70,
            imgSrc: '/sand.jpg',
            altText: 'Sand',
            description: 'WestVet Вулканічний пил для купання та вичісування шерсті «Ніжність» 1 kg.',
            price: 160,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Товари для гігієни гризунів</h2>
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