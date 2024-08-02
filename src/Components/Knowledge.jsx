import mini1 from "../assets/Images/knowledgeMini1.png";
import mini2 from "../assets/Images/knowledgeMini2.png";
import mini3 from "../assets/Images/knowledgeMini3.png";
import useScreenSize from "./useScreenSize";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Knowledge = () => {
  const knowledgeData = [
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "BUILDING & SUSTAINING A CAREER IN HR",
      description:
        "Why everyone on your sales team will benefit from our app's killer features.",
      authorImg: mini1,
      linkedInLink: "https://linkedin.com/",
      authorName: "Kathryn Murphy",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/pWNb26syJaY",
      title: "Pep Talk Series 2 L&D Models for Hybrid Workforce",
      description:
        "The teams best prepared for change use modern digital communication tools, feel comfortable learning new ones and continually adapt how they work.",
      authorImg: mini2,
      linkedInLink: "https://linkedin.com/",
      authorName: "Devon Lane",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/2Aa-es8Os1o",
      title: "New Logo Launch",
      description:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      authorImg: mini3,
      linkedInLink: "https://linkedin.com/",
      authorName: "Theresa Webb",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "WOW HR Reaches the height.",
      description:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      authorImg: mini3,
      linkedInLink: "https://linkedin.com/",
      authorName: "Theresa Webb",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "WOW HR Reaches the height.",
      description:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      authorImg: mini3,
      linkedInLink: "https://linkedin.com/",
      authorName: "Theresa Webb",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "WOW HR Reaches the height.",
      description:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      authorImg: mini3,
      linkedInLink: "https://linkedin.com/",
      authorName: "Theresa Webb",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 1",
      description: "spotify 1 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 2",
      description: "spotify 2 description",
    },
    {
      type: "podcast",
      spotifySrc:
        "https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og",
      title: "spotify 1",
      description: "spotify 3 description",
    },
    {
      type: "LearningPrograms",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "LearningPrograms 1",
      description: "LearningPrograms 1",
    },
    {
      type: "LearningPrograms",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "LearningPrograms 2",
      description: "LearningPrograms 2",
    },
    {
      type: "LearningPrograms",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "LearningPrograms 3",
      description: "LearningPrograms 3",
    },
  ];

  const [selectedType, setSelectedType] = useState("pepTalks");

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setCurrentIndexHub(0);
  };

  const filteredDataHub = knowledgeData.filter(
    (item) => item.type === selectedType
  );

  // Sliding
  const { width } = useScreenSize();
  const isSmallScreen = width < 640;
  const itemsPerPageHub = !isSmallScreen ? 4 : 2;

  const [currentIndexHub, setCurrentIndexHub] = useState(0);
  const [isHoveredHub, setIsHoveredHub] = useState(false);
  const intervalRefHub = useRef(null);

  const totalItemsHub = filteredDataHub.length;

  const handleNextHub = () => {
    if (currentIndexHub < totalItemsHub - itemsPerPageHub) {
      setCurrentIndexHub(currentIndexHub + 1);
    }
  };

  const handlePrevHub = () => {
    if (currentIndexHub > 0) {
      setCurrentIndexHub(currentIndexHub - 1);
    }
  };

  useEffect(() => {
    const startSlideshowHub = () => {
      intervalRefHub.current = setInterval(() => {
        setCurrentIndexHub((prevIndex) => {
          if (prevIndex < totalItemsHub - itemsPerPageHub) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 3000);
    };

    if (!isHoveredHub) {
      startSlideshowHub();
    }

    return () => clearInterval(intervalRefHub.current);
  }, [isHoveredHub, totalItemsHub, itemsPerPageHub, selectedType]);

  // Sliding

  return (
    <section
      id="knwoledge"
      className="flex flex-col h-full p-5 my-0 overflow-hidden bg-white cursor-default xl:mt-14 xl:my-0 md:my-10 xl:p-0 xl:pl-40 xl:pr-24 xl:h-screen "
    >
      <div
        className="max-w-2xl mb-5 md:mb-10 xl:mb-10"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div className="mb-3 text-xl font-semibold leading-tight text-left md:text-3xl xl:text-3xl xl:mb-9 font-jost">
          KNOWLEGDE HUB
        </div>
        <div className="text-sm xl:text-lg font-semibold text-left md:leading-[1.7] md:text-xl tracking-wider xl:leading-[1.55] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
      </div>
      <div
        className="flex mb-3 xl:mb-4 md:mb-2 gap-0 justify-between xl:justify-normal xl:gap-9 xl:mx-[.15rem]"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <button
          className={`pb-2 text-xs  pt-1 md:text-2xl xl:text-xl  font-medium text-left border-b-2 hover:text-gray-700 transition-all duration-300 hover:border-gray-700  min-w-20 xl:min-w-40 xl:w-72 md:w-72 font-jost ${
            selectedType === "pepTalks"
              ? "text-black border-black"
              : "text-gray-400 border-gray-400"
          }`}
          onClick={() => handleTypeClick("pepTalks")}
        >
          Pep Talks
        </button>
        <button
          className={`pb-2 text-xs  pt-1 md:text-2xl xl:text-xl  font-medium text-left  border-b-2 hover:text-gray-700 transition-all duration-300 hover:border-gray-700  min-w-20 xl:min-w-40 xl:w-72 md:w-72 font-jost ${
            selectedType === "podcast"
              ? "text-black border-black"
              : "text-gray-400 border-gray-400"
          }`}
          onClick={() => handleTypeClick("podcast")}
        >
          Podcast
        </button>
        <button
          className={`pb-2 text-xs px-1 pt-1 md:text-2xl xl:text-xl  font-medium text-left  border-b-2 hover:text-gray-700 transition-all duration-300 hover:border-gray-700  min-w-20 xl:min-w-40 xl:w-72 md:w-72 font-jost ${
            selectedType === "LearningPrograms"
              ? "text-black border-black"
              : "text-gray-400 border-gray-400"
          }`}
          onClick={() => handleTypeClick("LearningPrograms")}
        >
          Learning Programs
        </button>
      </div>

      <div
        className="relative px-[.1rem] xl:px-[.15rem] overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="750"
      >
        {selectedType === "pepTalks" && (
          <div
            className="flex gap-3 transition-transform duration-300 ease-in-out xl:gap-9 md:gap-9"
            style={{
              transform: `translateX(-${
                currentIndexHub * (103 / itemsPerPageHub)
              }%)`,
            }}
          >
            {filteredDataHub.map((x, i) => (
              <div
                key={i}
                className="w-40 my-4 bg-white shadow-[0_4px_10px_rgb(0,0,0,0.12)] rounded-xl xl:w-72 md:w-72"
                onMouseEnter={() => setIsHoveredHub(true)}
                onMouseLeave={() => setIsHoveredHub(false)}
              >
                <div className="w-40 h-[7rem] xl:h-[13rem] md:h-[13rem] xl:w-72 md:w-72 rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={x.videoSrc}
                    frameBorder="2"
                    className="rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col h-40 gap-2 p-2 pt-4 xl:p-3 xl:gap-3 xl:h-52">
                  <div className="text-xs xl:text-xl md:text-lg font-jost leading-[1.1] xl:leading-[1.1] font-[500] text-defaultBlue line-clamp-3 uppercase">
                    {x.title}
                  </div>
                  <div className="text-[.65rem] xl:text-xs tracking-wide font-bold leading-[1.1] xl:leading-[1.1]  line-clamp-4">
                    {x.description}
                  </div>
                  <a
                    className="flex items-center gap-2 mt-auto "
                    href={x.linkedInLink}
                  >
                    <img
                      src={x.authorImg}
                      alt="authorImg"
                      className="rounded-full w-7 h-7 xl:w-9 xl:h-9"
                    />
                    <div className="text-[.65rem] xl:text-xs tracking-wide font-bold text-gray-500 ">
                      {x.authorName}
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedType === "podcast" && (
          <div
            className="flex gap-6 px-5 transition-transform duration-300 ease-in-out xl:px-0 xl:gap-9 md:gap-9"
            style={{
              transform: `translateX(-${
                currentIndexHub *
                ((isSmallScreen ? 188 : 103) / itemsPerPageHub)
              }%)`,
            }}
          >
            {filteredDataHub.map((x, i) => (
              <div
                key={i}
                className="bg-white my-4 shadow-[0_4px_10px_rgb(0,0,0,0.2)] rounded-lg w-72"
                onMouseEnter={() => setIsHoveredHub(true)}
                onMouseLeave={() => setIsHoveredHub(false)}
              >
                <div className="p-2 w-72 h-28 xl:h-48 md:h-48">
                  <iframe
                    src="https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <div className="flex flex-col h-24 gap-2 p-2 xl:gap-3 xl:p-3 xl:h-32">
                  <div className="text-sm xl:text-xl md:text-lg  font-jost leading-[1.1] xl:leading-[1.1] font-[500] text-defaultBlue line-clamp-2 uppercase">
                    {x.title}
                  </div>
                  <div className="text-xs xl:text-sm leading-[1.4] font-bold line-clamp-3">
                    {x.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedType === "LearningPrograms" && (
          <div
            className="flex gap-3 transition-transform duration-300 ease-in-out xl:gap-9 md:gap-9"
            style={{
              transform: `translateX(-${
                currentIndexHub * (103 / itemsPerPageHub)
              }%)`,
            }}
          >
            {filteredDataHub.map((x, i) => (
              <div
                key={i}
                className="w-40 my-4 bg-white shadow-[0_4px_10px_rgb(0,0,0,0.2)] rounded-xl xl:w-72 md:w-72"
                onMouseEnter={() => setIsHoveredHub(true)}
                onMouseLeave={() => setIsHoveredHub(false)}
              >
                <div className="w-40 h-24 xl:h-48 md:h-48 xl:w-72 md:w-72">
                  <iframe
                    width="100%"
                    height="100%"
                    src={x.videoSrc}
                    frameBorder="0"
                    className="rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col h-32 gap-3 p-3 ">
                  <div className="text-sm xl:text-xl md:text-lg font-jost leading-[1.1] xl:leading-[1.1] font-[500] text-defaultBlue line-clamp-2 uppercase">
                    {x.title}
                  </div>
                  <div className="text-xs xl:text-sm leading-[1.4] font-bold line-clamp-3">
                    {x.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="absolute left-0 flex justify-between px-4 xl:-left-[7px] top-1/2">
          {currentIndexHub > 0 && (
            <button
              className="p-2 transition-all bg-white border-2 rounded-full shadow-lg xl:border-l-0 xl:rounded-l-none xl:px-4 xl:scale-125 border-darkBlue hover:bg-lightBlue hover:text-white xl:hover:ml-[2.5px] xl:hover:px-6 text-darkBlue hover:border-white"
              onClick={handlePrevHub}
            >
              <ChevronLeft />
            </button>
          )}
        </div>
        <div className="absolute right-0 flex justify-between px-4 xl:-right-[7px] top-1/2">
          {currentIndexHub < totalItemsHub - itemsPerPageHub && (
            <button
              className="p-2 transition-all bg-white border-2 rounded-full shadow-lg xl:border-r-0 xl:rounded-r-none xl:px-4 xl:scale-125 border-darkBlue hover:bg-lightBlue hover:text-white xl:hover:px-6 xl:hover:mr-[2.5px] text-darkBlue hover:border-white"
              onClick={handleNextHub}
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
