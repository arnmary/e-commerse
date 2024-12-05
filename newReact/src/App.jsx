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
import OfferPage from './pages/OfferPage'
import RandomProducts from './components/RandomProducts';
import CatTreatsPage from './pages/CatTreatsPage';
import CatsCarrierPage from './pages/CatsCarrierPage';
import CatsToiletPage from './pages/CatsToiletPage';
import CatsScreatchPage from './pages/CatsScreatchPage';
import CatCarePage from './pages/CatCarePage';
import CatDishesPage from './pages/CatDishesPage';
import DogTreatsPage from './pages/DogTreatsPage';
import DogAccsPage from './pages/DogAccsPage';
import DogCarrPage from './pages/DogCarrPage';
import DogClothPage from './pages/DogClothPage';
import DogHygPage from './pages/DogHygPage';
import DogDishPage from './pages/DogDishPage';
import RodentsFoodPage from './pages/RodentsFoodPage';
import RodentsHygPage from './pages/RodentsHygPage';
import RodentsAccsPage from './pages/RodentsAccsPage';
import AquaFoodPage from './pages/AquaFoodPage';
import AquaHygPage from './pages/AquaHygPage';
import AquaAccsPage from './pages/AquaAccsPage';
import TerraFoodPage from './pages/TerraFoodPage';
import TerraAccsPage
 from './pages/TerraAccsPage';
 import BirdFoodPage from './pages/BirdFoodPage';
 import BirdCagPage from './pages/BirdCagPage';
import CheckoutPage from './pages/CheckoutPage';


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
          <Route path="/" element={<Catspage />} />
          <Route path="offer" element={<OfferPage/>} />
          <Route path="/cats/treats" element={<CatTreatsPage/>} />
          <Route path="/cats/carriers" element={<CatsCarrierPage/>} />
        <Route path="/cats/toilets" element={<CatsToiletPage/>} />
        <Route path="/cats/scratches" element={<CatsScreatchPage/>} />
        <Route path="/cats/care" element={ <CatCarePage/>}/>
        <Route path="/cats/dishes" element={ <CatDishesPage/>}/>
        <Route path="/dogs/treats" element={ <DogTreatsPage/>}/>
        <Route path="/dogs/accessories" element={ <DogAccsPage/>}/>
           <Route path="/dogs/carriers" element={ <DogCarrPage/>}/>
           <Route path="/dogs/hygiene" element={ <DogHygPage/>}/>
           <Route path="/dogs/dishes" element={ <DogDishPage/>}/>
           <Route path="dogs/clothing" element={ <DogClothPage/>}/>
           <Route path="/rodents/food" element={ <RodentsFoodPage/>}/>
           <Route path="/rodents/hygiene" element={ <RodentsHygPage/>}/>
           <Route path="/rodents/accessories" element={ <RodentsAccsPage/>}/>
           <Route path="aquarium/food" element={ <AquaFoodPage/>}/>
           <Route path="/aquarium/hygiene" element={ <AquaHygPage/>}/>
           <Route path="/aquarium/accsesories" element={ <AquaAccsPage/>}/>
           <Route path="/terrarium/food" element={ <TerraFoodPage/>}/>
           <Route path="/terrarium/accsesories" element={ <TerraAccsPage/>}/>
           <Route path="/birds/food" element={ <BirdFoodPage/>}/>
           <Route path="/birds/cages" element={ <BirdCagPage/>}/> 
           <Route path="/checkout" element={<CheckoutPage />} /> 
        </Routes>
     
        
              <Footer />
      </BrowserRouter>
  </CartProvider>  
    </>
  );
}

export default App;
