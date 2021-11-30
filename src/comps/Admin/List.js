import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { Col ,Row } from 'react-bootstrap';
import {FaList} from 'react-icons/fa'
import {AiFillFileAdd} from 'react-icons/ai'

const List = ({ handlePastryForm, handleDeletePastry}) => {

  const { pastry } = useFirestore('pastries');

  return ( 
    <Row>
      <Row>
        <h1>List of Pastries</h1>
      </Row>
      <Row>
        <div className="admin-nav">
          <p>Dashboard / Pastries</p>
        </div>
      </Row>
      <Row>
        <div className="admin-nav-icons">
          <p><FaList/></p>
          <p onClick={handlePastryForm}><AiFillFileAdd/></p>
        </div>
      </Row>
      <Row className="pastry-labels">
        <Col>
          <input type="checkbox"></input>
        </Col>
        <Col>
          <p>Pastry</p>
        </Col>
        <Col>
          <p>Celebration</p>
        </Col>
        <Col>
          <p>Description</p>
        </Col>
        <Col>
          <p>Url</p>
        </Col>
        {/* <Col>
          <p>Created at</p>
        </Col> */}
      </Row>
      <div className="temp">
        {pastry.map((doc)=>(
          <div key={doc.id}>
            <Row className="item-row">
              <Col xs={2}>
                <button onClick={handleDeletePastry}>Delete</button>
                <button>Edit</button>
                <input type="checkbox" onClick={()=>handleDeletePastry(doc.id)} />
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
                <p>{doc.url}</p>
              </Col>
              {/* <Col>
                <p>{doc.createdAt}</p>
              </Col> */}
            </Row> 
          </div>
        ))}
      </div>
    </Row>
   );
}
 
export default List;