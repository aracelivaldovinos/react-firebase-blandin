

const HeroImage = () => {
  return ( 
    <div className="p-5 bg-light"  
    style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/banner.png)",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative"
          }}>
      <div className="container-fluid py-5">
        <h1>Hello</h1>
        <p className="col-md-8 fs-4">"Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."</p>
      </div>
    </div>
   );
}
 
export default HeroImage;