import React,{useContext} from 'react'
import { CartContext } from '../CartContext'

export default function DogHygPage() {
    const { cart, setCart } = useContext(CartContext);
    const products =[
        {
            id: 56,
            imgSrc: '/dogSpray.jpg',
            altText: 'Spray',
            description: 'VetExpert NanoSilver Chlorhexidine Антибактеріальний спрей з наносріблом і хлоргексидином для котів і собак',
            price: 375,
            link: '#',
          },
          {
            id: 57,
            imgSrc: '/dogShamp.jpg',
            altText: 'Shampoo',
            description: 'VetExpert Specialist Shampoo Антибактеріальний протигрибковий шампунь для котів і собак 250ml.',
            price: 650,
            link: '#',
          },
          {
            id: 58,
            imgSrc: '/diapers.jpg',
            altText: 'Diapers',
            description: 'Trixie Пелюшки для собак 40*60см 50шт.',
            price: 650,
            link: '#',
          },
    ];
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
  return (
    <>
         <h2 className='text-start inter-500'>Товари для гігієни собак</h2>
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