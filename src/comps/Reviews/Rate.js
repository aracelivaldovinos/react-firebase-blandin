import { Rating } from 'react-simple-star-rating';

const Rate = ({handleRating}) => {
  return ( 
    <Rating onClick={handleRating}>
      <svg fill='currentColor' width='25' height='25' viewBox='0 0 24 24'>
        <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
      </svg>  
    </Rating>  

   );
}
 
export default Rate;