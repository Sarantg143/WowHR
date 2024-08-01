import f1 from "../assets/Images/f1.png";
import f2 from "../assets/Images/f2.jpg";
import f3 from "../assets/Images/f3.jpg";
import f4 from "../assets/Images/f4.jpg";
import logo from "../assets/Images/WowHRLogo.png";
import footerBG from "../assets/SVG/footerBG.svg";
import { MapPin, PhoneCall, AtSign } from "lucide-react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="h-full my-auto overflow-hidden text-white sm:h-screen "
    >
      <div className="flex w-full h-[10rem] sm:h-[19.5rem] ">
        <img src={f1} alt="f1" className="object-cover w-1/4 sm:w-full " />
        <img src={f2} alt="f2" className="object-cover w-1/4 sm:w-full " />
        <img src={f3} alt="f3" className="object-cover w-1/4 sm:w-full " />
        <img src={f4} alt="f4" className="object-cover w-1/4 sm:w-full " />
      </div>
      <div
        className="h-full pt-8 pb-1 bg-black sm:pb-0 sm:pt-16"
        style={{
          backgroundImage: `url(${footerBG})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
        }}
      >
        <div className="mx-auto sm:max-w-7xl">
          <div className="flex flex-col items-center justify-between px-3 bg-green-100 mb-7 sm:flex-row sm:px-10 sm:mb-16 sm:gap-10 ">
            <div className="w-[20rem] ">
              <img
                src={logo}
                alt="logo"
                className="sm:w-[14rem] w-[6rem]  rounded-lg p-2 mb-5  sm:mb-7 bg-white"
              />
              <div className="text-[.65rem] sm:text-[1rem] leading-[1.2] mb-3 sm:mb-10 tracking-wide">
                WoW HR, a not-for-profit organization intended to create a WoW
                factor among HR Fraternities and Students community through
                Skill development.
              </div>
              <div className="flex justify-between border-b border-gray-500">
                <input
                  type="email"
                  className="w-full p-1 sm:p-2 text-[.65rem] sm:text-sm text-white bg-transparent"
                  placeholder="Your E-Mail"
                />
                <button className="px-2 sm:px-4 py-1 mb-1 text-[.65rem] sm:text-xs font-bold tracking-wide bg-white rounded-full text-defaultBlue">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-auto bg-red-700 sm:gap-0 mt-7 sm:mt-2 sm:px-16 ">
              <div className="w-24 space-y-1 bg-red-100 sm:space-y-2 sm:w-48 sm:max-w-56">
                <div className="mb-5 text-sm font-semibold sm:text-xl font-jost">
                  QUICK LINKS
                </div>
                <a
                  href="#about-us"
                  className="text-[.65rem] sm:text-sm tracking-wider block text-gray-400 w-max"
                >
                  About Us
                </a>
                <a
                  href="#testimonials"
                  className="text-[.65rem] sm:text-sm tracking-wider block text-gray-400 w-max"
                >
                  Meet the Team
                </a>
                <a
                  href="#events"
                  className="text-[.65rem] sm:text-sm tracking-wider block text-gray-400 w-max"
                >
                  Integrations
                </a>
                <a
                  href="#footer"
                  className="text-[.65rem] sm:text-sm tracking-wider block text-gray-400 w-max"
                >
                  Contact Us
                </a>
                <a
                  href="#our-services"
                  className="text-[.65rem] sm:text-sm tracking-wider block text-gray-400 w-max"
                >
                  Blog
                </a>
              </div>
              <div className="w-24 space-y-1 bg-red-300 sm:space-y-2 sm:w-48 sm:max-w-56">
                <div className="mb-5 text-sm font-semibold sm:text-xl font-jost">
                  SERVICE
                </div>
                <div className=" text-[.65rem] sm:text-sm tracking-wider text-gray-400 w-max">
                  Network
                </div>
                <div className=" text-[.65rem] sm:text-sm tracking-wider text-gray-400 w-max">
                  Chapters
                </div>
                <div className=" text-[.65rem] sm:text-sm tracking-wider text-gray-400 w-max">
                  Certification
                </div>
                <div className=" text-[.65rem] sm:text-sm tracking-wider text-gray-400 w-max">
                  Jobs
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2 w-36 sm:w-56 sm:max-w-56">
                <div className="mb-5 text-sm font-semibold sm:text-xl font-jost">
                  CONTACT
                </div>
                <div className="flex items-center text-[.65rem] sm:text-xs ">
                  <MapPin className="w-8 h-8 p-2 mb-auto text-gray-300 sm:w-10 sm:h-10" />
                  <div className="text-gray-400">
                    <div className="">Our Address:</div>
                    <div className="">
                      Old Westbury 256, New York 11201, United States
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-[.65rem] sm:text-xs text-gray-400">
                  <PhoneCall className="w-6 h-6 p-2 text-gray-300 sm:w-8 sm:h-8 " />
                  +880 123 (4567) 890
                </div>
                <div className="flex items-center text-[.65rem] sm:text-xs text-gray-400">
                  <AtSign className="w-6 h-6 p-2 text-gray-300 sm:w-8 sm:h-8" />
                  example@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col justify-between sm:px-12 px-4 py-1 pt-3 sm:flex-row sm:pt-4 text-[.65rem] text-white  border-t border-gray-500">
            <div className="tracking-wider">
              Copyright © 2024 Consalt. Designed & Developed by Dream-IT
            </div>
            <div className="flex gap-2 font-bold sm:gap-4 ">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                FACEBOOK
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
