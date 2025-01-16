import React from 'react';

export default function Review({ review }) {
  return (
    <div className="review p-1 rounded rounded-2 inter-400 w-25">
      <div className="review-header">
        <strong>{review.username} </strong>
        <span className="review-date"> {review.date} </span>
      </div>
      <p>{review.text}</p>
    </div>
  );
}

