import { useState, useEffect, useRef } from "react";
import pic1 from "../assets/Images/pic1.jpg";
import pic2 from "../assets/Images/pic2.jpg";
import pic3 from "../assets/Images/pic3.jpg";
import roundStar from "../assets/SVG/roundStar.svg";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const LeaderShip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedType, setSelectedType] = useState("mentor");

  const cities = ["Chennai", "Coimbatore"];

  const handleOptionClick = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const teamMembers = [
    {
      name: "Calvin Durant1",
      position: "Chief Executive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic1,
      links: {
        fbLink: "https://facebook.com/calvin",
        instaLink: "https://instagram.com/calvin",
        ytLink: "https://youtube.com/calvin",
        twitterLink: "https://twitter.com/calvin",
      },
      type: "core team",
    },
    {
      name: "Amely Norwood2",
      position: "Law Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic2,
      links: {
        fbLink: "https://facebook.com/amely",
        instaLink: "https://instagram.com/amely",
        ytLink: "https://youtube.com/amely",
        twitterLink: "https://twitter.com/amely",
      },
      type: "core team",
    },
    {
      name: "Caitlin Thomas3",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "mentor",
    },
    {
      name: "Amely Norwood4",
      position: "Law Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic2,
      links: {
        fbLink: "https://facebook.com/amely",
        instaLink: "https://instagram.com/amely",
        ytLink: "https://youtube.com/amely",
        twitterLink: "https://twitter.com/amely",
      },
      type: "mentor",
    },
    {
      name: "Caitlin Thomas5",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "core team",
    },
    {
      name: "Caitlin Thomas6",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "core team",
    },
    {
      name: "Calvin Durant1",
      position: "Chief Executive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic1,
      links: {
        fbLink: "https://facebook.com/calvin",
        instaLink: "https://instagram.com/calvin",
        ytLink: "https://youtube.com/calvin",
        twitterLink: "https://twitter.com/calvin",
      },
      type: "mentor",
    },
    {
      name: "Amely Norwood2",
      position: "Law Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic2,
      links: {
        fbLink: "https://facebook.com/amely",
        instaLink: "https://instagram.com/amely",
        ytLink: "https://youtube.com/amely",
        twitterLink: "https://twitter.com/amely",
      },
      type: "mentor",
    },
    {
      name: "Caitlin Thomas3",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "core team",
    },
    {
      name: "Amely Norwood4",
      position: "Law Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic2,
      links: {
        fbLink: "https://facebook.com/amely",
        instaLink: "https://instagram.com/amely",
        ytLink: "https://youtube.com/amely",
        twitterLink: "https://twitter.com/amely",
      },
      type: "core team",
    },
    {
      name: "Caitlin Thomas5",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "mentor",
    },
    {
      name: "Caitlin Thomas6",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "mentor",
    },
    {
      name: "Calvin Durant1",
      position: "Chief Executive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic1,
      links: {
        fbLink: "https://facebook.com/calvin",
        instaLink: "https://instagram.com/calvin",
        ytLink: "https://youtube.com/calvin",
        twitterLink: "https://twitter.com/calvin",
      },
      type: "core team",
    },
    {
      name: "Amely Norwood2",
      position: "Law Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic2,
      links: {
        fbLink: "https://facebook.com/amely",
        instaLink: "https://instagram.com/amely",
        ytLink: "https://youtube.com/amely",
        twitterLink: "https://twitter.com/amely",
      },
      type: "core team",
    },
    {
      name: "Caitlin Thomas3",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "mentor",
    },
    {
      name: "Amely Norwood4",
      position: "Law Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic2,
      links: {
        fbLink: "https://facebook.com/amely",
        instaLink: "https://instagram.com/amely",
        ytLink: "https://youtube.com/amely",
        twitterLink: "https://twitter.com/amely",
      },
      type: "mentor",
    },
    {
      name: "Caitlin Thomas5",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "core team",
    },
    {
      name: "Caitlin Thomas6",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "core team",
    },
    {
      name: "Calvin Durant1",
      position: "Chief Executive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic1,
      links: {
        fbLink: "https://facebook.com/calvin",
        instaLink: "https://instagram.com/calvin",
        ytLink: "https://youtube.com/calvin",
        twitterLink: "https://twitter.com/calvin",
      },
      type: "mentor",
    },
    {
      name: "Amely Norwood2",
      position: "Law Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic2,
      links: {
        fbLink: "https://facebook.com/amely",
        instaLink: "https://instagram.com/amely",
        ytLink: "https://youtube.com/amely",
        twitterLink: "https://twitter.com/amely",
      },
      type: "mentor",
    },
    {
      name: "Caitlin Thomas3",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "core team",
    },
    {
      name: "Amely Norwood4",
      position: "Law Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic2,
      links: {
        fbLink: "https://facebook.com/amely",
        instaLink: "https://instagram.com/amely",
        ytLink: "https://youtube.com/amely",
        twitterLink: "https://twitter.com/amely",
      },
      type: "core team",
    },
    {
      name: "Caitlin Thomas5",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Chennai",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "mentor",
    },
    {
      name: "Caitlin Thomas6",
      position: "Lead Consultant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      city: "Coimbatore",
      image: pic3,
      links: {
        fbLink: "https://facebook.com/caitlin",
        instaLink: "https://instagram.com/caitlin",
        ytLink: "https://youtube.com/caitlin",
        twitterLink: "https://twitter.com/caitlin",
      },
      type: "mentor",
    },
  ];

  const filteredMembers = teamMembers.filter((member) => {
    return (
      (selectedCity === "All" || member.city === selectedCity) &&
      (selectedType === "All" || member.type === selectedType)
    );
  });

  // SLIDeeer

  const itemsPerPageEvents = 3;

  const [currentIndexEvents, setCurrentIndexEvents] = useState(0);
  const [isHoveredEvents, setIsHoveredEvents] = useState(false);
  const intervalRefEvents = useRef(null);

  const totalItemsEvents = filteredMembers.length;

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
      id="leadership"
      className="flex flex-col items-end justify-between h-screen overflow-hidden text-white bg-blue-600"
    >
      <div className="relative w-full h-24 bg-white">
        <img
          src={roundStar}
          alt="roundStar"
          className="absolute left-[45%] top-16 scale-125"
        />
      </div>
      <div className="flex w-full px-5 mx-auto mb-16 bg-green-400">
        <div className="bg-red-300 w-[37%] px-32 pr-28 flex flex-col my-auto ">
          <div className="relative inline-block text-2xl font-semibold bg-blue-500 mb-7 font-jost">
            LEADERSHIP
            <span className="custom-border"></span>
          </div>
          <div className="text-base font-semibold tracking-wide leading-[1.6] mb-7 bg-red-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div className="relative min-w-[65%] w-[65%] ">
            <div
              className={`px-10 py-2 font-semibold text-white bg-red-600 outline-none cursor-pointer
    select-selected ${isOpen ? "select-arrow-active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedCity}
            </div>
            <div
              className={`select-items absolute left-0 right-0 bg-red-600 ${
                isOpen ? "select-show" : "select-hide"
              }`}
            >
              {cities.map((city) => (
                <div
                  key={city}
                  className="px-10 py-2 font-semibold text-white cursor-pointer hover:bg-red-700"
                  onClick={() => handleOptionClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-blue-100 w-[63%] ">
          <div className="flex mb-3 bg-green-700 gap-9">
            <button
              className={`pb-1 text-lg font-medium text-left  border-b-2 border-red-900 min-w-64 font-jost ${
                selectedType === "mentor" ? "bg-green-200" : "bg-red-300"
              } `}
              onClick={() => handleTypeClick("mentor")}
            >
              MENTOR
            </button>
            <button
              className={`pb-1 text-lg font-medium text-left  border-b-2 border-red-900 min-w-64 font-jost ${
                selectedType === "core team" ? "bg-green-200" : "bg-red-300"
              } `}
              onClick={() => handleTypeClick("core team")}
            >
              CORE TEAM
            </button>
          </div>
          <div
            className="relative items-center justify-center overflow-hidden bg-blue-300 "
            onMouseEnter={() => setIsHoveredEvents(true)}
            onMouseLeave={() => setIsHoveredEvents(false)}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out bg-red-900 gap-9 "
              style={{
                transform: `translateX(-${
                  currentIndexEvents * (103.65 / itemsPerPageEvents)
                }%)`,
              }}
            >
              {filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-64 overflow-hidden bg-transparent group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-64 mb-6 h-[21rem] transition-all shadow-lg duration-300 group-hover:blur-sm"
                  />
                  <div className="absolute shadow-lg bottom-0 left-0 w-[85%] mx-auto right-0 p-4 py-5 text-white transition-transform duration-300 ease-in-out bg-darkBlue border-b-4  translate-y-full  group-hover:translate-y-0">
                    <h3 className="mb-1 text-lg font-semibold text-center line-clamp-4">
                      {member.name}
                    </h3>
                    <p className="text-[.6rem] mb-5 text-center font-medium line-clamp-3">
                      - {member.position} -
                    </p>
                    <p className="text-[.55rem] leading-relaxed line-clamp-6">
                      {member.description}
                    </p>
                    <div className="flex justify-between items-center mx-auto mt-4 w-[80%]">
                      {member.links.fbLink && (
                        <a
                          href={member.links.fbLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 w-7"
                        >
                          <Facebook className="w-full h-full text-white" />
                        </a>
                      )}
                      {member.links.instaLink && (
                        <a
                          href={member.links.instaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 w-7"
                        >
                          <Instagram className="w-full h-full text-white" />
                        </a>
                      )}
                      {member.links.ytLink && (
                        <a
                          href={member.links.ytLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 w-7"
                        >
                          <Youtube className="w-full h-full text-white" />
                        </a>
                      )}
                      {member.links.twitterLink && (
                        <a
                          href={member.links.twitterLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 w-7"
                        >
                          <Twitter className="w-full h-full text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute shadow-lg bottom-0 left-0 w-[85%] mx-auto text-center right-0 p-4 text-white transition-all duration-300 border-b-4 bg-darkBlue group-hover:opacity-0 translate-y-0 group-hover:translate-y-full">
                    <h3 className="mb-1 text-lg font-semibold line-clam-4">
                      {member.name}
                    </h3>
                    <p className="text-[.6rem] font-medium line-clam-3">
                      - {member.position} -
                    </p>
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
        </div>
      </div>
    </section>
  );
};
export default LeaderShip;
