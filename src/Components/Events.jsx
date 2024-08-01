import event1 from "../assets/Images/events1.jpg";
import event2 from "../assets/Images/events2.jpg";
import event3 from "../assets/Images/events3.jpg";
import useScreenSize from "./useScreenSize";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const { width } = useScreenSize();
  const isSmallScreen = width < 640;

  const itemsPerPageEvents = !isSmallScreen ? 3 : 1;

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
      }, 30000);
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
      className="flex flex-col items-center justify-center h-screen px-5 overflow-hidden bg-green-600 sm:justify-between"
    >
      <div className="max-w-2xl bg-red-200 mb-7 sm:mb-0">
        <div className="mb-5 text-xl font-semibold leading-tight text-center bg-green-300 sm:text-3xl sm:mb-9 font-jost">
          EVENTS
        </div>
        <div className="bg-green-400 text-sm sm:text-lg font-semibold text-center tracking-wide leading-[1.55] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div
        className="relative sm:h-[73%] w-full sm:w-[81%] bg-blue-400 overflow-hidden"
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
              className="bg-green-300 w-[24rem] mx-[1.45rem] sm:mx-[.5rem] transition-transform duration-500 transform"
              style={{ transition: "transform 0.5s ease-in-out" }}
            >
              <img
                src={event.image}
                alt={`event${index + 1}`}
                className="object-cover  sm:min-w-[24rem] sm:min-h-[24rem] max-w-[24rem] max-h-[24rem] w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] "
              />
              <div className="bg-blue-600 h-[9rem] p-2 sm:p-4 space-y-4">
                <div className="flex items-center gap-2 sm:gap-4 text-[.6rem] sm:text-[.65rem] bg-red-200">
                  <div className="p-1 px-2 font-bold text-white bg-red-300 rounded-r-full sm:px-4">
                    {event.heading}
                  </div>
                  <div className="flex items-center gap-2 font-bold text-gray-500 bg-red-400">
                    <span className="relative text-base sm:text-xl font-bold tracking-tighter top-[2px] text-defaultBlue">
                      &#8226;
                    </span>{" "}
                    {event.date}
                  </div>
                </div>
                <div className="text-sm font-bold bg-green-200 sm:tracking-wide sm:text-base line-clamp-3">
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
              <ChevronLeft />
            </button>
          )}
        </div>

        <div className="absolute right-0 flex justify-between px-4 top-1/2">
          {currentIndexEvents < totalItemsEvents - itemsPerPageEvents && (
            <button
              className="p-2 text-white bg-gray-800 rounded-full"
              onClick={handleNextEvents}
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
