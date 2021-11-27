import  useFirestore  from '../../hooks/useFirestore';
const Gallery = () => {
const {pastry} = useFirestore('pastries');
// console.log(pastry)
  return ( 
    <div className="gallery">
      <div className="grid-gallery">
      {pastry && pastry.map((item)=>(
        <div className="gallery-wrap" key={item.id}
        >
        <img src={item.url}  alt={item.pastry}></img>
        </div>
      ))}
      </div>
    </div>
   );
}
 
export default Gallery;