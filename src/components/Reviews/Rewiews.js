import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/api';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [notEmpty, setNotEmpty] = useState(false);

  useEffect(() => {
    const reviewsMovie = async id => {
      try {
        const movieReviews = await getMovieReviews(id);
        setReviews(movieReviews);
        console.log(movieReviews);
        setNotEmpty(true);
      } catch (error) {
        console.log(error);
      }
    };
    reviewsMovie(movieId);
  }, [movieId]);
  const { results } = reviews;
  return (
    <div>
      <ul>
        {notEmpty && results.length ? (
          results.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>No reviews</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
