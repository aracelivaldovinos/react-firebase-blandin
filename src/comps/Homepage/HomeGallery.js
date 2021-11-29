import AliceCarousel from 'react-alice-carousel';
import useFirestore from '../../hooks/useFirestore';
import {Link} from 'react-router-dom';

const HomeGallery = () => {
  const {pastry} = useFirestore('pastries');
  console.log(pastry)

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const items = [];

pastry &&  pastry.forEach((item)=>{
    items.push(<div className="item" data-value="6"><img src={item.url} alt={item.pastry} /></div>)
  });

  return ( 
    <div className="home-gallery">
      <div className="section-title">
        <h2>View all my pastries in the
          <span>gallery!</span>
        </h2>
        <p>
          Click <Link to="/gallery">here.</Link>
        </p>
        </div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    </div>
   );
}
 
export default HomeGallery;