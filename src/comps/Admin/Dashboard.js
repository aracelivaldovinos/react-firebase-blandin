import { Col, Row } from 'react-bootstrap';
import List from './List';
import { useState } from 'react';
import AddForm from './AddForm';
const Dashboard = () => {
  const [addPastry, setAddPastry] = useState(false);
  const [pastryList, setPastryList] = useState(true);

  const handlePastryForm = () =>{
    setPastryList(false);
    setAddPastry(true);
  }

  const handleDeletePastry = (id) =>{
    console.log(id)
  }

  return ( 
    <div className="dashboard" style={{backgroundColor: "#fff"}}>
      <Row>
        <Col sm={2}>
        </Col>
        <Col sm={10}>
          {/* <h1>Welcome, Blanca Landin</h1>
          <Row>
            <div className="dashboard-div">
              <p>Dashboard</p>
            </div>
          </Row>
          <Row>
            <Col>
              <p>Dashboard</p>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col>
                <Row>
                  <p>Model name</p>
                </Row>
                <Row>

                  <p>Pastries</p>
                </Row>
                <Row>
                  <p>Reviews</p>
                </Row>
                <Row>
                  <p>Orders</p>
                </Row>
              </Col>
              <Col>
                <p>Records</p>
              </Col>
              <Col>
              </Col>
            </Row>
          </Row> */}
          {pastryList && <List handlePastryForm={handlePastryForm} handleDeletePastry={handleDeletePastry}/>}
          {addPastry && <AddForm />}
        </Col>
      </Row>
  
    </div>
   );
}
 
export default Dashboard;