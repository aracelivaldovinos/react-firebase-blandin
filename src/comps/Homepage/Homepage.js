import Icons from "./Icons";
import HomeGallery from "./HomeGallery";
import HomeReviews from "./HomeReviews";

const Homepage = (props) => {
  return ( 
    <div className="homepage">
      <div className="content">
      <Icons handleIcons={props.handleHomeIcons} />
      <HomeGallery />
      <HomeReviews/>
      </div>
    </div>
   );
}
 
export default Homepage;