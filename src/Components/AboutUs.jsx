import abtus from "../assets/Images/abtus.jpg";
import spring from "../assets/SVG/spring.svg";
import abtUsFrame from "../assets/SVG/abtUsFrame.svg";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="h-screen flex justify-center gap-24 p-28 bg-red-400"
    >
      <div className="bg-blue-300 w-[35%] relative">
        <img
          src={abtUsFrame}
          alt="abtUsFrame"
          className="w-full scale-105 object-contain absolute inset-0 "
        />
        <img src={abtus} alt="abtus" className="w-full h-auto object-cover" />
      </div>

      <div className="bg-blue-500 w-[60%]">
        <div className="bg-green-300 relative mb-14 flex font-semibold font-jost text-3xl">
          ABOUT US
          <img
            src={spring}
            alt="spring"
            className="absolute top-[-3.5rem] left-52"
          />
        </div>

        <div className="bg-orange-300 mb-8 text-lg font-semibold tracking-wider leading-[1.7]">
          WoW HR, a not for profit organization with a mission to create a WoW
          factor among HR Fraternities and Management Students through Skill
          development. We focus on the segment of Skill Development which
          supports the individual to enhance their professional development and
          cultivating future leaders within the field.
        </div>
        <div className="bg-orange-300 mb-12 text-lg font-semibold tracking-wider leading-[1.7]">
          We further contribute to growth and development of HR fraternities and
          management students providing exclusive learning experience through
          different learning formats by Industrial experts creating a lasting
          impact in the industry.
        </div>
        <div className="bg-green-200 w-[45%] font-jost justify-between flex">
          <button className="bg-darkBlue text-white text-sm px-6 min-w-36 py-3 font-medium rounded-md hover:bg-white hover:text-darkBlue hover:border-darkBlue border-[1px] border-transparent transition-all duration-200 hover:scale-105 hover:translate-y-[-.1rem]">
            OVERVIEW
          </button>
          <button className="bg-white px-6 min-w-36 border-[1px] text-sm border-darkBlue  py-3 font-medium rounded-md transition-all duration-200 hover:scale-105 hover:translate-y-[-.1rem] hover:bg-darkBlue hover:text-white hover:border-transparent">
            KEY OBJECTIVE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
