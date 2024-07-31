import CardFrame from "../assets/SVG/cardOuter.jsx";
import cardIcon1 from "../assets/SVG/card1Icon.svg";
import cardIcon2 from "../assets/SVG/card2Icon.svg";
import cardIcon3 from "../assets/SVG/card3Icon.svg";
import cardIcon4 from "../assets/SVG/card4Icon.svg";
const OurService = () => {
  return (
    <section
      id="our-service"
      className="flex flex-col items-center justify-center h-screen p-20 mx-auto bg-red-600 max-w-7xl"
    >
      <div className="mb-8 text-3xl font-semibold bg-green-300 font-jost">
        OUR SERVICES
      </div>
      <div className="bg-green-400 text-lg font-semibold text-center tracking-wider leading-[1.9] mb-20 mx-3">
        Fraternities and Students community through Skill development. We focus
        on the segment of Skill Development which supports the individual&apos;s
        to enhance their professional development and developing future leaders.
        A step forward, we intend to provide exclusive learning experience
        through different learning formats by Industrial experts.
      </div>
      <div className="flex gap-6 bg-purple-800">
        <div className=" relative w-[230px] h-[280px]">
          {/* <img
            src={CardFrame}
            alt="CardFrame"
            className="object-contain absolute w-[228px] h-[275px] stroke-black fill-red-900 inset-0 "
            style={{ stroke: "black", fill: "#e3342f" }}
          /> */}
          <CardFrame
            filler={"#011329"}
            stroker={"#cccccc"}
            className="object-contain absolute w-[228px] h-[275px] inset-0"
          />
          <div className="absolute mx-5 my-4 text-white top-1">
            <img src={cardIcon1} alt="cardIcon1" className="mb-5 " />
            <div className="mb-4 text-xl font-bold bg-orange-500 ">Network</div>
            <div className="bg-orange-300 text-base font-semibold text-left leading-[1.5] min-h-[5rem]">
              Be a part of a community of HR Professionals across India.
            </div>
            <span className="text-4xl leading-[.5] ">&#8594;</span>
            <div className="bg-green-500 relative text-black top-5 text-2xl font-bold left-[5.5rem] w-max">
              1
            </div>
          </div>
        </div>
        <div className="bg-purple-300 relative w-[230px] translate-y-6 h-[275px] ">
          {/* <img
            src={CardFrame}
            alt="CardFrame"
            className="object-contain absolute w-[228px] h-[273px] bg-white inset-0 "
          /> */}
          <CardFrame
            filler={"#ffffff"}
            stroker={"#cccccc"}
            className="object-contain absolute w-[228px] h-[275px] inset-0"
          />

          <div className="absolute mx-5 my-4 top-1">
            <img src={cardIcon2} alt="cardIcon2" className="mb-5 " />
            <div className="mb-4 text-xl font-bold bg-orange-500 ">
              Chapters
            </div>
            <div className="bg-orange-300 text-base font-semibold text-left leading-[1.5] min-h-[5rem]">
              Explore a vast Network of Wow hr Chapters spread across multiple
              cities.
            </div>
            <span className="text-4xl leading-[.5] ">&#8594;</span>
            <div className="bg-green-500 relative top-7 text-2xl font-bold left-[5.5rem] w-max">
              2
            </div>
          </div>
        </div>
        <div className="bg-purple-300 relative w-[230px] h-[275px] ">
          {/* <img
            src={CardFrame}
            alt="CardFrame"
            className="object-contain absolute w-[228px] h-[273px] bg-white inset-0 "
          /> */}
          <CardFrame
            filler={"#ffffff"}
            stroker={"#cccccc"}
            className="object-contain absolute w-[228px] h-[275px] inset-0"
          />
          <div className="absolute mx-5 my-4 top-1">
            <img src={cardIcon3} alt="cardIcon3" className="mb-5 " />
            <div className="mb-4 text-xl font-bold bg-orange-500 ">
              Certification
            </div>
            <div className="bg-orange-300 text-base font-semibold text-left tracking-tight leading-[1.5] min-h-[5rem]">
              Discover an array of courses curated to Certification & polish
              your professional.
            </div>
            <span className="text-4xl leading-[.5] ">&#8594;</span>
            <div className="bg-green-500 relative top-5 text-2xl font-bold left-[5.5rem] w-max">
              3
            </div>
          </div>
        </div>
        <div className="bg-purple-300 relative w-[230px] translate-y-6 h-[275px] ">
          {/* <img
            src={CardFrame}
            alt="CardFrame"
            className="object-contain absolute w-[228px] h-[273px] bg-white inset-0 "
          /> */}
          <CardFrame
            filler={"#ffffff"}
            stroker={"#cccccc"}
            className="object-contain absolute w-[228px] h-[275px] inset-0"
          />
          <div className="absolute mx-5 my-4 top-1">
            <img src={cardIcon4} alt="cardIcon4" className="mb-5 " />
            <div className="mb-4 text-xl font-bold bg-orange-500 ">Jobs</div>
            <div className="bg-orange-300 text-base font-semibold text-left leading-[1.5] min-h-[5rem]">
              Presenting a platform where HR Talents meets Recruiters.
            </div>
            <span className="text-4xl leading-[.5] ">&#8594;</span>
            <div className="bg-green-500 relative top-7 text-2xl font-bold left-[5.5rem] w-max">
              4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
