import { useState } from 'react';
import ProgressBar from './ProgressBar';

const AddForm = () => {
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
    <div className="add-form">
        <form onSubmit={handleSubmit}> 
          <select
            name="celebration"
          >
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Work Event</option>
            <option>Mother's Day\Fatherls Day</option>
            <option>Bachelorette\Bachelor</option>
            <option>Holiday</option>
          </select>
          <select
            name="pastry"
          >
            <option>Cake</option>
            <option>Cupcakes</option>
            <option>Cupcake cakes</option>
            <option>Number & Letter cakes</option>
            <option>Cakepops</option>
            <option>Cookie cakes</option>
          </select>
          <input
            type="file"
          />
    
          <textarea
            name="description"
          />
          <input type="submit"/>
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
   );
}
 
export default AddForm;