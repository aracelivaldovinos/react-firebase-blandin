import { useState } from 'react';

const HomeReviews = ({reviews}) => {

  const [pastryReview, setPastryReview] = useState([]);

  const fiveStars = "★★★★★"
  const fourStars = "★★★★"
  const threeStars = "★★★"
  const twoStars = "★★"
  const oneStar = "★"


  let dupReviews =  [...reviews]
  let array = []
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
  })

  
  return (  
    <div className="reviews">
      <div id="slideset1">
        {/* <div>
          <h1>{pastryReview[0][0]} {pastryReview[0][1]}</h1>
          <p>{pastryReview[0][2]}</p>
          <p>{pastryReview[0][3]}</p>
        </div>
        <div>
          <h1>{pastryReview[1][0]} {pastryReview[1][1]}</h1>
          <p>{pastryReview[1][2]}</p>
          <p>{pastryReview[1][3]}</p>
        </div> */}
        <div>
          <h1>This is slide number 3</h1>
          <p>Slide number 3</p>
        </div>
      </div>
    </div>
  );
}
 
export default HomeReviews;