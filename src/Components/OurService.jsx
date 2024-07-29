import cardFrame from "../assets/SVG/cardOuter.svg";
import cardIcon1 from "../assets/SVG/card1Icon.svg";
import cardIcon2 from "../assets/SVG/card2Icon.svg";
import cardIcon3 from "../assets/SVG/card3Icon.svg";
import cardIcon4 from "../assets/SVG/card4Icon.svg";
const OurService = () => {
  return (
    <section
      id="our-service"
      className="h-screen flex flex-col justify-center  mx-auto max-w-7xl p-20 items-center bg-red-600"
    >
      <div className="bg-green-300 font-semibold font-jost text-3xl mb-8">
        OUR SERVICES
      </div>
      <div className="bg-green-400 text-lg font-semibold text-center tracking-wider leading-[1.9] mb-20 mx-3">
        Fraternities and Students community through Skill development. We focus
        on the segment of Skill Development which supports the individual&apos;s
        to enhance their professional development and developing future leaders.
        A step forward, we intend to provide exclusive learning experience
        through different learning formats by Industrial experts.
      </div>
      <div className="bg-purple-800 flex  gap-6">
        <div className="bg-purple-300 relative w-[230px] h-[280px] ">
          <img
            src={cardFrame}
            alt="cardFrame"
            className="object-contain absolute w-[228px] h-[275px] bg-darkBlue inset-0 "
          />
          <div className=" text-white mx-5 my-4 absolute top-1">
            <img src={cardIcon1} alt="cardIcon1" className="mb-5 " />
            <div className="bg-orange-500 font-bold text-xl mb-4 ">Network</div>
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
          <img
            src={cardFrame}
            alt="cardFrame"
            className="object-contain absolute w-[228px] h-[273px] bg-white inset-0 "
          />
          <div className="  mx-5 my-4 absolute top-1">
            <img src={cardIcon2} alt="cardIcon2" className="mb-5 " />
            <div className="bg-orange-500 font-bold text-xl mb-4 ">
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
          <img
            src={cardFrame}
            alt="cardFrame"
            className="object-contain absolute w-[228px] h-[273px] bg-white inset-0 "
          />
          <div className="  mx-5 my-4 absolute top-1">
            <img src={cardIcon3} alt="cardIcon3" className="mb-5 " />
            <div className="bg-orange-500 font-bold text-xl mb-4 ">
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
          <img
            src={cardFrame}
            alt="cardFrame"
            className="object-contain absolute w-[228px] h-[273px] bg-white inset-0 "
          />
          <div className="  mx-5 my-4 absolute top-1">
            <img src={cardIcon4} alt="cardIcon4" className="mb-5 " />
            <div className="bg-orange-500 font-bold text-xl mb-4 ">Jobs</div>
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
