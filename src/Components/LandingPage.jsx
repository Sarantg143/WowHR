import { Facebook, Github, Twitter, Instagram } from "lucide-react";
import framedStar from "../assets/SVG/framedStar.svg";
import pic from "../assets/Images/homePic.jpg";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="bg-red-900  sm:h-[87vh] sm:flex overflow-hidden"
    >
      <div className="bg-red-500 sm:w-1/2 ">
        <img src={framedStar} alt="framestr" className="w-1/2 sm:w-auto" />
        <div className="bg-blue-300 sm:w-[75%] w-[80%] sm:h-[60%] flex flex-col mx-auto sm:translate-x-10 translate-y-[-8%]">
          <div className="bg-green-300 sm:mb-12 mb-4 font-semibold font-jost text-xl sm:text-5xl tracking-[-0.06em] leading-[1.25]">
            ENHANCE YOUR GLOBAL GROWTH WITH{" "}
            <span className="font-semibold text-defaultBlue font-jost">
              WOW HR
            </span>
          </div>
          <div className="bg-orange-300 sm:mb-10 mb-7 text-xs  sm:text-lg font-semibold tracking-wider leading-[1.2]">
            WoW HR, a not-for-profit organization intended to create a WoW
            factor among HR Fraternities and Students community through Skill
            development.
          </div>
          <div className="flex gap-3 mt-auto bg-blue-400">
            <div className="bg-white cursor-pointer hover:scale-110 hover:translate-y-[-.25rem] hover:bg-lightBlue duration-200 hover:text-white transition-all border-gray-300 border-[1px] rounded-full w-6 sm:w-8 p-1 sm:p-2 h-6 sm:h-8 text-xs">
              <Facebook className="w-full h-auto" />
            </div>
            <div className="bg-white cursor-pointer hover:scale-110 hover:translate-y-[-.25rem] hover:bg-lightBlue  duration-200 hover:text-white transition-all border-gray-300 border-[1px] rounded-full w-6 sm:w-8 p-1 sm:p-2 h-6 sm:h-8 text-xs">
              <Instagram className="w-full h-auto" />
            </div>
            <div className="bg-white cursor-pointer hover:scale-110 hover:translate-y-[-.25rem] hover:bg-lightBlue  duration-200 hover:text-white transition-all border-gray-300 border-[1px] rounded-full w-6 sm:w-8 p-1 sm:p-2 h-6 sm:h-8 text-xs">
              <Github className="w-full h-auto" />
            </div>
            <div className="bg-white cursor-pointer hover:scale-110 hover:translate-y-[-.25rem] hover:bg-lightBlue  duration-200 hover:text-white transition-all border-gray-300 border-[1px] rounded-full w-6 sm:w-8 p-1 sm:p-2 h-6 sm:h-8  text-xs">
              <Twitter className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-8 mb-10 bg-green-500 sm:mb-0 sm:mt-0 p-7 sm:p-0 sm:w-1/2">
        <div className="w-full h-full transform rotate-[-7deg] sm:overflow-hidden border-2 sm:-translate-y-[13%] sm:-translate-x-[-5%] bg-white border-lightBlue rounded-3xl sm:rounded-[3rem]">
          <div className="w-full h-full transform overflow-hidden sm:-translate-y-[3.5%] -translate-y-[5%]  -translate-x-[-4%] sm:-translate-x-[-3.5%] rounded-3xl sm:rounded-bl-[3rem]">
            <img
              src={pic}
              alt="pic"
              className="w-full h-full object-contain transform rotate-[6deg] -translate-x-[6%] scale-[1.275] -translate-y-[-4%] rounded-[2rem] sm:rounded-bl-[4rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
