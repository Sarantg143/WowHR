import CardFrame from "../assets/SVG/cardOuter.jsx";
import cardIcon1 from "../assets/SVG/card1Icon.svg";
import cardIcon2 from "../assets/SVG/card2Icon.svg";
import cardIcon3 from "../assets/SVG/card3Icon.svg";
import cardIcon4 from "../assets/SVG/card4Icon.svg";

const OurService = () => {
  return (
    <section
      id="our-service"
      className="flex flex-col items-center justify-center h-full p-5 mx-auto bg-red-600 md:h-full lg:h-screen lg:p-20 max-w-7xl"
    >
      <div className="mb-3 text-xl font-semibold bg-green-300 lg:mt-0 md:mt-10 lg:mb-8 md:text-4xl lg:text-3xl font-jost">
        OUR SERVICES
      </div>
      <div className="bg-green-400 text-xs lg:text-lg font-semibold text-center md:text-xl tracking-wider lg:leading-[1.9] md:leading-[2] mb-5 md:mb-10 lg:mb-20 mx-3">
        Fraternities and Students community through Skill development. We focus
        on the segment of Skill Development which supports the individual&apos;s
        to enhance their professional development and developing future leaders.
        A step forward, we intend to provide exclusive learning experience
        through different learning formats by Industrial experts.
      </div>
      <div className="flex flex-col space-y-6 bg-purple-800 lg:space-y-0 lg:gap-6 lg:flex-row">
        <div className=" relative mx-auto w-[168px] h-[180px] lg:w-[230px] lg:h-[275px] md:h-[300px] md:w-[280px] bg-blue-50 lg:-translate-x-0 -translate-x-12">
          <CardFrame
            filler={"#011329"}
            stroker={"#cccccc"}
            className="object-contain w-full h-full"
            // className="object-contain absolute h-[180px] lg:w-[228px] lg:h-[275px] md:h-[300px] md:w-[280px] inset-0"
          />
          <div className="absolute mx-5 my-2 text-white md:mx-8 md:my-8 lg:mx-5 lg:my-4 top-1">
            <img
              src={cardIcon1}
              alt="cardIcon1"
              className="w-6 h-6 mb-2 md:w-12 md:h-12 lg:w-auto lg:mb-5 lg:h-auto "
            />
            <div className="mb-4 text-sm font-bold bg-orange-500 md:text-2xl lg:text-xl ">
              Network
            </div>
            <div className="md:text-lg bg-orange-300 text-xs lg:text-base font-semibold text-left lg:leading-[1.5] min-h-[3rem] lg:min-h-[5rem] line-clamp-4">
              Be a part of a community of HR Professionals across India.
            </div>
            <span className="md:text-5xl text-xl lg:text-4xl lg:mt-2 leading-[.5] ">
              &#8594;
            </span>
            <div className="bg-green-500 relative text-black lg:top-1 md:-top-1 top-3 text-xs lg:text-2xl md:left-[6rem] md:text-3xl font-bold lg:left-[5.5rem] left-[3.75rem] w-max">
              1
            </div>
          </div>
        </div>
        <div className=" relative mx-auto w-[168px] h-[180px] lg:w-[230px] lg:translate-x-0 translate-x-12 lg:translate-y-6 lg:h-[275px] md:h-[300px] md:w-[280px] bg-blue-50">
          <CardFrame
            filler={"#ffffff"}
            stroker={"#cccccc"}
            // className="object-contain absolute w-[228px] h-[275px] inset-0"
            className="object-contain w-full h-full"
          />

          <div className="absolute mx-5 my-2 md:mx-8 md:my-8 lg:mx-5 lg:my-4 top-1">
            <img
              src={cardIcon2}
              alt="cardIcon2"
              className="w-6 h-6 mb-2 md:w-12 md:h-12 lg:w-auto lg:mb-5 lg:h-auto "
            />
            <div className="mb-4 text-sm font-bold bg-orange-500 md:text-2xl lg:text-xl ">
              Chapters
            </div>
            <div className="md:text-lg bg-orange-300 text-xs lg:text-base font-semibold text-left lg:leading-[1.5] min-h-[3rem] lg:min-h-[5rem]  line-clamp-4">
              Explore a vast Network of Wow hr Chapters spread across multiple
              cities.
            </div>
            <span className="md:text-5xl text-xl lg:text-4xl lg:mt-2 leading-[.5] ">
              &#8594;
            </span>
            <div className="bg-green-500 relative top-0 lg:top-3 text-xs lg:text-2xl md:left-[6rem] md:text-3xl font-bold lg:left-[5.5rem] left-[3.75rem] w-max">
              2
            </div>
          </div>
        </div>
        <div className=" relative mx-auto w-[168px] h-[180px] lg:w-[230px] lg:h-[275px] md:h-[300px] md:w-[280px] bg-blue-50 lg:-translate-x-0 -translate-x-12">
          <CardFrame
            filler={"#ffffff"}
            stroker={"#cccccc"}
            className="object-contain w-full h-full"
            // className="object-contain absolute h-[180px] lg:w-[228px] lg:h-[275px] md:h-[300px] md:w-[280px] inset-0"
          />
          <div className="absolute mx-5 my-2 md:mx-8 md:my-8 lg:mx-5 lg:my-4 top-1">
            <img
              src={cardIcon3}
              alt="cardIcon3"
              className="w-6 h-6 mb-2 md:w-12 md:h-12 lg:w-auto lg:mb-5 lg:h-auto "
            />
            <div className="mb-4 text-sm font-bold bg-orange-500 md:text-2xl lg:text-xl ">
              Certification
            </div>
            <div className="md:text-lg bg-orange-300 text-xs lg:text-base font-semibold text-left lg:leading-[1.5] min-h-[3rem] lg:min-h-[5rem] line-clamp-4">
              Discover a array of courses curated to Certification & polish your
              professional.
            </div>

            <span className="md:text-5xl text-xl lg:text-4xl lg:mt-2 leading-[.5] ">
              &#8594;
            </span>
            <div className="bg-green-500 relative text-black lg:top-0 top-0 text-xs lg:text-2xl md:left-[6rem] md:text-3xl font-bold lg:left-[5.5rem] left-[3.75rem] w-max">
              3
            </div>
          </div>
        </div>
        <div className=" relative mx-auto w-[168px] h-[180px] lg:w-[230px] lg:translate-x-0 translate-x-12 lg:translate-y-6 lg:h-[275px] md:h-[300px] md:w-[280px] bg-blue-50">
          <CardFrame
            filler={"#ffffff"}
            stroker={"#cccccc"}
            // className="object-contain absolute w-[228px] h-[275px] inset-0"
            className="object-contain w-full h-full"
          />

          <div className="absolute mx-5 my-2 md:mx-8 md:my-8 lg:mx-5 lg:my-4 top-1">
            <img
              src={cardIcon4}
              alt="cardIcon4"
              className="w-6 h-6 mb-2 md:w-12 md:h-12 lg:w-auto lg:mb-5 lg:h-auto "
            />
            <div className="mb-4 text-sm font-bold bg-orange-500 md:text-2xl lg:text-xl ">
              Jobs
            </div>
            <div className="md:text-lg bg-orange-300 text-xs lg:text-base font-semibold text-left lg:leading-[1.5] min-h-[3rem] lg:min-h-[5rem]  line-clamp-4">
              Presenting a platform where HR Talents meets Recruiters.
            </div>
            <span className="md:text-5xl text-xl lg:text-4xl lg:mt-2 leading-[.5] ">
              &#8594;
            </span>
            <div className="bg-green-500 relative top-0 lg:top-3 md:top-5 text-xs lg:text-2xl md:left-[6rem] md:text-3xl font-bold lg:left-[5.5rem] left-[3.75rem] w-max">
              4
            </div>
          </div>
        </div>
        {/*    <div className="bg-purple-300 relative w-[230px] h-[275px] ">
          <CardFrame
            filler={"#ffffff"}
            stroker={"#cccccc"}
            className="object-contain absolute w-[228px] h-[275px] inset-0"
          />
          <div className="absolute mx-5 my-4 md:mx-8 md:my-8 lg:mx-5 top-1">
            <img src={cardIcon3} alt="cardIcon3" className="mb-5 " />
            <div className="mb-4 text-base font-bold bg-orange-500 lg:text-xl ">
              Certification
            </div>
            <div className="bg-orange-300 text-sm lg:text-base font-semibold text-left tracking-tight leading-[1.5] min-h-[5rem]">
              Discover an array of courses curated to Certification & polish
              your professional.
            </div>
            <span className="text-4xl leading-[.5] ">&#8594;</span>
            <div className="bg-green-500 relative top-5 text-base lg:text-2xl font-bold left-[5.5rem] w-max">
              3
            </div>
          </div>
        </div>
        <div className="bg-purple-300 relative w-[230px] translate-y-6 h-[275px] ">
          <CardFrame
            filler={"#ffffff"}
            stroker={"#cccccc"}
            className="object-contain absolute w-[228px] h-[275px] inset-0"
          />
          <div className="absolute mx-5 my-4 md:mx-8 md:my-8 lg:mx-5 top-1">
            <img src={cardIcon4} alt="cardIcon4" className="mb-5 " />
            <div className="mb-4 text-base font-bold bg-orange-500 lg:text-xl ">
              Jobs
            </div>
            <div className="bg-orange-300 text-sm lg:text-base font-semibold text-left leading-[1.5] min-h-[5rem]">
              Presenting a platform where HR Talents meets Recruiters.
            </div>
            <span className="text-4xl leading-[.5] ">&#8594;</span>
            <div className="bg-green-500 relative top-7 text-base lg:text-2xl font-bold left-[5.5rem] w-max">
              4
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurService;
