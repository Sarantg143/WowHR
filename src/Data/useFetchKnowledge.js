import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";

const useFetchKnowledge = () => {
  const [knowledgeData, setKnowledgeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const knowledgeCollectionRef = collection(db, "knowledge");
        const newData = await getDocs(knowledgeCollectionRef);
        setKnowledgeData(
          newData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.error("Error fetching knowledge data:", error);
      } finally {
        setLoading(false);
      }
    };

    console.log(knowledgeData);
    getData();
  }, [knowledgeData]);

  return { knowledgeData, loading };
};

export default useFetchKnowledge;

// {
//     "type": "tfyt",
//     "description": "r6t8",
//     "mediaUrl": "https://firebasestorage.googleapis.com/v0/b/wow-hr-4f569.appspot.com/o/knowledge_media%2Fj5MFLVK4_400x400.jpg?alt=media&token=f7ae043f-72f2-4ef9-a516-69ef96a90658",
//     "sourceType": "tyty",
//     "id": "Iws5rh7mRbPF0Sf84UDJ"
// }
