import React, {useState, useContext} from 'react'
import { CartContext } from '../CartContext';

export default function Products({ Links, products }) {
     const { cart, setCart } = useContext(CartContext);
       const [filteredCategory, setFilteredCategory] = useState(''); 
       const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
      const filteredProducts = filteredCategory
  ? (products || []).filter((product) => product.category === filteredCategory)
  : products || [];
  return (
    <>
       <div className="container my-0">
<div className="lincsConteiner py-5">
{Links.map((link,index)=>(
     <button
    key={link.category}
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
           {
         filteredProducts.map((product) => (
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
  )
}
