import mini1 from "../assets/Images/knowledgeMini1.png";
import mini2 from "../assets/Images/knowledgeMini2.png";
import mini3 from "../assets/Images/knowledgeMini3.png";
import { useState, useRef, useEffect } from "react";

const Knowledge = () => {
  const knowledgeData = [
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "BUILDING & SUSTAINING A CAREER IN HR",
      description:
        "Why everyone on your sales team will benefit from our app's killer features.",
      authorImg: mini1,
      authorName: "Kathryn Murphy",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/pWNb26syJaY",
      title: "Pep Talk Series 2 L&D Models for Hybrid Workforce",
      description:
        "The teams best prepared for change use modern digital communication tools, feel comfortable learning new ones and continually adapt how they work.",
      authorImg: mini2,
      authorName: "Devon Lane",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/2Aa-es8Os1o",
      title: "New Logo Launch",
      description:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      authorImg: mini3,
      authorName: "Theresa Webb",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "WOW HR Reaches the height.",
      description:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      authorImg: mini3,
      authorName: "Theresa Webb",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "WOW HR Reaches the height.",
      description:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      authorImg: mini3,
      authorName: "Theresa Webb",
    },
    {
      type: "pepTalks",
      videoSrc: "https://www.youtube.com/embed/zqR8bw8bqdM",
      title: "WOW HR Reaches the height.",
      description:
        "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      authorImg: mini3,
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
  const itemsPerPageHub = 4;

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
      }, 30000);
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
      className="flex flex-col h-screen pr-24 overflow-hidden bg-orange-600 pl-36 "
    >
      <div className="max-w-xl mb-10 bg-red-200">
        <div className="text-2xl font-semibold leading-tight text-left bg-green-300 mb-9 font-jost">
          KNOWLEGDE HUB
        </div>
        <div className="bg-green-400 text-base font-semibold text-left tracking-wide leading-[1.55] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
      </div>
      <div className="flex bg-green-700 mb-9 gap-9">
        <button
          className={`pb-1 text-lg font-medium text-left border-b-2 border-red-900  min-w-64 font-jost ${
            selectedType === "pepTalks" ? "bg-green-200" : "bg-red-300"
          }`}
          onClick={() => handleTypeClick("pepTalks")}
        >
          Pep Talks
        </button>
        <button
          className={`pb-1 text-lg font-medium text-left border-b-2 border-red-900  min-w-64 font-jost ${
            selectedType === "podcast" ? "bg-green-200" : "bg-red-300"
          }`}
          onClick={() => handleTypeClick("podcast")}
        >
          Podcast
        </button>
        <button
          className={`pb-1 text-lg font-medium text-left border-b-2 border-red-900  min-w-64 font-jost ${
            selectedType === "LearningPrograms" ? "bg-green-200" : "bg-red-300"
          }`}
          onClick={() => handleTypeClick("LearningPrograms")}
        >
          Learning Programs
        </button>
      </div>

      <div className="relative px-[.25rem] overflow-hidden bg-red-900">
        {selectedType === "pepTalks" && (
          <div
            className="flex overflow-hidden transition-transform duration-300 ease-in-out bg-red-900 gap-9"
            style={{
              transform: `translateX(-${
                currentIndexHub * (103 / itemsPerPageHub)
              }%)`,
            }}
          >
            {filteredDataHub.map((x, i) => (
              <div
                key={i}
                className="w-64 bg-blue-100 rounded-lg shadow-md"
                onMouseEnter={() => setIsHoveredHub(true)}
                onMouseLeave={() => setIsHoveredHub(false)}
              >
                <div className="w-64 h-40">
                  <iframe
                    width="100%"
                    height="100%"
                    src={x.videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col gap-3 p-3 pt-5 bg-red-300 h-52">
                  <div className="text-lg bg-green-300 font-jost leading-[1.1] font-[500] text-defaultBlue line-clamp-3 uppercase">
                    {x.title}
                  </div>
                  <div className="text-[.65rem] leading-[1.4] bg-green-700 line-clamp-4">
                    {x.description}
                  </div>
                  <div className="flex items-center gap-2 mt-auto bg-blue-600">
                    <img
                      src={x.authorImg}
                      alt="authorImg"
                      className="rounded-full w-9 h-9"
                    />
                    <div className="text-[.7rem] tracking-wide text-gray-500 bg-red-900">
                      {x.authorName}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedType === "podcast" && (
          <div
            className="flex overflow-hidden transition-transform duration-300 ease-in-out bg-red-900 gap-9"
            style={{
              transform: `translateX(-${
                currentIndexHub * (103 / itemsPerPageHub)
              }%)`,
            }}
          >
            {filteredDataHub.map((x, i) => (
              <div
                key={i}
                className="w-64 bg-blue-100 rounded-lg shadow-md"
                onMouseEnter={() => setIsHoveredHub(true)}
                onMouseLeave={() => setIsHoveredHub(false)}
              >
                <div className="w-64 h-40">
                  <iframe
                    src="https://open.spotify.com/embed/episode/69DSpec8AkUAV6nxZqv6og"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <div className="flex flex-col h-32 gap-3 p-3 bg-red-300">
                  <div className="text-lg bg-green-300 font-jost leading-[1.1] font-[500] text-defaultBlue line-clamp-2 uppercase">
                    {x.title}
                  </div>
                  <div className="text-sm leading-[1.4] bg-green-700 line-clamp-3">
                    {x.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedType === "LearningPrograms" && (
          <div
            className="flex overflow-hidden transition-transform duration-300 ease-in-out bg-red-900 gap-9"
            style={{
              transform: `translateX(-${
                currentIndexHub * (103 / itemsPerPageHub)
              }%)`,
            }}
          >
            {filteredDataHub.map((x, i) => (
              <div
                key={i}
                className="w-64 bg-blue-100 rounded-lg shadow-md"
                onMouseEnter={() => setIsHoveredHub(true)}
                onMouseLeave={() => setIsHoveredHub(false)}
              >
                <div className="w-64 h-40">
                  <iframe
                    width="100%"
                    height="100%"
                    src={x.videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col h-32 gap-3 p-3 bg-red-300">
                  <div className="text-lg bg-green-300 font-jost leading-[1.1] font-[500] text-defaultBlue line-clamp-2 uppercase">
                    {x.title}
                  </div>
                  <div className="text-sm leading-[1.4] bg-green-700 line-clamp-3">
                    {x.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="absolute left-0 flex justify-between px-4 top-1/2">
          {currentIndexHub > 0 && (
            <button
              className="p-2 text-white bg-gray-800 rounded-full"
              onClick={handlePrevHub}
            >
              Prev
            </button>
          )}
        </div>
        <div className="absolute right-0 flex justify-between px-4 top-1/2">
          {currentIndexHub < totalItemsHub - itemsPerPageHub && (
            <button
              className="p-2 text-white bg-gray-800 rounded-full"
              onClick={handleNextHub}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
