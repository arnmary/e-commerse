import React, {useRef} from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Catsdeck from "../components/Catsdeck";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../adversSwiper.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export function Catspage() {
  const links=[
{value: 'Ласощі для котів', link: '/cats/treats' },
{value: 'Переноски для котів', link: '/cats/carriers' },
{value: 'Туалети для котів', link: '/cats/toilets' },  
{value: 'Дряпки для котів', link: '/cats/scratches' }, 
{value: 'Догляд за  котами', link: '/cats/care' },
{value: 'Миски та поїлки для котів', link: '/cats/dishes' }, 
 
  ]
  const linkEl = links.map((item,index)=>(
    <Link
    key={index}
    className=' mt-5 me-3 py-2 linc-secondary link-body-emphasis d-inline-flex text-decoration-none icon-link icon-link-hover rounded btn btn-outline-warning bg bg-indigo'
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
<Catsdeck></Catsdeck>
<div className='adversBanner conteiner rounded rounded-2 my-3 my-sm-2'>
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
        <img src="/baner3.jpg" alt="Baner image"className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide> <img src="/baner1.jpg" alt="Baner image"className='banerSwiper' /></SwiperSlide>
        <SwiperSlide>
        <img src="/baner2.jpg" alt="Baner image"className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner1.jpg" alt="Baner image"className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner2.jpg" alt="Baner image"className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner1.jpg" alt="Baner image"className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner2.jpg" alt="Baner image"className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/baner1.jpg" alt="Baner image"className='banerSwiper' />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
<div className="container mx-0">
<div className="lincsConteiner ">
  {linkEl}
</div>

<h5>
  Зазвичай замовляють
</h5>

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
