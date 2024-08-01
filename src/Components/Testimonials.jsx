import invertStar from "../assets/SVG/invertStar.svg";
import testimonialFrame from "../assets/SVG/testimonialFrame.svg";
import conference from "../assets/Images/conference.jpg";
import linkedIn2 from "../assets/Images/linkedIn2.jpg";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="partners"
      className="flex flex-col items-center justify-center h-full gap-10 px-5 py-5 overflow-hidden bg-green-600 sm:py-0 sm:h-screen sm:gap-0 sm:justify-between"
    >
      <div className="max-w-2xl bg-red-200">
        <div className="mb-4 text-xl font-semibold text-center bg-green-300 sm:mb-8 sm:text-3xl font-jost">
          TESTIMONIALS
        </div>
        <div className="bg-green-400 text-xs sm:text-lg font-semibold text-center tracking-wider leading-[1.5] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-between p-4 pt-5 sm:pt-10 sm:px-24 sm:flex-row bg-defaultBlue rounded-3xl">
        <img
          src={invertStar}
          alt="invertStar"
          className="absolute transform scale-90 -translate-x-1/2 sm:scale-110 left-1/2 -top-8"
        />
        <div className="relative bg-defaultBlue sm:w-[52%] mt-3 ">
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
          <div className="absolute right-1 sm:right-4 bottom-2 sm:bottom-5">
            <span className="flex items-center gap-1 sm:gap-3 text-[.55rem] font-semibold tracking-tight text-white sm:text-lg font-jost">
              <Star className="sm:w-7 w-4 h-4 sm:h-7 p-[.1rem] sm:p-[.4rem] flex stroke-transparent bg-[#ff9c00] rounded-full fill-white" />
              AVG RATINGS 4.9
            </span>
          </div>
        </div>
        <div className="bg-red-900 sm:w-[43%] text-white">
          <Quote className="h-6 mb-2 bg-red-100 w6 sm:w-8 sm:h-8 sm:mb-4 fill-white stroke-none" />
          <div className="flex gap-1 mb-3 bg-red-400">
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
          </div>
          <div className="bg-orange-300 text-xs sm:text-lg font-semibold tracking-wide italic sm:w-[90%] leading-[1.5] mb-4 sm:mb-8">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.”
          </div>
          <div className="flex gap-2 sm:gap-3 items-center bg-red-600 w-[60%] sm:w-[40%]">
            <img
              src={linkedIn2}
              alt="linkedIn2"
              className="w-12 h-12 rounded-lg"
            />
            <div className="bg-red-300">
              <div className="text-sm sm:text-base leading-[1.3] bg-red-800 font-jost">
                N.KARTHIKEYAN
              </div>
              <div className="text-[.6rem] sm:text-[.65rem] bg-red-300 leading-[1]">
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
