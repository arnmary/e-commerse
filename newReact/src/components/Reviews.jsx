import React from 'react';

export default function Reviews() {
  const reviewsData = [
        {
        id :2,
      username: 'Олена',

      text: 'Моїй кішці дуже подобається новий корм, який я тут придбала. Дякую.',
      date: '2024-11-28',
    },
    {
        id :1,
      username: 'Ігор',
      text: 'Дуже вдячний за чудовий сервіс! Товари завжди якісні, а доставка швидка.',
      date: '2024-12-01',
    },

    {
        id :3,
      username: 'Аліса',
   
      text: 'Замовляла лежак для собаки, Рекомендую!',
      date: '2024-11-15',
    },
  ];

  const Review = ({ review }) => {
    return (
      <div className="review  p-1 rounded rounded-2  inter-400 w-25">
        <div className="review-header">
          <strong>{review.username} </strong>
          <span className="review-date"> {review.date} </span>
        </div>
        <p> {review.text} </p>
      </div>
    );
  };

  return (
    <>
      <div className='revConteiner ' >
   <h2 className='rewTitle text-start p-1 inter-500'>Відгуки наших клієнтів</h2>
   
      
      <div className="reviews  d-flex  flex-row   align-items-center  justify-content-around flex-wrap m-0">
        {reviewsData.map((review, id) => (
          <Review key={id} review={review} />
        ))}
      </div>
    </div>
    </>
   
  );
}



