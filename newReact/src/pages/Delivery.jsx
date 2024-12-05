import React from 'react';

export default function Delivery() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Доставка та оплата товару</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Доставка</h4>
          <p>
            Ми пропонуємо декілька варіантів доставки:
          </p>
          <ul className="list-group">
            <li className="list-group-item">Кур'єрська доставка по місту</li>
            <li className="list-group-item">Самовивіз з нашого магазину</li>
            <li className="list-group-item">Доставка Новою Поштою по всій Україні</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Оплата</h4>
          <p>
            Ви можете оплатити замовлення зручним для вас способом:
          </p>
          <ul className="list-group">
            <li className="list-group-item">Готівкою при отриманні</li>
            <li className="list-group-item">Банківською карткою онлайн</li>
            <li className="list-group-item">Безготівковий розрахунок</li>
          </ul>
        </div>
      </div>
      <div className="alert alert-info mt-4" role="alert">
        Зверніть увагу: при замовленні понад 1500 грн — доставка безкоштовна!
      </div>
    </div>
  );
}

