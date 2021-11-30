import HomeIcons from "./HomeIcons";
import HomeGallery from "./HomeGallery";
import HomeReviews from "./HomeReviews";

const Homepage = (props) => {
  return ( 
    <div className="homepage">
      <div className="content">
      <HomeIcons handleIcons={props.handleHomeIcons} />
      <HomeGallery />
      <HomeReviews/>
      </div>
    </div>
   );
}
 
export default Homepage;