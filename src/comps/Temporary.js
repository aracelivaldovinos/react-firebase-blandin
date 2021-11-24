import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Temporary = () => {
  const { docs } = useFirestore('pastries');

  console.log(docs)
  return ( 
    <div className="temp">
      temp
    </div>
   );
}
 
export default Temporary;