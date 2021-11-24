import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Temporary = () => {
  const { docs } = useFirestore('pastries');

  return ( 
    <div className="temp">
      {docs.map((doc)=>(
        <div key={doc.id}>
          <img src={doc.url} alt={doc.pastry}/>
        </div>
      ))}
    </div>
   );
}
 
export default Temporary;