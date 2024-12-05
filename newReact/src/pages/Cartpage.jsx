import React,{useState,} from 'react';
// import { useContext } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cartpage() {

      const { cart, setCart } = useCart();
const navigate = useNavigate();

    const removeFromCart = (id) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
};
const getTotalPrice = () => {
  return cart.reduce((total, item) => total + (item.price || 0), 0);
};
    
  
    return (
      <div className="container py-5">
        <h2 className="mb-4 inter-500">Твій кошик</h2>
        {cart.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-secondary">
                <tr>
                  <th>Товар</th>
                  <th>Зображення</th>
                  <th>Ціна</th>
                  <th>Дія</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, id) => (
                  <tr key={item.id}>
                    <td>{item.description}</td>
                    <td>
                      <img
                        src={item.imgSrc}
                        alt={item.altText}
                        className="img-fluid"
                        style={{ maxWidth: '100px' }}
                      />
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm inter-400"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Видалити
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> 
          <div className="mt-4 inter-400">
            <h4>Загальна сума: {getTotalPrice()} грн.</h4>
          </div>
          <div className="mt-4">
            <button
              className="btn btn-warning inter-400"
              onClick={() => navigate('/catalog')} 
            >
              Продовжити покупки
            </button>
          </div>
          <div className="mt-4">
  <button
    className="btn btn-success"
    onClick={() =>{
      localStorage.setItem('cart', JSON.stringify(cart));
      setCart([]);
    navigate('/checkout')
  } }
  >
    Оформити замовлення
  </button>
</div>

          </div>
        ) : (
          <p>Кошик порожній</p>
        )}
      </div>
    );
  }