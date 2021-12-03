import { Col, Row } from 'react-bootstrap';
import List from './List';
import { useState } from 'react';
import AddForm from './AddForm';
import { projectFirestore } from '../../firebase/config';
import useFirestore from '../../hooks/useFirestore';
import Modal from './Modal';
import DashboardNav from './DashboardNav';
import Reviews from './Reviews';

const Dashboard = () => {
  const {pastry} = useFirestore('pastries')
  const {reviews} = useFirestore('Reviews')

  const [dashboardNav, setDashboardNav] = useState(true);
  const [pastryList, setPastryList] = useState(false);
  const [reviewsComp, setReviewsComp] = useState(false);
  const [orders, setOrders] = useState(false);

  const [filterPastry, setFilterPastry] = useState(null);
  const [pastryImg, setPastryImg] = useState(true);
  const [addPastry, setAddPastry] = useState(false);


  const handleDeletePastry = (id) =>{
    projectFirestore.collection('pastries').doc(id).delete();
  };

  const handleDeleteReview = (id) =>{
    projectFirestore.collection('Reviews').doc(id).delete();
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

  const handlePastryForm = () =>{
    setPastryList(false);
    setDashboardNav(false);
    setAddPastry(true);
  };

  const handleDashboard = () =>{
    setPastryList(false);
    setDashboardNav(true);
    setAddPastry(false);
    setReviewsComp(false);
  };

  const handleReviews = () =>{
    setPastryList(false);
    setDashboardNav(false);
    setAddPastry(false);
    setReviewsComp(true);
  };
 


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
            reviews={reviews}
            handleReviews={handleReviews}
            />}
          {pastryList && 
            <List
             handlePastryForm={handlePastryForm} 
             handleDeletePastry={handleDeletePastry} 
             handleModal={handleModal}
             handleDashboard={handleDashboard}
            />}
          {addPastry && 
          <AddForm 
            handlePastries={handlePastries} 
            handleDashboard={handleDashboard}
          />}
          {/* {pastryImg && filterPastry && <Modal filterPastry={filterPastry} />} */}
          {reviewsComp && <Reviews reviews={reviews}  handleDashboard={handleDashboard} handleDeleteReview={handleDeleteReview}/>}
        </Col>
      </Row>
  
    </div>
   );
}
 
export default Dashboard;