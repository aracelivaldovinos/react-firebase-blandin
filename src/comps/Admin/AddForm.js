import { useState } from 'react';
import ProgressBar from './ProgressBar';
import {Row, Col} from 'react-bootstrap';
import {FaList} from 'react-icons/fa'
import {AiFillFileAdd} from 'react-icons/ai'

const AddForm = ({handlePastries, handleDashboard}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null)
  const [celebrationType, setCelebrationType]= useState('');
  const [pastryType, setPastryType] = useState('');
  const [description, setDescription] = useState('');

  const types = ['image/png', 'image/jpeg'];


  const handleSubmit = (e) =>{
    e.preventDefault();
    
    let selected = e.target[2].files[0];
    if (selected && types.includes(selected.type)) {
          setFile(selected);
          setError('')
        }else{
          setFile(null);
          setError('Please select an image file (png or jpeg)');
    
        }
    setCelebrationType(e.target.celebration.value);
    setPastryType(e.target.pastry.value);
    setDescription(e.target.description.value);
  }

  return ( 
    <div className="dashboard-nav">
      <h1>Add Pastry</h1>
      <Row>
        <div className="dashboard-div">
          <p><span onClick={handleDashboard}>Dashboard</span> / <span onClick={handlePastries}>Pastries</span> / <span>New</span></p>
        </div>
      </Row>
      <Row>
        <Col sm={2} className="dashboard-col-1-add">
          <div className="dashboard-icon">
            <p onClick={handlePastries}> <FaList/> List</p>
          </div>
        </Col >
        <Col sm={2} className="dashboard-col-2-add">
          <p> <AiFillFileAdd/> Add</p>
        </Col>
        <Col className="dashboard-col-1-add">
        </Col>
      </Row>
      <Row>
      <div className="add-form">
        <form onSubmit={handleSubmit}> 
        <Row>
          <Col sm={2}>
            <label>Celebration Type:</label>
          </Col>
          <Col sm={4}>
            <select
              name="celebration"
              required
              className="form-control"
            >
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Work Event</option>
              <option>Mother's Day\Fatherls Day</option>
              <option>Bachelorette\Bachelor</option>
              <option>Holiday</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <label>Pastry Type</label>
          </Col>
          <Col sm={4}>
          <select
            name="pastry"
            required
            className="form-control"
          >
            <option>Cake</option>
            <option>Cupcakes</option>
            <option>Cupcake cakes</option>
            <option>Number & Letter cakes</option>
            <option>Cakepops</option>
            <option>Cookie cakes</option>
          </select>
          </Col>
        </Row>
          <Row>
          <Col sm={2}>
          <label>Description:</label>
          </Col>
          <Col sm={6} style={{float:"right"}}>
          <textarea
            name="description"
            required
            placeholder="This is the most chocolatiest chocolate cake..."
            style={{height:"50vh", width:"100%"}}
            className="form-control"
          />
          </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <label>Image:</label>
            </Col>
            <Col>
            <input
            type="file"
            style={{paddingTop:"10px"}}
            required
          />
            </Col>
          </Row>
          <div className="submit-form">
            <input type="submit" className="btn btn-info"/>
          </div>
          <div className="output">
            {error && <div className="error"> {error}</div>}
            {file && <div className="file"> {file.name}</div>}
            {file &&
            <ProgressBar 
              file={file} 
              setFile={setFile}
              celebrationType={celebrationType}
              pastryType={pastryType}
              description={description} 
              />}
          </div>
        </form>
      </div>
    </Row>
    </div>
    
   );
}
 
export default AddForm;