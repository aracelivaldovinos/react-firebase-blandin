import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { Col ,Row } from 'react-bootstrap';
import {FaList} from 'react-icons/fa'
import {AiFillFileAdd} from 'react-icons/ai'

const List = ({ handlePastryForm, handleDeletePastry, handleModal}) => {

  const { pastry } = useFirestore('pastries');

  return ( 
    <div className="dashboard-nav">
      <h1>List of Pastries</h1>
      <Row>
        <div className="dashboard-div">
          <p>Dashboard / <span>Pastries</span></p>
        </div>
      </Row>
      <Row>
        <Col sm={2} className="dashboard-col-1">
          <div className="dashboard-icon">
            <p> <FaList/> List</p>
          </div>
        </Col >
        <Col className="dashboard-col-2">
          <p onClick={handlePastryForm}> <AiFillFileAdd/> Add</p>
        </Col>
      </Row>
      <Row>
      <Col className="col-header">
          <p>Pastry</p>
        </Col>
        <Col className="col-header">
          <p>Celebration</p>
        </Col>
        <Col className="col-header">
          <p>Description</p>
        </Col>
        <Col className="col-header">
          <p>Url</p>
        </Col>
      </Row>
      <div className="pastry-list">
         {pastry.map((doc)=>(
          <div key={doc.id}>
            <Row className="item-row">
              <Col xs={2}>
                <button onClick={()=>handleDeletePastry(doc.id)}>Delete</button>
                <button>Edit</button>
              </Col>
              <Col xs={2}>
                <p>{doc.pastry}</p>
              </Col>
              <Col xs={2}>
                <p>{doc.celebration}</p>
              </Col>
              <Col sm={3}>
                <p>{doc.description}</p>
              </Col>
              <Col sm={3}>
                <p onClick={()=>handleModal(doc.id)}>{doc.url}</p>
              </Col>
            </Row> 
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default List;