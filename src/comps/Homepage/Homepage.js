import Icons from "./Icons";
import HomeMenu from "./HomeMenu";
import HomeGallery from "./HomeGallery";
import HomeReviews from "./HomeReviews";

const Homepage = () => {
  return ( 
    <div className="homepage">
      <div className="content">
      <Icons />
      {/* <HomeMenu /> */}
      <HomeGallery />
      <HomeReviews/>
      </div>
    </div>
   );
}
 
export default Homepage;