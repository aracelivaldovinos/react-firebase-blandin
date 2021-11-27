
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './comps/Contact/ContactForm';
// import AddForm from "./comps/AddForm";
import Homepage from "./comps/Homepage/Homepage";
import AddReview from './comps/Reviews/AddReview';
// import Temporary from "./comps/Temporary";
import HeroImage from "./comps/Homepage/HeroImage";
import Navbar from "./comps/Homepage/NavBar";
import Gallery from "./comps/Gallery/Gallery";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage /> 
      {/* <AddForm /> */}
      <Router>
        <Routes>
        {/* <Temporary /> */}
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/review" element={<AddReview />}/>
        <Route exact path="/contact" element={<ContactForm />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
