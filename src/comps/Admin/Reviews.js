import React from 'react';
import { Col ,Row } from 'react-bootstrap';
import {FaList} from 'react-icons/fa';


const Reviews = ({handleDashboard, handleDeleteReview, reviews}) => {

  return ( 
    <div className="dashboard-nav">
      <h1>Reviews</h1>
      <Row>
        <div className="dashboard-div">
          <p><span onClick={handleDashboard}>Dashboard</span></p>
        </div>
      </Row>
      <Row>
        <Col sm={2} className="dashboard-col-1">
          <div className="dashboard-icon">
            <p> <FaList/> List</p>
          </div>
        </Col >
        <Col className="dashboard-col-2">
        </Col>
      </Row>
      <Row>
      <Col className="col-header">
          <p>First name</p>
        </Col>
        <Col className="col-header">
          <p>Last name</p>
        </Col>
        <Col className="col-header">
          <p>Content</p>
        </Col>
        <Col className="col-header">
          <p>Rating</p>
        </Col>
      </Row>
      <div className="pastry-list">
         {reviews.map((doc)=>(
          <div key={doc.id}>
            <Row className="item-row">
              <Col xs={2}>
                <button onClick={()=>handleDeleteReview(doc.id)} className="btn btn-danger">Delete</button>
              </Col>
              <Col xs={2}>
                <p>{doc.firstname}</p>
              </Col>
              <Col xs={2}>
                <p>{doc.lastname}</p>
              </Col>
              <Col sm={3}>
                <p>{doc.body}</p>
              </Col>
              <Col sm={3}>
                <p>{doc.rating}</p>
              </Col>
            </Row> 
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default Reviews;