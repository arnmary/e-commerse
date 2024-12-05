import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import RandomProducts from '../components/RandomProducts';
// import DogsProductTreats from './DogsProductTreats';
import Dogsdeck from '../components/Dogsdeck';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../adversSwiper.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Dogspage() {

  const links = [
    //    { value: 'Сухий корм для собак', link: '/dogs/food/dry' },
    // { value: 'Вологий корм для собак', link: '/dogs/food/wet' },
    // { value: 'Лікувальні  корми для собак', link: '/dogs/food/medical' },
    { value: 'Ласощі для собак', link: '/dogs/treats' },
    { value: 'Аксесуари для собак', link: '/dogs/accessories' },
    { value: 'Переноски  для собак', link: '/dogs/carriers' },
    { value: 'Амуніція для собак', link: '/dogs/clothing' },
    { value: 'Гігієна  собак', link: '/dogs/hygiene' },
    {value: 'Миски для собак', link: '/dogs/dishes' }, 
   
  ]
  const linkEl = links.map((item,index)=>(
   <Link
   key={index}
   className=' mt-5 me-3 py-2 link-secondary link-body-emphasis d-inline-flex text-decoration-none icon-link icon-link-hover rounded btn btn-outline-warning bg bg-indigo'
    to = {item.link}>
    {item.value}
   </Link>
  ));
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }

  return (
<>
<Dogsdeck></Dogsdeck>
<div className='adversBanner conteiner rounded rounded-2 my-3'>
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
        <SwiperSlide>
        <img src="/baner2.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner1.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner2.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner1.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner2.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner1.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide><img src="/baner2.jpg" alt="Baner image" className='banerSwiper'/></SwiperSlide>
        <SwiperSlide>
        <img src="/baner1.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner2.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  <div className='container my-0'>
      {/* <h2 className=' text-center mb-4 inter-500'>Товари для собак</h2> */}
    <div className='lincsConteiner py-5' >
       {linkEl}
    </div>
   <div className="popProduct">
    {/* <h5 className ="inter-400  py-5">
      Популярні товари
    </h5 > */}
   {/* < DogsProductTreats></DogsProductTreats> */}
   </div>

  <RandomProducts></RandomProducts>

  </div>
  
</>
  
  );
}


