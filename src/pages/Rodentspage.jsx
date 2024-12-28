import React,{useState, useContext} from 'react'
import data from '../data/rod.json'
import { CartContext } from '../CartContext';

export default function Rodentspage() {
    const {cart, setCart} = useContext(CartContext);
    const[filteredCategory, setFilteredCategory]=useState('');
   const{Links}=data;
        const products =[
          {
              id: 65,
              imgSrc: '/crispy.jpg',
              category:'rodentsFood',
              altText: 'Food for rodents',
              description: 'Versele-Laga Crispy Muesli Корм для кроликів 1 кг.',
              price: 220,
              link: '#',
            },
            {
              id: 66,
              imgSrc: '/seno.jpg',
              category:'rodentsFood',
              altText: 'Hay for rodents',
              description: 'Padovan Fieno-Hay сіно для гризунів 20л.',
              price: 250,
              link: '#',
            },
            {
              id: 67,
              imgSrc: '/rodFood.jpg',
              category:'rodentsFood',
              altText: 'Chinchillas food',
              description: 'Versele-Laga Crispy Pellets Корм для шиншил і дегу',
              price: 300,
              link: '#',
            },
            {
              id: 62,
              imgSrc: '/perenoska.jpg',
              category:'rodentsAccs',
              altText: 'Carrier',
              description: 'Переноска для гризунів Trixie PICO 30 * 23 * 21 см ',
              price: 530,
              link: '#',
            },
            {
              id: 63,
              imgSrc: '/rodBuild.jpg',
              category:'rodentsAccs',
              altText: 'House for rodents',
              description: 'Будинок для хом`яка Природа Мрія',
              price: 220,
              link: '#',
            },
            {
              id: 64,
              imgSrc: '/cage1.jpg',
              category:'rodentsAccs',
              altText: 'Cage',
              description: 'Клітка для гризунів Природа «Шиншила» 70 x 40 x 60 см (чорна)',
              price: 3800,
              link: '#',
            },
            {
              id: 68,
              imgSrc: '/napoln.jpg',
              category:'rodentsHyg',
              altText: 'Sand',
              description: 'Наповнювач для тварин SANI PET універсальний, 2,5 кг лимон ',
              price: 180,
              link: '#',
            },
            {
              id: 69,
              imgSrc: '/kupalka.jpg',
              category:'rodentsHyg',
              altText: 'Bath',
              description: 'Купалка для шиншили Trixie ',
              price: 420,
              link: '#',
            },
            {
              id: 70,
              imgSrc: '/sand.jpg',
              category:'rodentsHyg',
              altText: 'Sand',
              description: 'WestVet Вулканічний пил для купання та вичісування шерсті «Ніжність» 1 kg.',
              price: 160,
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
         🐾Все для щастя вашого гризуна <br/>
          в PetsMania 🐾
      </h2>
      <img src="/chinchilla.png" alt="Chinchilla image" className='catImage '/>
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
          {filteredProducts.map((product) => (
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
    </>
  )
}
