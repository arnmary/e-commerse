import React from 'react';
import data from '../data/cat.json'
import Slider from './Slider';


export default function Description() {
  const{sliderImages}=data;
  return (
    <>
       <div className="blockImage d-flex flex-row align-items-center  w-100 bg-warning my-3 rounded rounded-2 ">
            <h2 className="descText  text-dark fs-2 roboto-700 p-5 p-sm-1 font-size-sm ">
            PetsMania – створено для тих, хто любить своїх тварин і прагне для них найкращого! ❤️🐾
            </h2>
        <img src="/dogs.png" alt="dogs image" id='dogs' />
        </div>
      <div className="desContainer d-flex flex-column flex-md-row my-5 p-1 align-items-center justify-content-center" >
        <div className="sale w-100">
        <Slider sliderImages={sliderImages}/>
        </div>
     
      </div>
    </>
  )
}
