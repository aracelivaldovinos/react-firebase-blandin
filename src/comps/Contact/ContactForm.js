import { Row, Col } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

import "../../index.css";

const ContactForm = () => {
  return ( 
    <div className="contact-form">
      <section className="contact" id="container">
        <div className="container">
          <div className="section-title">
            <h2>
              <span>Contact</span> Us
            </h2>
            <p>Whatever Blanca wants to add!</p>
          </div>
        </div>
        <div className="container mt-5">
          <div className="info-wrap">
            <Row>
              <div className="col-lg-6 col-md-6 info mt-4 mt-lg-0">
                <div className="i">
                  <BsFillEnvelopeFill />
                </div>
                <h4>Email:</h4>
                <p>contact@example.com</p>
              </div>
              <div className="col-lg-6 col-md-6 info mt-4 mt-lg-0">
                <div className="i">
                  <BsFillTelephoneFill />
                </div>
                <h4>Call:</h4>
                <p>+012 345 6789</p>
              </div>
            </Row>
          </div>
        </div>
        <div className="container mt-1">
        <form className="form">
          <Row>
            <Col classname="col-md-6 form-group">
              <label>Full name:</label>
              <input type="text" className="form-control form-control-lg" placeholder="Araceli Valdovinos"/>
              <label>Email:</label>
              <input type="email" className="form-control form-control-lg" placeholder="test_email@gmail.com"/> 
              <label>Phone number:</label>
              <input type="tel" className="form-control form-control-lg" placeholder="012-345-6789"/> 
              <label>Date:</label>
              <input type="date" className="form-control form-control-lg"/> 
              <label>Occassion:</label>
              <input type="text" className="form-control form-control-lg" placeholder="28th Birthday Celebration"/>    
            </Col>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <label>Message:</label>
              <textarea className="form-control form-control-lg" placeholder="I would like..." style={{height:"90%"}}/>
            </div>
          </Row>
        </form>
        </div>
      </section>
    </div>
   );
}
 
export default ContactForm;