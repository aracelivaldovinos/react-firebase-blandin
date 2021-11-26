import useFirestore from '../../hooks/useFirestore';
import NavBar from "./NavBar";
import Icons from "./Icons";
import HomeMenu from "./HomeMenu";
import HomeGallery from "./HomeGallery";
import HeroImage from "./HeroImage";
import HomeReviews from "./HomeReviews";

const Homepage = () => {
  const { reviews } = useFirestore('Reviews');
  console.log(reviews)
  return ( 
    <div className="homepage" style={{ backgroundImage: "url(/background.jpeg)" }}>
      <div className="content">
      <NavBar />
      <HeroImage />
      <Icons />
      <HomeMenu />
      {/* <HomeGallery /> */}
      <HomeReviews reviews={reviews}/>
      </div>
    </div>
   );
}
 
export default Homepage;