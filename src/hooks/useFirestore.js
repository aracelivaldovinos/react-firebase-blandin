import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const [pastry, setPastry] = useState([])
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    const unsub = projectFirestore.collection(collection)
    // .orderBy('createdAt', 'desc')
    .onSnapshot((snap)=>{
      // let documents =[];
      let pastries = [];
      let reviews = [];
      snap.forEach(doc =>{
        if (doc.data().hasOwnProperty('rating')){
          reviews.push({...doc.data(), id: doc.id})
        }
        else if (doc.data().hasOwnProperty('pastry')){
          pastries.push({...doc.data(), id: doc.id})
        }
      });
      setReviews(reviews)
      setPastry(pastries)
    });

    return () => unsub();

  }, [collection])
  return { pastry, reviews }
}
 
export default useFirestore;