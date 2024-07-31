import invertStar from "../assets/SVG/invertStar.svg";
import testimonialFrame from "../assets/SVG/testimonialFrame.svg";
import conference from "../assets/Images/conference.jpg";
import linkedIn2 from "../assets/Images/linkedIn2.jpg";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="partners"
      className="flex flex-col items-center justify-between h-screen px-5 overflow-hidden bg-green-600"
    >
      <div className="max-w-2xl bg-red-200">
        <div className="mb-6 text-2xl font-semibold text-center bg-green-300 font-jost">
          TESTIMONIALS
        </div>
        <div className="bg-green-400 text-base font-semibold text-center tracking-wider leading-[1.5] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="relative flex items-center justify-between p-4 px-24 pt-12 bg-defaultBlue rounded-3xl">
        <img
          src={invertStar}
          alt="invertStar"
          className="absolute transform scale-110 -translate-x-1/2 left-1/2 -top-8"
        />
        <div className="relative bg-defaultBlue w-[52%] mt-3 ">
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
          <div className="absolute right-4 bottom-5">
            <span className="flex items-center gap-2 text-base font-semibold tracking-tight text-white font-jost">
              <Star className="w-7 h-7 p-[.4rem] flex stroke-transparent bg-[#ff9c00] rounded-full fill-white" />
              AVG RATINGS 4.9
            </span>
          </div>
        </div>
        <div className="bg-red-900 w-[43%] text-white">
          <Quote className="w-8 h-8 mb-4 bg-red-100 fill-white stroke-none" />
          <div className="flex gap-1 mb-3 bg-red-400">
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
            <Star className="w-4 stroke-transparent fill-[#ff9c00]" />
          </div>
          <div className="bg-orange-300  text-lg font-semibold tracking-wide italic w-[90%] leading-[1.5] mb-8">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.”
          </div>
          <div className="flex gap-3 items-center bg-red-600 w-[40%]">
            <img
              src={linkedIn2}
              alt="linkedIn2"
              className="w-12 h-12 rounded-lg"
            />
            <div className="bg-red-300">
              <div className="text-base leading-[1.3] bg-red-800 font-jost">
                N.KARTHIKEYAN
              </div>
              <div className="text-[.6rem] bg-red-300 leading-[1]">
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
