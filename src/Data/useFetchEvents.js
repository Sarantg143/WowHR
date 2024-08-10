import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";

const useFetchEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const eventCollectionRef = collection(db, "events");
        const newData = await getDocs(eventCollectionRef);
        setEventsData(
          newData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.error("Error fetching events data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [eventsData]);

  return { eventsData, loading };
};

export default useFetchEvents;
// {
//     "date": "19 Aug 2024",
//     "type": "hi",
//     "image": "https://firebasestorage.googleapis.com/v0/b/wow-hr-4f569.appspot.com/o/events%2FxZQU42eK_400x400.jpg?alt=media&token=04d22c68-c617-490a-994e-5d7c7da84b2a",
//     "description": "event",
//     "id": "1vXWDXPGhzL9tbSehIOc"
// }
