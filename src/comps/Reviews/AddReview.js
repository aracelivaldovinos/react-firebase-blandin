import { useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { Row, Col} from 'react-bootstrap';
import Rate from './Rate';



const AddReview = () => {
  const [rating, setRating] = useState(0);


  const handleRating = (rate) =>{
    setRating(rate)
    console.log(rating)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    projectFirestore.collection('Reviews').add({
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      body: e.target.content.value,
      rating: rating 
    })

  }

  return ( 
    <div className="add-review">
      <div className="content">
      <section className="contact" id="container">
        <div className="container mt-5">
          <div className="info-wrap">
            <Row>
              <div className="section-title">
                <h2>
                  <span>Leave a</span> Review 
                </h2>
              </div>
            </Row>
          </div>
        </div>
        <div className="container mt-1">
        <form onSubmit={handleSubmit} className="form">
          <Row>
            <Col classname="col-md-6 form-group">
              <label>First name:</label>
              <input type="text" name="firstname" className="form-control form-control-lg" placeholder="Araceli"/>
              <label>Last name:</label>
              <input type="text" name="lastname" className="form-control form-control-lg" placeholder="Valdovinos"/>
              <label>Rating:</label> 
              <Rate handleRating={handleRating}/>
            </Col>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <label>Content:</label>
              <textarea  name="content" className="form-control form-control-lg" placeholder="Best cake I've ever had..." style={{height:"90%"}}/>
            </div>
          </Row>
          <input type="submit"/>
        </form>
        </div>
      </section>
      </div>
    </div>
   );
}
 
export default AddReview;