const Review = (props) => {
  return ( 
    <div className="review">
      <div id="slideset1">
        <div>
          <h1>{props.firstname} {props.lastname}</h1>
          <p>{props.body}</p>
          <p>{props.rating}</p>
        </div>
        {/* <div>
          <h1>This is the second slide</h1>
          <p>Second slide</p>
        </div>
        <div>
          <h1>This is slide number 3</h1>
          <p>Slide number 3</p>
        </div> */}
      </div>

    </div>
   );
}
 
export default Review;