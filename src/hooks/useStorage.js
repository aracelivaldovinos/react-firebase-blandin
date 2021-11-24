import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file, celebrationType, pastryType, description) => {
  console.log(file)
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('pastries');

    storageRef.put(file).on('state_changed', (snap) =>{
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (error) => {
      setError(error);
    }, async ()=>{
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      collectionRef.add({ url: url, createdAt, celebration: celebrationType, pastry: pastryType, description: description });
      setUrl(url);
    })
  }, [file, celebrationType, pastryType, description]);
  return { progress, error, url};
}
 
export default useStorage;