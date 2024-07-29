import { Facebook, Github, Twitter, Instagram } from "lucide-react";
import framedStar from "../assets/SVG/framedStar.svg";
import pic from "../assets/Images/homePic.jpg";

const LandingPage = () => {
  return (
    <section id="home" className="bg-red-900 h-[87vh] flex overflow-hidden">
      <div className="bg-red-500 w-1/2">
        <img src={framedStar} alt="framestr" />
        <div className="bg-blue-300 w-[75%] h-[60%] flex flex-col mx-auto translate-x-10 translate-y-[-8%]">
          <div className="bg-green-300 mb-12 font-semibold font-jost text-5xl tracking-[-0.06em] leading-[1.25]">
            ENHANCE YOUR GLOBAL GROWTH WITH{" "}
            <span className=" text-defaultBlue font-semibold font-jost">
              WOW HR
            </span>
          </div>
          <div className="bg-orange-300 mb-10 text-lg font-semibold tracking-wider leading-[1.2]">
            WoW HR, a not-for-profit organization intended to create a WoW
            factor among HR Fraternities and Students community through Skill
            development.
          </div>
          <div className="bg-blue-400 mt-auto  flex gap-3">
            <div className="bg-white cursor-pointer hover:scale-110 hover:translate-y-[-.25rem] hover:bg-lightBlue duration-200 hover:text-white transition-all border-gray-300 border-[1px] rounded-full w-8 p-2 h-auto text-xs">
              <Facebook className="w-full h-auto" />
            </div>
            <div className="bg-white cursor-pointer hover:scale-110 hover:translate-y-[-.25rem] hover:bg-lightBlue  duration-200 hover:text-white transition-all border-gray-300 border-[1px] rounded-full w-8 p-2 h-auto text-xs">
              <Instagram className="w-full h-auto" />
            </div>
            <div className="bg-white cursor-pointer hover:scale-110 hover:translate-y-[-.25rem] hover:bg-lightBlue  duration-200 hover:text-white transition-all border-gray-300 border-[1px] rounded-full w-8 p-2 h-auto text-xs">
              <Github className="w-full h-auto" />
            </div>
            <div className="bg-white cursor-pointer hover:scale-110 hover:translate-y-[-.25rem] hover:bg-lightBlue  duration-200 hover:text-white transition-all border-gray-300 border-[1px] rounded-full w-8 p-2 h-auto text-xs">
              <Twitter className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 bg-green-500">
        <div className="w-full h-full transform rotate-[-7deg] overflow-hidden border-2 -translate-y-[13%] -translate-x-[-5%] bg-white border-lightBlue rounded-[3rem]">
          <div className="w-full h-full transform overflow-hidden -translate-y-[3.5%] -translate-x-[-3.5%] rounded-bl-[3rem]">
            <img
              src={pic}
              alt="pic"
              className="w-full h-full object-contain transform rotate-[6deg] -translate-x-[6%] scale-[1.275] -translate-y-[-4%] rounded-bl-[4rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
