import React, { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

   
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};

    
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errors.name = "Ім'я повинно містити щонайменше 3 символи.";
    } else if (!/^[А-Яа-яЇїЄєІіҐґA-Za-z\s]+$/.test(formData.name.trim())) {
      errors.name = "Ім'я може містити тільки літери.";
    }

   
    if (!formData.phone.trim()) {
      errors.phone = 'Телефон є обов’язковим.';
    } else if (!/^\+380\d{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Введіть номер у форматі +380XXXXXXXXX.';
    }

    
    if (!formData.address.trim()) {
      errors.address = 'Адреса доставки є обов’язковою.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const orderData = {
      ...formData,
      cart,
      total: cart.reduce((total, item) => total + (item.price || 0), 0),
    };

    console.log('Submitted order:', orderData);
    alert('Дякуємо за ваше замовлення!');
    localStorage.removeItem('cart');
    setCart([]);
    setFormData({ name: '', phone: '', address: '' });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Оформлення замовлення</h2>

      <div className="mb-4">
        <h4>Ваше замовлення:</h4>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.description} - {item.price} грн
              </li>
            ))}
          </ul>
        ) : (
          <p>Кошик порожній</p>
        )}
        <h5>Загальна сума: {cart.reduce((total, item) => total + (item.price || 0), 0)} грн</h5>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Ім'я</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {formErrors.phone && <small className="text-danger">{formErrors.phone}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Адреса доставки</label>
          <textarea
            id="address"
            name="address"
            className="form-control"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
          {formErrors.address && <small className="text-danger">{formErrors.address}</small>}
        </div>
        <button type="submit" className="btn btn-success">Підтвердити замовлення</button>
      </form>
    </div>
  );
}
