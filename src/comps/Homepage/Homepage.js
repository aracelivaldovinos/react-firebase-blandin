import useFirestore from '../../hooks/useFirestore';
import Icons from "./Icons";
import HomeMenu from "./HomeMenu";
import HomeGallery from "./HomeGallery";
import HomeReviews from "./HomeReviews";

const Homepage = () => {
  const { reviews } = useFirestore('Reviews');
  console.log(reviews)
  return ( 
    <div className="homepage">
      <div className="content">
      <Icons />
      {/* <HomeMenu /> */}
      {/* <HomeGallery /> */}
      {reviews && <HomeReviews reviews={reviews}/>}
      </div>
    </div>
   );
}
 
export default Homepage;