import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    const unsub = projectFirestore.collection(collection)
    // .orderBy('createdAt', 'desc')
    .onSnapshot((snap)=>{
      let documents =[];
      let reviews = [];
      snap.forEach(doc =>{
        if (doc.data().hasOwnProperty('rating')){
          reviews.push({...doc.data(), id: doc.id})
        }
        else {
          documents.push({...doc.data(), id: doc.id})
        }
      });
      setReviews(reviews)
      setDocs(documents)
    });

    return () => unsub();

  }, [collection])
  return { docs, reviews }
}
 
export default useFirestore;