import React,{ useState, useContext,} from 'react'
import data from '../data/aqua.json'
import { CartContext } from '../CartContext';
import Delivery from './Delivery';

export default function Aquariumpage() {
   const { cart, setCart } = useContext(CartContext);
   const [filteredCategory, setFilteredCategory] = useState(''); 
   const{Links} = data;
  const products = [
    {
      id: 4,
      imgSrc: '/fishFood.jpg',
      category:'fishFood',
      altText: 'Flakes',
      description: 'Корм для всіх тропічних риб Tetra MIN 500 ml.',
      price: 550 ,
      link: '#',
    },
    {
      id: 5,
      imgSrc: '/fishFood1.jpg',
      category:'fishFood',
      altText: 'Flakes',
      description: 'Корм для всіх акваріумних риб Tetra PRO Energy Crisps 30 ml',
      price: 75 ,
      link: '#',
    },
    {
      id: 6,
      imgSrc: '/fishFood2.jpg',
      category:'fishFood',
      altText: 'Fish food',
      description: 'Корм для Гуппі Tetra Guppy 30 ml.',
      price: 85,
      link: '#',
    },
    {
      id: 1,
      imgSrc: '/fishFeeder.png',
      category: 'aquaAccs',
      altText: 'Feeder',
      description: 'Годівниця автоматична для акваріума Juwel (89000)',
      price: 1650,
      link: '#',
    },
    {
      id: 2,
      imgSrc: '/fishFeeder2.jpg',
      category: 'aquaAccs',
      altText: 'Feeder',
      description: 'Автоматична годівниця для риб Sunsun AK-02',
      price: 950,
      link: '#',
    },
    {
      id: 3,
      imgSrc: '/aquaAccs.jpg',
      category: 'aquaAccs',
      altText: 'Carpet',
      description: 'Кришка світильник для акваріума Природа LED LIGHT 60х30 ПР (PR241936)',
      price: 3000,
      link: '#',
    },
    {
      id: 7,
      imgSrc: '/filtrAqua.jpg',
      category:'aquaHyg',
      altText: 'Filtr',
      description: 'Фільтр внутрішній для акваріума Aquael Pat Mini (107715 /111121)',
      price: 800,
      link: '#',
    },
    {
      id: 8,
      imgSrc: '/filtrAqua1.jpg',
      category:'aquaHyg',
      altText: 'Filtr',
      description: 'Фільтр для акваріума AQUA EL FAN 3 Plus (102370 /3071)',
      price: 1030,
      link: '#',
    },
    {
      id: 9,
      imgSrc: '/filtrAqua2.jpg',
      category:'aquaHyg',
      altText: 'Filtr',
      description: 'Внутрішній фільтр для акваріума Aquael Turbo Filter 1000 (109403)',
      price: 850,
      link: '#',
    }, 
  ];

     const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
    };
    const filteredProducts = filteredCategory
    ? products.filter((product) => product.category === filteredCategory)
    : products;

  return (
    <>
      <div className='dogsPageDeck d-flex flex-row align-items-center justify-content-between w-100 rounded rounded-2'>
      <h2 className="dogDeckText p-5 roboto-500">
         🐾PetsMania: Все для Вашого Акваріума – Якість, Яку Обирають Риби 🐾
      </h2>
      <img src="/fish1.png" alt="Fish image" className='catImage '/>
    </div>
    <div className="conteiner my-0">
<div className="lincsConteiner py-5">
{Links.map((link,index)=>(
     <button
     key={index}
     className="btn btn-outline-warning text-black m-2"
     onClick={() => setFilteredCategory(link.category)}
   >
     {link.value}
   </button>
  ))}
    <button
            className="btn btn-outline-warning text-dark my-3"
            onClick={() => setFilteredCategory('')}
          >
            Показати всі
          </button>
</div>
<h2 className="text-start inter-500  py-3">Товари</h2>
        <div className="product-list w-100 d-flex flex-row flex-wrap">
           {
         filteredProducts.map((product) => (
            <div key={product.id} className="product card w-20">
              <img src={product.imgSrc} alt={product.description} className="product-image w-100" />
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
      </div>
        <Delivery />
    </>
  );
}
