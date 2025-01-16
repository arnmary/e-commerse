import './reset.css'
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';
import Description from './components/Description';
import Footer from './components/Footer';
import Aboutpage from './pages/Aboutpage';
import Contacts from './pages/Contacts';
import Cartpage from './pages/Cartpage';
import Delivery from './pages/Delivery';
import Catspage  from './pages/Catspage';
import DogsPage from './pages/DogsPage';
import Birdspage from './pages/Birdspage';
import Rodentspage from './pages/Rodentspage';
import Aquariumpage from './pages/Aquariumpage';
import Terrariumpage from './pages/Terrariumpage';
import Brands from './pages/Brands';
import CardBlock from './components/CardBlock';
import OfferPage from './pages/OfferPage';
import RandomProducts from './components/RandomProducts';
import CheckoutPage from './pages/CheckoutPage';
import Products from './components/Products';
import Slider from './components/Slider';


function App() {
  const [cart, setCart] = useState([]);
  return (
    <>

 <CartProvider>
     <BrowserRouter>
        <Header />
       <Nav />
        <Routes>
        <Route path="home" element={<Homepage/>} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cart" element={<Cartpage />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path ="catalog/dogs" element={<DogsPage/>} />
          <Route path ="catalog/cats" element={<Catspage/>} />
          <Route path ="catalog/birds" element={<Birdspage/>} />
          <Route path ="catalog/rodents" element={<Rodentspage/>} />
          <Route path ="catalog/aquarium" element={<Aquariumpage/>} />
          <Route path ="catalog/terrarium" element={<Terrariumpage/>} />
          <Route path ="catalog/brands" element={<Brands/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="offer" element={<OfferPage/>} />
           <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </CartProvider>  

 
    </>
  );
}

export default App;
