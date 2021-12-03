import { Col, Row } from 'react-bootstrap';
import List from './List';
import { useState } from 'react';
import AddForm from './AddForm';
import { projectFirestore } from '../../firebase/config';
import useFirestore from '../../hooks/useFirestore';
import Modal from './Modal';
import DashboardNav from './DashboardNav';

const Dashboard = () => {
  const {pastry} = useFirestore('pastries')

  const [dashboardNav, setDashboardNav] = useState(true);
  const [pastryList, setPastryList] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [orders, setOrders] = useState(false);

  const [filterPastry, setFilterPastry] = useState(null);
  const [pastryImg, setPastryImg] = useState(true);
  const [addPastry, setAddPastry] = useState(false);

  const handlePastryForm = () =>{
    setPastryList(false);
    setDashboardNav(false);
    setAddPastry(true);
  };

  const handleDeletePastry = (id) =>{
    projectFirestore.collection('pastries').doc(id).delete();
  };

  const handleModal = (id) =>{
    const filteredPastry = pastry.filter((item)=>(item.id === id));
    setFilterPastry(filteredPastry);
    setPastryImg(true);
  };

  const handlePastries = () => {
    setDashboardNav(false);
    setPastryList(true);
  }


  return ( 
    <div className="dashboard" style={{backgroundColor: "#fff"}}>
      <Row>
        <Col sm={4}>
        </Col>
        <Col sm={8}>
          {dashboardNav && 
            <DashboardNav 
            handlePastries={handlePastries} 
            pastry={pastry}
            />}
          {pastryList && 
            <List
             handlePastryForm={handlePastryForm} 
             handleDeletePastry={handleDeletePastry} 
             handleModal={handleModal}
            />}
          {addPastry && <AddForm />}
          {/* {pastryImg && filterPastry && <Modal filterPastry={filterPastry} />} */}
        </Col>
      </Row>
  
    </div>
   );
}
 
export default Dashboard;