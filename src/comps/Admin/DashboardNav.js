import { Row, Col } from 'react-bootstrap';
import {AiFillHome} from 'react-icons/ai';
import { useState } from 'react';

const DashboardNav = ({handlePastries, handleReviews, pastry, reviews}) => {

  let pastryLength = (pastry.length);
  let reviewsLength = (reviews.length)
  

  return ( 
    <div className="dashboard-nav">
      <h1>Welcome, Blanca Landin</h1>
      <Row>
        <div className="dashboard-div">
          <p>Dashboard</p>
        </div>
      </Row>
      <Row>
        <Col sm={2} className="dashboard-col-1">
          <div className="dashboard-icon">
            <p><AiFillHome/> Dashboard</p>
          </div>
        </Col >
        <Col className="dashboard-col-2">
        </Col>
      </Row>
      <Row>
        <Col className="col-header">
          <p>Model name</p>
        </Col>
        <Col className="col-header">
          <p>Records</p>
        </Col>
        <Row className="model-name-entry-1">
          <Col className="col-model-name">
            <p onClick={handlePastries}>Pastries</p>
          </Col>
          <Col className="col-records">
            <p>{pastryLength}</p>
          </Col>
        </Row>
        <Row className="model-name-entry-2">
          <Col className="col-model-name">
            <p onClick={handleReviews}>Reviews</p>
          </Col>
          <Col className="col-records">
            <p>{reviewsLength}</p>
          </Col>
        </Row>
        <Row className="model-name-entry-3">
          <Col className="col-model-name">
            <p>Orders</p>
          </Col>
          <Col>
            <p>Orders Records</p>
          </Col>
        </Row>
      </Row>
    </div>
   );
}
 
export default DashboardNav;