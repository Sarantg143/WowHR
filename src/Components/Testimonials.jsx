import invertStar from "../assets/SVG/invertStar.svg";
import testimonialFrame from "../assets/SVG/testimonialFrame.svg";
import conference from "../assets/Images/conference.jpg";
import linkedIn2 from "../assets/Images/linkedIn2.jpg";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center h-full gap-10 px-5 py-5 my-0 overflow-hidden bg-white cursor-default xl:my-0 md:my-10 xl:py-0 xl:h-screen xl:gap-0 xl:justify-between"
    >
      <div
        className="max-w-2xl mb-0 xl:mb-0 md:mb-5"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div className="mb-4 text-xl font-semibold text-center md:text-3xl xl:mb-8 xl:text-3xl font-jost">
          TESTIMONIALS
        </div>
        <div className=" text-xs md:text-xl xl:text-lg font-semibold text-center tracking-wider md:leading-[1.7] xl:leading-[1.5] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-between p-4 pt-5 xl:pt-10 xl:px-24 xl:flex-row bg-defaultBlue rounded-3xl">
        <img
          src={invertStar}
          alt="invertStar"
          className="absolute transform scale-90 -translate-x-1/2 xl:scale-110 left-1/2 -top-8"
        />
        <div className="relative bg-defaultBlue xl:w-[52%] md:w-[80%] mt-3 ">
          <img
            src={testimonialFrame}
            alt="testimonialFrame"
            className="absolute inset-0 object-contain w-full "
          />
          <img
            src={conference}
            alt="conference"
            className="object-cover w-full h-auto p-1"
          />
          <div
            className="absolute right-1 xl:right-4 bottom-2 xl:bottom-5 md:bottom-4"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <span className="flex items-center gap-1 xl:gap-3 text-[.55rem] font-semibold tracking-tight text-white xl:text-lg md:text-xl font-jost">
              <Star className="xl:w-7 w-4 h-4 xl:h-7 p-[.1rem] xl:p-[.4rem] flex stroke-transparent bg-[#ff9c00] rounded-full fill-white" />
              AVG RATINGS 4.9
            </span>
          </div>
        </div>
        <div className=" xl:w-[43%] text-white">
          <Quote
            className="w-6 h-6 mb-2 xl:w-8 xl:h-8 xl:mb-4 fill-white stroke-none"
            data-aos="fade-left"
            data-aos-duration="250"
          />

          <div
            className="flex gap-1 mb-3 "
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <Star className="w-4 xl:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 xl:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 xl:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 xl:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 xl:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
          </div>
          <div
            className=" md:text-xl text-xs xl:text-lg font-semibold tracking-wide italic xl:w-[90%] leading-[1.5] mb-4 xl:mb-8"
            data-aos="fade-left"
            data-aos-duration="750"
          >
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.”
          </div>
          <div
            className="flex gap-2 xl:gap-3 items-center  w-[60%] xl:w-[40%]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={linkedIn2}
              alt="linkedIn2"
              className="w-12 h-12 rounded-lg xl:w-14 xl:h-14 md:h-16 md:w-16"
            />
            <div className="">
              <div className="text-sm md:text-xl xl:text-base leading-[1.3] font-jost">
                N.KARTHIKEYAN
              </div>
              <div className="text-[.6rem] md:text-lg xl:text-[.65rem] leading-[1] xl:leading-[1.1] md:leading-[1]">
                Deputy Director- <br></br>Career Development Centre KSR
                Educational Institutions
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Testimonials;
