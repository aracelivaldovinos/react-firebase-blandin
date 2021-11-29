import useFirestore from '../../hooks/useFirestore';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const HomeReviews = () => {

  const { reviews } = useFirestore('Reviews');
  console.log(reviews)

  const fiveStars = "★★★★★"
  const fourStars = "★★★★"
  const threeStars = "★★★"
  const twoStars = "★★"
  const oneStar = "★"


  let dupReviews =  [...reviews];
  let array = [];
  let items = [];

  dupReviews.forEach((review)=>{
    if (review.rating === fiveStars.length){
      array.push([review.firstname, review.lastname, review.body, fiveStars])
    }
    else if (review.rating === fourStars.length){
      array.push([review.firstname, review.lastname, review.body, fourStars])
    }
    else if (review.rating === threeStars.length){
      array.push([review.firstname, review.lastname, review.body, threeStars])
    }
    else if (review.rating === twoStars.length){
      array.push([review.firstname, review.lastname, review.body, twoStars])
    }
    else if (review.rating === oneStar.length){
      array.push([review.firstname, review.lastname, review.body, oneStar])
    }
  });

  array.forEach((item)=>{
    items.push( 
    <div className="item" data-value="1">
      <h1>{item[0]} {item[1]}</h1>
      <p>{item[2]}</p>
      <h2>{item[3]}</h2>
    </div>)

  })

  console.log(array)
  console.log(items)

  return (  
    <div className="reviews">
      <div className="section-title">
        <h2>Checkout what people have to say about my <span>pastries!</span></h2>
        <p>
          Want to leave a review?
          Click <Link to="/review">here.</Link>
        </p>
      </div>
      <div className="review-div">
        <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
        />
      </div>  
    </div>
  );
}
 
export default HomeReviews;