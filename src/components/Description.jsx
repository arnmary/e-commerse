import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './saleSwiper.css'



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Description() {
  return (
    <div>
 
       <div className="blockImage d-flex flex-row align-items-center  w-100 bg-warning my-3 rounded rounded-2">
            <h2 className="descText  text-dark fs-2 roboto-700 p-5 font-size-sm ">
            PetsMania – створено для тих, хто любить своїх тварин і прагне для них найкращого! ❤️🐾
            </h2>
        <img src="/dogs.png " alt="dogs image" id='dogs' />
        </div>
      <div className="desContainer d-flex flex-column flex-md-row my-0 p-1 align-items-center justify-content-center" >
        <div className="sale w-100">
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
        className="mySwiper"
      >
        <SwiperSlide>
           <img src="/baner2.jpg" alt="Baner image" className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/baner1.jpg" alt="Baner image"className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/baner1.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
              <img src="/baner2.jpg" alt="Baner image" className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/baner1.jpg" alt="Baner image" className='banerSwiper' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/baner2.jpg" alt="Baner image"  className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/baner1.jpg" alt="Baner image"  className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
           <img src="/baner2.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/baner1.jpg" alt="Baner image" className='banerSwiper'/>
        </SwiperSlide>
      </Swiper>
      </div>
      
        </div>
     
      </div>
    </div>
  )
}
