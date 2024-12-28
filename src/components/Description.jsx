import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './saleSwiper.css'
import data from '../data/cat.json'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Description() {
  const{sliderImages}=data;
  return (
    <>
       <div className="blockImage d-flex flex-row align-items-center  w-100 bg-warning my-3 rounded rounded-2 ">
            <h2 className="descText  text-dark fs-2 roboto-700 p-5 font-size-sm ">
            PetsMania – створено для тих, хто любить своїх тварин і прагне для них найкращого! ❤️🐾
            </h2>
        <img src="/dogs.png" alt="dogs image" id='dogs' />
        </div>
      <div className="desContainer d-flex flex-column flex-md-row my-5 p-1 align-items-center justify-content-center" >
        <div className="sale w-100">
      <div className='adversBanner container rounded rounded-2 my-3 py-3'>
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
        
      </Swiper>
      </div>
      
        </div>
     
      </div>
    </>
  )
}
