import invertStar from "../assets/SVG/invertStar.svg";
import testimonialFrame from "../assets/SVG/testimonialFrame.svg";
import conference from "../assets/Images/conference.jpg";
import linkedIn2 from "../assets/Images/linkedIn2.jpg";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="partners"
      className="flex flex-col items-center justify-center h-full gap-10 px-5 py-5 my-0 overflow-hidden bg-green-600 lg:my-0 md:my-10 lg:py-0 lg:h-screen lg:gap-0 lg:justify-between"
    >
      <div className="max-w-2xl mb-0 bg-red-200 lg:mb-0 md:mb-5">
        <div className="mb-4 text-xl font-semibold text-center bg-green-300 md:text-3xl lg:mb-8 lg:text-3xl font-jost">
          TESTIMONIALS
        </div>
        <div className="bg-green-400 text-xs md:text-xl lg:text-lg font-semibold text-center tracking-wider md:leading-[1.7] lg:leading-[1.5] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-between p-4 pt-5 lg:pt-10 lg:px-24 lg:flex-row bg-defaultBlue rounded-3xl">
        <img
          src={invertStar}
          alt="invertStar"
          className="absolute transform scale-90 -translate-x-1/2 lg:scale-110 left-1/2 -top-8"
        />
        <div className="relative bg-defaultBlue lg:w-[52%] md:w-[80%] mt-3 ">
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
          <div className="absolute right-1 lg:right-4 bottom-2 lg:bottom-5 md:bottom-4">
            <span className="flex items-center gap-1 lg:gap-3 text-[.55rem] font-semibold tracking-tight text-white lg:text-lg md:text-xl font-jost">
              <Star className="lg:w-7 w-4 h-4 lg:h-7 p-[.1rem] lg:p-[.4rem] flex stroke-transparent bg-[#ff9c00] rounded-full fill-white" />
              AVG RATINGS 4.9
            </span>
          </div>
        </div>
        <div className="bg-red-900 lg:w-[43%] text-white">
          <Quote className="w-6 h-6 mb-2 bg-red-100 lg:w-8 lg:h-8 lg:mb-4 fill-white stroke-none" />
          <div className="flex gap-1 mb-3 bg-red-400">
            <Star className="w-4 lg:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 lg:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 lg:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 lg:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 lg:w-4 md:w-7 stroke-transparent fill-[#ff9c00]" />
          </div>
          <div className="bg-orange-300 md:text-xl text-xs lg:text-lg font-semibold tracking-wide italic lg:w-[90%] leading-[1.5] mb-4 lg:mb-8">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.”
          </div>
          <div className="flex gap-2 lg:gap-3 items-center bg-red-600 w-[60%] lg:w-[40%]">
            <img
              src={linkedIn2}
              alt="linkedIn2"
              className="w-12 h-12 rounded-lg lg:w-12 lg:h-12 md:h-16 md:w-16"
            />
            <div className="bg-red-300">
              <div className="text-sm md:text-xl lg:text-base leading-[1.3] bg-red-800 font-jost">
                N.KARTHIKEYAN
              </div>
              <div className="text-[.6rem] md:text-lg lg:text-[.65rem] bg-red-300 leading-[1] lg:leading-[1] md:leading-[1]">
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
