import React, {useRef, useContext, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Dogsdeck from '../components/Dogsdeck';
import { CartContext } from '../CartContext';
import data from '../data/dog.json'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../adversSwiper.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Dogspage() {
  const{cart, setCart} = useContext(CartContext);
  const[filteredCategory, setFilteredCategory]=useState('');
  const{sliderImages,Links}= data;
  const linkEl = Links.map((item,index)=>(
   <Link
   key={index}
   className=' mt-5 me-3 py-2 link-secondary link-body-emphasis d-inline-flex text-decoration-none icon-link icon-link-hover rounded btn btn-outline-warning bg bg-indigo'
    to = {item.category}>
    {item.value}
   </Link>
  ));
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }
  const products =[
    {
        id: 59,
        imgSrc: '/dogTreats.jpg',
        category:'dogsTreats',
        altText: 'Treats',
        description: 'Trixie Bonny Mix Кісточки для собак 500g.',
        price: 280,
        link: '#',
      },
      {
        id: 60,
        imgSrc: '/dogTreats1.jpg',
        category:'dogsTreats',
        altText: 'Treats',
        description: 'Trixie Premio Rice Duck Bones Кісточки з качкою та рисом для собак 80g.',
        price: 110,
        link: '#',
      },
      {
        id: 61,
        imgSrc: '/dogTreats2.jpg',
        category:'dogsTreats',
        altText: 'Treats',
        description: 'Trixie Premio Chickies Курячі кісточки з кальцієм для собак',
        price: 150,
        link: '#',
      },
      {
        id: 47,
        imgSrc: '/carrier.jpg',
        category:'dogsCarriers',
        altText: 'Carrier',
        description: 'AnimAll Переноска для котів та собак до 10 кг 58*42*42',
        price: 760,
        link: '#',
      },
      {
        id: 48,
        imgSrc: '/frontalBag.jpg',
        category:'dogsCarriers',
        altText: 'Carrier',
        description: 'Сумка-переноска Trixie Sling фронтальна з поліестеру рожева/чорна до 5кг 50*25*18см',
        price: 1050,
        link: '#',
      },
      {
        id: 49,
        imgSrc: '/dogCarrier.jpg',
        category:'dogsCarriers',
        altText: 'Carrier',
        description: 'Trixie Skudo - універсальна переноска для собак 30*32*49',
        price: 1260,
        link: '#',
      },
      {
        id: 44,
        imgSrc: '/prod1.jpg',
        category:'dogsAccs',
        altText: 'Leash',
        description: 'M-Pets (М-Петс) Liberty Dog Retractable Leash - Повідець-рулетка для собак',
        price: 450,
        link: '#',
      },
      {
        id: 45,
        imgSrc: '/harness.jpg',
        category:'dogsAccs',
        altText: 'Harness',
        description: 'Trixie Silver Reflect Шлея для собак, світловідбиваюча',
        price: 650,
        link: '#',
      },
      {
        id: 46,
        imgSrc: '/collar.jpg',
        category:'dogsAccs',
        altText: 'Collar',
        description: 'AnimAll Нашийник для собак «Хмаринки»',
        price: 190,
        link: '#',
      },
      {
        id: 50,
        imgSrc: '/dogCloth.jpg',
        category:'dogsClothing',
        altText: ' Cloth for dog',
        description: 'Pet Fashion Костюм «Judy» для дівчаток, пудровий xs',
        price: 900,
        link: '#',
      },
      {
        id: 51,
        imgSrc: '/dogsCloth2.jpg',
        category:'dogsClothing',
        altText: 'Cloth pets',
        description: 'Pet Fashion Комбінезон «Cold» для собак, бірюза s ',
        price: 800,
        link: '#',
      },
      {
        id: 52,
        imgSrc: '/dogCloth1.jpg',
        category:'dogsClothing',
        altText: 'Cloth for pets',
        description: 'Collar AiryVest One Курточка для собак, чорна m40',
        price: 780,
        link: '#',
      },
      {
        id: 56,
        imgSrc: '/dogSpray.jpg',
        category:'dogsHyg',
        altText: 'Spray',
        description: 'VetExpert NanoSilver Chlorhexidine Антибактеріальний спрей з наносріблом і хлоргексидином для котів і собак',
        price: 375,
        link: '#',
      },
      {
        id: 57,
        imgSrc: '/dogShamp.jpg',
        category:'dogsHyg',
        altText: 'Shampoo',
        description: 'VetExpert Specialist Shampoo Антибактеріальний протигрибковий шампунь для котів і собак 250ml.',
        price: 650,
        link: '#',
      },
      {
        id: 58,
        imgSrc: '/diapers.jpg',
        category:'dogsHyg',
        altText: 'Diapers',
        description: 'Trixie Пелюшки для собак 40*60см 50шт.',
        price: 650,
        link: '#',
      },
      {
        id: 53,
        imgSrc: '/dogsBowl.jpg',
        category:'dogsDishes',
        altText: 'Bowl',
        description: 'Trixie Eat on Feet Миски для собак, подвійна на підставці 2*200',
        price: 170,
        link: '#',
      },
      {
        id: 54,
        imgSrc: '/dogBowl1.jpg',
        category:'dogsDishes',
        altText: 'Bottle',
        description: 'Trixie Поїлка з мискою для собак 500ml.',
        price: 230,
        link: '#',
      },
      {
        id: 55,
        imgSrc: '/dogBowl2.jpg',
        category:'dogsDishes',
        altText: 'Bowl',
        description: 'Trixie Миска для собак подвійна, біла',
        price: 590,
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
<Dogsdeck></Dogsdeck>
<div className='adversBanner conteiner rounded rounded-2 p-1 my-3'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
          {sliderImages && Array.isArray(sliderImages) ? (
               sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                 <div>
                    <img 
                     src={image} 
                     alt={`Banner ${index + 1}`} 
                   className="banerSwiper" 
                   />
                </div>
             </SwiperSlide>
               ))
                ) : (
               <p>No images available</p>
               )}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  <div className='container my-0'>
    <div className='lincsConteiner py-5' >
       {Links.map((link, index)=>(
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
  
  );
}


