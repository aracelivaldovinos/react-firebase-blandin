
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import useFirestore from './hooks/useFirestore';
import ContactForm from './comps/Contact/ContactForm';
// import AddForm from "./comps/AddForm";
import Homepage from "./comps/Homepage/Homepage";
import AddReview from './comps/Reviews/AddReview';
import HeroImage from "./comps/Homepage/HeroImage";
import Navbar from "./comps/Homepage/NavBar";
import Footer from "./comps/Homepage/Footer";
import Gallery from "./comps/Gallery/Gallery";
import FilteredGallery from './comps/Gallery/FilteredGallery';
import Menu from './comps/Menu/Menu';
import Dashboard from './comps/Admin/Dashboard';




function App() {
  const {pastry} = useFirestore('pastries');
  const [filterGallery, setFilterGallery] = useState(null);
  

  const handleHomeIcons = (icon) => {
    let filterPastry = pastry.filter((item)=> item.pastry === icon)
    setFilterGallery(filterPastry);
    console.log(icon)
  };

  return (
    <div className="App" 
    >
      <Navbar/>
      <HeroImage /> 
      {/* <AddForm /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage handleHomeIcons={handleHomeIcons} />}/>
          <Route path="/gallery" element={<Gallery pastry={pastry}/>}/>
          <Route path="/gallery/:icon" element={<FilteredGallery filterGallery={filterGallery}/> }/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/review" element={<AddReview />}/>
          <Route exact path="/contact" element={<ContactForm />}/>
          <Route path="/admin/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
