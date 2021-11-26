import Review from './Review';

const HomeReviews = ({reviews}) => {
  console.log(reviews)
  return (  
    <div className="reviews">
      {reviews.map((review)=>(
        <div key={review.id}>
          <Review 
            firstname={review.firstname}
            lastname={review.lastname}
            body={review.body}
            rating ={review.rating}
            id = {review.id}
          />
        </div>
      ))}
    </div>
  );
}
 
export default HomeReviews;