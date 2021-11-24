import React from 'react';
import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';

const ProgressBar = ({file, setFile, celebrationType, pastryType, description}) => {
  const { url, progress } = useStorage(file, celebrationType, pastryType, description);
  
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return ( 
    <div className="progress-bar">
      progress
    </div>
   );
}
 
export default ProgressBar;