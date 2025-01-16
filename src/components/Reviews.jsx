import React from 'react';
import Review from './Review';
import data from '../data/reviews.json';

export default function Reviews() {
  const { reviewsData } = data;

  return (
    <div className="revConteiner">
      <h2 className="rewTitle text-start p-1 inter-500">Відгуки наших клієнтів</h2>
      <div className="reviews d-flex flex-row align-items-center justify-content-around flex-wrap m-0">
        {reviewsData.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}




