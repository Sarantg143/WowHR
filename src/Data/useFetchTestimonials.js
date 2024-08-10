import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";

const useFetchTestimonials = () => {
  const [loading, setLoading] = useState(true);
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const testimonialsCollectionRef = collection(db, "testimonials");
        const newData = await getDocs(testimonialsCollectionRef);
        setTestimonialsData(
          newData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { testimonialsData, loading };
};

export default useFetchTestimonials;
