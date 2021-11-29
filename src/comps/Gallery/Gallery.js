
const Gallery = ({pastry}) => {

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