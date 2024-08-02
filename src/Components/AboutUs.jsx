import abtus from "../assets/Images/abtus.jpg";
import spring from "../assets/SVG/spring.svg";
import abtUsFrame from "../assets/SVG/abtUsFrame.svg";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col items-center justify-center h-full bg-red-400 py-7 xl:pt-0 xl:h-screen xl:items-center xl:flex-row xl:gap-24 xl:p-28"
    >
      <div
        className="bg-blue-300 w-[50%] mb-7 xl:mb-0 xl:w-[35%] relative"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          src={abtUsFrame}
          alt="abtUsFrame"
          className="absolute inset-0 object-contain w-full scale-105 "
        />
        <img src={abtus} alt="abtus" className="object-cover w-full h-auto" />
      </div>

      <div className="bg-blue-500 w-[80%] xl:w-[60%]">
        <div
          className="relative flex mb-3 text-xl font-semibold bg-green-300 md:mb-5 md:text-4xl xl:text-3xl xl:mb-14 font-jost"
          data-aos="fade-left"
        >
          ABOUT US
          <img
            src={spring}
            alt="spring"
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className="absolute top-[-3.5rem] left-52"
          />
        </div>

        <div
          className="bg-orange-300 mb-2 md:mb-3 xl:mb-8 text-xs xl:text-lg font-semibold tracking-wider md:text-xl leading-[1.7] md:leading-[1.7]"
          data-aos="fade-left"
        >
          WoW HR, a not for profit organization with a mission to create a WoW
          factor among HR Fraternities and Management Students through Skill
          development. We focus on the segment of Skill Development which
          supports the individual to enhance their professional development and
          cultivating future leaders within the field.
        </div>
        <div
          className="bg-orange-300 mb-4 md:mb-8 xl:mb-12 md:text-xl text-xs  xl:text-lg font-semibold tracking-wider leading-[1.7] md:leading-[1.7]"
          data-aos="fade-left"
        >
          We further contribute to growth and development of HR fraternities and
          management students providing exclusive learning experience through
          different learning formats by Industrial experts creating a lasting
          impact in the industry.
        </div>
        <div
          className="bg-green-200 xl:w-[45%] w-[70%] font-jost justify-between flex"
          data-aos="fade-up"
        >
          <button className="bg-darkBlue text-white text-[.6rem] md:text-base xl:text-sm px-2 md:px-8 xl:px-6 min-w-24 xl:min-w-36 py-2 xl:py-3 font-medium rounded-md hover:bg-white hover:text-darkBlue hover:border-darkBlue border-[1px] border-transparent transition-all duration-200 hover:scale-105 hover:translate-y-[-.1rem]">
            OVERVIEW
          </button>
          <button className="bg-white px-2 xl:px-6 min-w-24 xl:min-w-36 border-[1px] md:text-base  md:px-8 text-[.6rem] xl:text-sm border-darkBlue py-2 xl:py-3 font-medium rounded-md transition-all duration-200 hover:scale-105 hover:translate-y-[-.1rem] hover:bg-darkBlue hover:text-white hover:border-transparent">
            KEY OBJECTIVE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
