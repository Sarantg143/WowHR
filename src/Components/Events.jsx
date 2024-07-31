import event1 from "../assets/Images/events1.jpg";
import event2 from "../assets/Images/events2.jpg";
import event3 from "../assets/Images/events3.jpg";
import { useState, useRef, useEffect } from "react";

const Events = () => {
  const eventData = [
    {
      image: event1,
      heading: "WOW HR",
      date: "29 NOV, 2023",
      description:
        "A well awaited Masterclass on hashtag#hraudit is on our way soon!",
    },
    {
      image: event2,
      heading: "WOW HR",
      date: "24 FEB, 2024",
      description:
        "We had our first HR Learning Marathon in Hyderabad gathering HR professionals from diversified industrial segments.",
    },
    {
      image: event3,
      heading: "WOW HR",
      date: "29 JUL, 2024",
      description:
        "Join us for an enlightening conversation at our upcoming HR Conclave: A Dialogue with Visually Impaired Talent.",
    },
    {
      image: event1,
      heading: "WOW HR",
      date: "29 NOV, 2023",
      description:
        "A well awaited Masterclass on hashtag#hraudit is on our way soon!",
    },
    {
      image: event2,
      heading: "WOW HR",
      date: "24 FEB, 2024",
      description:
        "We had our first HR Learning Marathon in Hyderabad gathering HR professionals from diversified industrial segments.",
    },
    {
      image: event3,
      heading: "WOW HR",
      date: "29 JUL, 2024",
      description:
        "Join us for an enlightening conversation at our upcoming HR Conclave: A Dialogue with Visually Impaired Talent.",
    },
  ];

  // SLIDeeer

  const itemsPerPageEvents = 3;

  const [currentIndexEvents, setCurrentIndexEvents] = useState(0);
  const [isHoveredEvents, setIsHoveredEvents] = useState(false);
  const intervalRefEvents = useRef(null);

  const totalItemsEvents = eventData.length;

  const handleNextEvents = () => {
    if (currentIndexEvents < totalItemsEvents - itemsPerPageEvents) {
      setCurrentIndexEvents(currentIndexEvents + 1);
    }
  };

  const handlePrevEvents = () => {
    if (currentIndexEvents > 0) {
      setCurrentIndexEvents(currentIndexEvents - 1);
    }
  };

  useEffect(() => {
    const startSlideshowEvents = () => {
      intervalRefEvents.current = setInterval(() => {
        setCurrentIndexEvents((prevIndex) => {
          if (prevIndex < totalItemsEvents - itemsPerPageEvents) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 3000);
    };

    if (!isHoveredEvents) {
      startSlideshowEvents();
    }

    return () => clearInterval(intervalRefEvents.current);
  }, [isHoveredEvents, totalItemsEvents, itemsPerPageEvents]);

  // SLIDeeer

  return (
    <section
      id="events"
      className="flex flex-col items-center justify-between h-screen px-5 overflow-hidden bg-green-600"
    >
      <div className="max-w-xl bg-red-200">
        <div className="mb-8 text-2xl font-semibold leading-tight text-center bg-green-300 font-jost">
          EVENTS
        </div>
        <div className="bg-green-400 text-base font-semibold text-center tracking-wide leading-[1.55] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div
        className="relative h-[78%] w-[76%] bg-blue-400 overflow-hidden"
        onMouseEnter={() => setIsHoveredEvents(true)}
        onMouseLeave={() => setIsHoveredEvents(false)}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out bg-red-900 "
          style={{
            transform: `translateX(-${
              currentIndexEvents * (100 / itemsPerPageEvents)
            }%)`,
          }}
        >
          {eventData.map((event, index) => (
            <div
              key={index}
              className="bg-green-300 w-[20rem] mx-[.6rem] transition-transform duration-500 transform"
              style={{ transition: "transform 0.5s ease-in-out" }}
            >
              <img
                src={event.image}
                alt={`event${index + 1}`}
                className="object-cover min-w-[20rem] min-h-[20rem] max-w-[20rem] max-h-[20rem] w-[20rem] h-[20rem] "
              />
              <div className="bg-blue-600 h-[9rem] p-5 space-y-5">
                <div className="flex items-center gap-5 text-[.65rem] bg-red-200">
                  <div className="p-1 px-4 font-bold text-white bg-red-300 rounded-r-full">
                    {event.heading}
                  </div>
                  <div className="flex items-center gap-2 font-bold text-gray-500 bg-red-400">
                    <span className="relative text-xl font-bold tracking-tighter top-[2px] text-defaultBlue">
                      &#8226;
                    </span>{" "}
                    {event.date}
                  </div>
                </div>
                <div className="text-sm font-bold tracking-wide bg-green-200 line-clamp-3">
                  {event.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 flex justify-between px-4 top-1/2">
          {currentIndexEvents > 0 && (
            <button
              className="p-2 text-white bg-gray-800 rounded-full"
              onClick={handlePrevEvents}
            >
              Prev
            </button>
          )}
        </div>

        <div className="absolute right-0 flex justify-between px-4 top-1/2">
          {currentIndexEvents < totalItemsEvents - itemsPerPageEvents && (
            <button
              className="p-2 text-white bg-gray-800 rounded-full"
              onClick={handleNextEvents}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;

// import event1 from "../assets/Images/events1.jpg";
// import event2 from "../assets/Images/events2.jpg";
// import event3 from "../assets/Images/events3.jpg";
// import { useState, useEffect, useRef } from "react";

// const Events = () => {
//   const eventData = [
//     {
//       image: event1,
//       heading: "WOW HR",
//       date: "29 NOV, 2023",
//       description:
//         "A well awaited Masterclass on hashtag#hraudit is on our way soon!",
//     },
//     {
//       image: event2,
//       heading: "WOW HR",
//       date: "24 FEB, 2024",
//       description:
//         "We had our first HR Learning Marathon in Hyderabad gathering HR professionals from diversified industrial segments.",
//     },
//     {
//       image: event3,
//       heading: "WOW HR",
//       date: "29 JUL, 2024",
//       description:
//         "Join us for an enlightening conversation at our upcoming HR Conclave: A Dialogue with Visually Impaired Talent.",
//     },
//     {
//       image: event1,
//       heading: "WOW HR",
//       date: "29 NOV, 2023",
//       description:
//         "A well awaited Masterclass on hashtag#hraudit is on our way soon!",
//     },
//     {
//       image: event2,
//       heading: "WOW HR",
//       date: "24 FEB, 2024",
//       description:
//         "We had our first HR Learning Marathon in Hyderabad gathering HR professionals from diversified industrial segments.",
//     },
//     {
//       image: event3,
//       heading: "WOW HR",
//       date: "29 JUL, 2024",
//       description:
//         "Join us for an enlightening conversation at our upcoming HR Conclave: A Dialogue with Visually Impaired Talent.",
//     },
//   ];

//   const itemsPerPageEvents = 3;

//   const [currentIndexEvents, setCurrentIndexEvents] = useState(0);
//   const [isHoveredEvents, setIsHoveredEvents] = useState(false);
//   const intervalRefEvents = useRef(null);

//   const totalItemsEvents = eventData.length;

//   const handleNextEvents = () => {
//     if (currentIndexEvents < totalItemsEvents - itemsPerPageEvents) {
//       setCurrentIndexEvents(currentIndexEvents + 1);
//     }
//   };

//   const handlePrevEvents = () => {
//     if (currentIndexEvents > 0) {
//       setCurrentIndexEvents(currentIndexEvents - 1);
//     }
//   };

//   useEffect(() => {
//     const startSlideshowEvents = () => {
//       intervalRefEvents.current = setInterval(() => {
//         setCurrentIndexEvents((prevIndex) => {
//           if (prevIndex < totalItemsEvents - itemsPerPageEvents) {
//             return prevIndex + 1;
//           } else {
//             return 0;
//           }
//         });
//       }, 3000);
//     };

//     if (!isHoveredEvents) {
//       startSlideshowEvents();
//     }

//     return () => clearInterval(intervalRefEvents.current);
//   }, [isHoveredEvents, totalItemsEvents, itemsPerPageEvents]);

//   return (
//     <section
//       id="events"
//       className="flex flex-col items-center justify-between h-screen px-5 overflow-hidden bg-green-600"
//     >
//       <div className="max-w-xl bg-red-200">
//         <div className="mb-8 text-2xl font-semibold leading-tight text-center bg-green-300 font-jost">
//           EVENTS
//         </div>
//         <div className="bg-green-400 text-base font-semibold text-center tracking-wide leading-[1.55] mx-auto">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </div>
//       </div>
//       <div
//         className="relative items-center justify-center overflow-hidden bg-blue-300 "
//         onMouseEnter={() => setIsHoveredEvents(true)}
//         onMouseLeave={() => setIsHoveredEvents(false)}
//       >
//         <div
//           className="flex gap-8 transition-transform duration-300 ease-in-out bg-red-900"
//           style={{
//             transform: `translateX(-${currentIndexEvents * (100 / itemsPerPageEvents)}%)`,
//           }}
//         >
//           {" "}
//           {eventData.map((event, index) => (
//             <div
//               key={index}
//               className="bg-green-300 w-[20rem] transition-transform duration-500 transform"
//               style={{ transition: "transform 0.5s ease-in-out" }}
//             >
//               <img
//                 src={event.image}
//                 alt={`event${index + 1}`}
//                 className="object-cover w-full h-full"
//               />
//               <div className="bg-blue-600 h-[9rem] p-5 space-y-5">
//                 <div className="flex items-center gap-5 text-[.65rem] bg-red-200">
//                   <div className="p-1 px-4 font-bold text-white bg-red-300 rounded-r-full">
//                     {event.heading}
//                   </div>
//                   <div className="flex items-center gap-2 font-bold text-gray-500 bg-red-400">
//                     <span className="relative text-xl font-bold tracking-tighter top-[2px] text-defaultBlue">
//                       &#8226;
//                     </span>{" "}
//                     {event.date}
//                   </div>
//                 </div>
//                 <div className="text-sm font-bold tracking-wide bg-green-200 line-clamp-3">
//                   {event.description}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="absolute left-0 flex justify-between px-4 top-1/2">
//           {currentIndexEvents > 0 && (
//             <button
//               className="p-2 text-white bg-gray-800 rounded-full"
//               onClick={handlePrevEvents}
//             >
//               Prev
//             </button>
//           )}
//         </div>

//         <div className="absolute right-0 flex justify-between px-4 top-1/2">
//           {currentIndexEvents < totalItemsEvents - itemsPerPageEvents && (
//             <button
//               className="p-2 text-white bg-gray-800 rounded-full"
//               onClick={handleNextEvents}
//             >
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;
