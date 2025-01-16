import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Catsdeck from "../components/Catsdeck";
import data from '../data/cat.json';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Delivery from './Delivery';

export default function Catspage() {
 const{sliderImages, Links, products}= data;
  return (
    <>
    <Catsdeck/>
    <Slider sliderImages={sliderImages}/>
    <Products Links={Links} products={products} />
    <Delivery />
    </>
  );
}

