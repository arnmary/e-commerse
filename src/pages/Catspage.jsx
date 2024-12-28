import React, {useRef, useContext, useState} from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Catsdeck from "../components/Catsdeck";
import { Swiper, SwiperSlide } from 'swiper/react';
import { CartContext } from '../CartContext';
import data from '../data/cat.json';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../adversSwiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export function Catspage() {
   const { cart, setCart } = useContext(CartContext);
   const [filteredCategory, setFilteredCategory] = useState(''); 

 const{sliderImages,Links}= data;
  const linkEl = Links.map((item,index)=>(
    <Link
    key={index}
    className=' mt-5 me-3 py-2 linc-secondary link-body-emphasis d-inline-flex text-decoration-none icon-link icon-link-hover rounded btn btn-outline-warning bg bg-indigo'
     to = {item.category}>
     {item.value}
    </Link>
  ));
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if( progressCircle.current){
        progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
  if( progressContent.current){
     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }
   
  }
  const products =[
    {
      id: 20,
      imgSrc: '/drinking.jpg',
      category:'catsDishes',
      altText: 'Drinking Bowl',
      description: 'Trixie Flower Поїлка-фонтан для котів, біла',
      price: 1300,
      link: '#',
    },
    {
      id: 21,
      imgSrc: '/catBowl.jpg',
      category:'catsDishes',
      altText: 'Bowl',
      description: 'Irak Plastik Миска з контейнером для води/корму, біла',
      price: 190,
      link: '#',
    },
    {
      id: 22,
      imgSrc: '/catBowl2.jpg',
      category:'catsDishes',
      altText: 'Bowl',
      description: 'Trixie Jimmy Миска для котів та собак на гумовій основі, керамічна ',
      price: 340,
      link: '#',
    },
    {
      id: 29,
      imgSrc: '/carrier.jpg',
      category:'catCarriers',
      altText: 'Carrier',
      description: 'AnimAll Переноска для котів та собак до 6 кг',
      price: 500,
      link: '#',
    },
    {
      id: 30,
      imgSrc: '/frontalBag.jpg',
      category:'catCarriers',
      altText: 'Carrier',
      description: 'Сумка-переноска Trixie Sling фронтальна з поліестеру рожева/чорна до 5кг 50*25*18см',
      price: 1050,
      link: '#',
    },
    {
      id: 76,
      imgSrc: '/trixyScratch.jpg',
      category:'catsScratches',
      altText: 'Screatcher',
      description: 'Trixie Кігтеточка(дряпка) Mimi Wave з картону 50*9*23 см.',
      price: 400,
      link: '#',
    },
    {
      id: 77,
      imgSrc: '/trixyScratch2.jpg',
      category:'catsScratches',
      altText: 'Screatcher',
      description: 'Trixie Кігтеточка(дряпка) Espejo',
      price: 1400,
      link: '#',
    },
    {
      id: 78,
      imgSrc: '/dryapka.jpg',
      category:'catsScratches',
      altText: 'Screatcher',
      description: 'Пухнистики Кігтеточка-драпак з полицею і напівтунелем',
      price: 750,
      link: '#',
    },
    {
      id: 31,
      imgSrc: '/carrier1.jpg',
      category:'catCarriers',
      altText: 'Carrier',
      description: 'AnimAll Переноска для котів та собак до 10 кг 32*38*42',
      price: 750,
      link: '#',
    },
    {
      id: 23,
      imgSrc: '/catBowl3.jpg',
      category:'catsDishes',
      altText: 'Bowl',
      description: 'Trixie Mimi Миска для котів, керамічна',
      price: 190,
      link: '#',
    },
    {
      id: 24,
      imgSrc: '/catBowl4.jpg',
      category:'catsDishes',
      altText: 'Bowl',
      description: 'Trixie Металева миска на гумовій основі, з рибками 200ml.',
      price: 90,
      link: '#',
    },
    {
      id: 25,
      imgSrc: '/catBowl5.jpg',
      category:'catsDishes',
      altText: 'Bowl',
      description: 'Trixie Pillars Килимок для котів Повільне годування',
      price: 755,
      link: '#',
    },
    {
      id: 26,
      imgSrc: '/catBowl6.jpg',
      category:'catsDishes',
      altText: 'Bowl',
      description: 'Trixie Миска для котів пласка зелена 0.2 l.',
      price: 165,
      link: '#',
    },
    {
      id: 27,
      imgSrc: '/catBowl7.jpg',
      category:'catsDishes',
      altText: 'Bowl',
      description: 'Trixie Миска для котів коротконосих порід, керамічна 300 ml.',
      price: 230,
      link: '#',
    },
    {
      id: 28,
      imgSrc: '/catBowl8.jpg',
      category:'catsDishes',
      altText: 'Bowl',
      description: 'Trixie Миска для котів Повільне годування 15*15 см 0.35l.',
      price: 230,
      link: '#',
    },
    {
        id: 16,
        imgSrc: '/clipper.jpg',
        category:'catsCare',
        altText: 'lipper',
        description: 'Trixie Luxe Кігтеріз для домашніх тварин, маленький',
        price: 290,
        link: '#',
      },
      {
        id:17,
        imgSrc: '/glove.jpg',
        category:'catsCare',
        altText: 'Glove',
        description: 'AnimAll Groom Рукавичка для вичісування шерсті для тварин, блакитна',
        price: 195,
        link: '#',
      },
      {
        id: 18,
        imgSrc: '/ointment.jpg',
        category:'catsCare',
        altText: 'Ointment',
        description: 'VetExpert Paw Protection Захисна мазь для подушечок лап котів і собак 75 ml.',
        price: 360,
        link: '#',
      },
      {
        id: 35,
        imgSrc: '/product1.jpg',
        category:'catsTreats',
        altText: 'Snecs',
        description: 'Mediterranean Natural Serrano Snacks Cat Anti Hairball Salmon & Tuna',
        price: 70,
        link: '#',
      },
      {
        id: 36,
        imgSrc: '/product2.jpg',
        category:'catsTreats',
        altText: '',
        description: 'Лизун вітамінізований AnimAll TastyVit з мататабі 30 г',
        price: 150,
        link: '#',
      },
      {
        id: 37,
        imgSrc: '/product3.jpg',
        category:'catsTreats',
        altText: 'Cream',
        description: 'AnimAll VetLine Malt фітопаста для виведення шерсті для котів 100 мл 🐾 AmigoVet',
        price: 225,
        link: '#',
      },
      {
        id: 38,
        imgSrc: '/product4.jpg',
        category:'catsTreats',
        altText: 'Snecs',
        description: 'Кремові ласощі для котів Trixie Creamy Snack біла риба (5X14)',
        price: 105,
        link: '#',
      },
      {
        id: 39,
        imgSrc: '/product5.jpg',
        category:'catsTreats',
        altText: 'Snecs',
        description: 'Кремові ласощі для котів Trixie Creamy Snack курка (5X14)',
        price: 105,
        link: '#',
      },
      {
        id: 40,
        imgSrc: '/product6.jpg',
        category:'catsTreats',
        altText: 'Snecs',
        description: 'Кремові ласощі для котів Trixie Creamy Snack креветки (5X14)',
        price: 105,
        link: '#',
      },
      {
        id: 41,
        imgSrc: '/product7.jpg',
        category:'catsTreats',
        altText: 'Snecs',
        description: 'Печиво для кішок “Cookies” з лососем та котячою м’ятою, 50 г',
        price: 75,
        link: '#',
      },
      {
        id:42,
        imgSrc: '/product8.jpg',
        category:'catsTreats',
        altText: 'Snecs',
        description: 'Nutri Pockets для котів Морський мікс 150г',
        price: 205,
        link: '#',
      },
      {
        id: 43,
        imgSrc: '/product9.jpg',
        category:'catsTreats',
        altText: 'Snecs',
        description: 'Nutri Pockets для кішок Лосось+Омега 3+6 60г',
        price: 120,
        link: '#',
      },
      {
        id: 32,
        imgSrc: '/toilet.jpg',
        category:'catsToilets',
        altText: 'Carrier',
        description: 'Туалет під наповнювач АнімАлл з сіткою 57x39x23 см',
        price: 1025,
        link: '#',
      },
      {
        id: 33,
        imgSrc: '/product14.jpg',
        category:'catsToilets',
        altText: 'Carrier',
        description: 'Туалет під наповнювач АнімАлл з лопаткою 58x42x24 см',
        price:650,
        link: '#',
      },
      {
        id: 34,
        imgSrc: '/product15.jpg',
        category:'catsToilets',
        altText: 'Carrier',
        description: 'Туалет для кішок Trixie з сіткою «Berto» 39 x 22 x 59 см',
        price: 760,
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
<Catsdeck></Catsdeck>
<div className='adversBanner conteiner rounded rounded-2 p-1 my-3 my-sm-1'>
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
    <div className="container my-0">
        <div className="lincsConteiner py-5">
          {Links.map((link, index) => (
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


export function Delivery() {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Доставка та оплата товару</h2>
      <div className="row">
        <div className="col-md-6">
          <h5>Способи доставки</h5>
          <ul>
            <li>Кур'єрська доставка по місту</li>
            <li>Самовивіз із магазину</li>
            <li>Доставка Новою Поштою</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5>Способи оплати</h5>
          <ul>
            <li>Готівкою при отриманні</li>
            <li>Банківською картою онлайн</li>
            <li>Безготівковий розрахунок</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Catspage />
      <Delivery />
    </>
  );
}
