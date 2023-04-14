import reviews from 'Api/reviewsApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = params => {
  const { movieId } = useParams();
  const [reviewsData, setReviews] = useState([]);

  useEffect(() => {
    reviews(movieId).then(setReviews);
  }, [movieId]);

  return reviewsData.length > 0 ? (
    <ul>
      {reviewsData.map(item => {
        return (
          <li key={item.id}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
            <p>{item.created_at.slice(0, 10)}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
