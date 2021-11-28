import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import useFirestore from '../../hooks/useFirestore';


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
  })


// console.log(items)
  return ( 
    <div className="home-gallery">
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