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
      className="h-full my-auto overflow-hidden text-white xl:h-screen "
    >
      <div className="flex w-full h-[10rem] xl:h-[19.5rem] ">
        <img src={f1} alt="f1" className="object-cover w-1/4 xl:w-full " />
        <img src={f2} alt="f2" className="object-cover w-1/4 xl:w-full " />
        <img src={f3} alt="f3" className="object-cover w-1/4 xl:w-full " />
        <img src={f4} alt="f4" className="object-cover w-1/4 xl:w-full " />
      </div>
      <div
        className="h-full pt-8 pb-1 bg-black xl:pb-0 xl:pt-16"
        style={{
          backgroundImage: `url(${footerBG})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
        }}
      >
        <div className="mx-auto bg-red-300 xl:max-w-7xl">
          <div className="flex flex-col items-center justify-between px-3 mb-7 xl:flex-row xl:px-10 xl:mb-16 xl:gap-10 ">
            <div
              className="w-[20rem] xl:w-[20rem] md:w-[35rem] "
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <img
                src={logo}
                alt="logo"
                className="xl:w-[14rem] md:w-[12rem] w-[6rem]  rounded-lg p-2 mb-5 xl:mb-7 bg-white"
              />
              <div className="text-[.65rem] xl:text-[1rem] md:text-[1rem] leading-[1.2] mb-3 md:mb-7 xl:mb-10 tracking-wide">
                WoW HR, a not-for-profit organization intended to create a WoW
                factor among HR Fraternities and Students community through
                Skill development.
              </div>
              <div className="flex justify-between border-b border-gray-500">
                <input
                  type="email"
                  className="w-full p-1 xl:p-2 text-[.65rem] xl:text-sm md:text-sm text-white bg-transparent"
                  placeholder="Your E-Mail"
                />
                <button className="px-2 xl:px-4 py-1 mb-1 text-[.65rem] xl:text-xs font-bold tracking-wide bg-white rounded-full text-defaultBlue">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-auto bg-red-700 xl:gap-0 mt-7 xl:mt-2 xl:px-16 ">
              <div
                className="w-24 space-y-1 bg-red-100 md:w-44 xl:space-y-2 xl:w-48 xl:max-w-56"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <div className="mb-5 text-sm font-semibold xl:text-xl md:text-xl font-jost">
                  QUICK LINKS
                </div>
                <a
                  href="#about-us"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider block text-gray-400 w-max"
                >
                  About Us
                </a>
                <a
                  href="#testimonials"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider block text-gray-400 w-max"
                >
                  Meet the Team
                </a>
                <a
                  href="#events"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider block text-gray-400 w-max"
                >
                  Integrations
                </a>
                <a
                  href="#footer"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider block text-gray-400 w-max"
                >
                  Contact Us
                </a>
                <a
                  href="#our-services"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider block text-gray-400 w-max"
                >
                  Blog
                </a>
              </div>
              <div
                className="w-24 space-y-1 bg-red-300 md:w-44 xl:space-y-2 xl:w-48 xl:max-w-56"
                data-aos="fade-left"
                data-aos-duration="750"
              >
                <div className="mb-5 text-sm font-semibold xl:text-xl md:text-xl font-jost">
                  SERVICE
                </div>
                <div className=" text-[.65rem] xl:text-sm md:text-sm tracking-wider text-gray-400 w-max">
                  Network
                </div>
                <div className=" text-[.65rem] xl:text-sm md:text-sm tracking-wider text-gray-400 w-max">
                  Chapters
                </div>
                <div className=" text-[.65rem] xl:text-sm md:text-sm tracking-wider text-gray-400 w-max">
                  Certification
                </div>
                <div className=" text-[.65rem] xl:text-sm md:text-sm tracking-wider text-gray-400 w-max">
                  Jobs
                </div>
              </div>
              <div
                className="space-y-1 xl:space-y-2 w-36 xl:w-56 xl:max-w-56"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="mb-5 text-sm font-semibold xl:text-xl md:text-xl font-jost">
                  CONTACT
                </div>
                <div className="flex items-center text-[.65rem] xl:text-xs ">
                  <MapPin className="w-8 h-8 p-2 mb-auto text-gray-300 xl:w-10 xl:h-10" />
                  <div className="text-gray-400">
                    <div className="">Our Address:</div>
                    <div className="">
                      Old Westbury 256, New York 11201, United States
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-[.65rem] xl:text-xs text-gray-400">
                  <PhoneCall className="w-6 h-6 p-2 text-gray-300 xl:w-8 xl:h-8 " />
                  +880 123 (4567) 890
                </div>
                <div className="flex items-center text-[.65rem] xl:text-xs text-gray-400">
                  <AtSign className="w-6 h-6 p-2 text-gray-300 xl:w-8 xl:h-8" />
                  example@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col justify-between xl:px-12 px-4 py-1 pt-3 xl:flex-row xl:pt-4 text-[.65rem] text-white  border-t border-gray-500">
            <div className="tracking-wider">
              Copyright © 2024 Consalt. Designed & Developed by Dream-IT
            </div>
            <div className="flex gap-2 font-bold xl:gap-4 ">
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
