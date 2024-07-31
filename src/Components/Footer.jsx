import f1 from "../assets/Images/f1.png";
import f2 from "../assets/Images/f2.jpg";
import f3 from "../assets/Images/f3.jpg";
import f4 from "../assets/Images/f4.jpg";
import logo from "../assets/Images/WowHRLogo.png";
import footerBG from "../assets/SVG/footerBG.svg";
import { MapPin, PhoneCall, AtSign } from "lucide-react";

const Footer = () => {
  return (
    <section id="footer" className="h-screen overflow-hidden text-white ">
      <div className="flex w-full h-[18rem] ">
        <img src={f1} alt="f1" className="object-cover w-full " />
        <img src={f2} alt="f2" className="object-cover w-full " />
        <img src={f3} alt="f3" className="object-cover w-full " />
        <img src={f4} alt="f4" className="object-cover w-full " />
      </div>
      <div
        className="h-full pt-12 bg-black"
        style={{
          backgroundImage: `url(${footerBG})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
        }}
      >
        <div className="px-12 mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-10 px-12 mb-14 ">
            <div className="w-[18rem] ">
              <img
                src={logo}
                alt="logo"
                className="w-[13rem] rounded-lg p-2 mb-5 bg-white"
              />
              <div className=" text-[.9rem] leading-[1.2] mb-10 tracking-wide">
                WoW HR, a not-for-profit organization intended to create a WoW
                factor among HR Fraternities and Students community through
                Skill development.
              </div>
              <div className="flex justify-between text-xs border-b border-gray-500">
                <input
                  type="email"
                  className="w-full p-2 text-black bg-transparent"
                  placeholder="Your E-Mail"
                />
                <button className="px-4 font-bold py-1 mb-1 text-[.6rem] tracking-wide bg-white rounded-full text-defaultBlue">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className="flex px-6 ">
              <div className="w-48 space-y-1 max-w-56">
                <div className="text-lg font-semibold mb-7 font-jost">
                  QUICK LINKS
                </div>
                <div className="text-sm text-gray-400 w-max">About Us</div>
                <div className="text-sm text-gray-400 w-max">Meet the Team</div>
                <div className="text-sm text-gray-400 w-max">Integrations</div>
                <div className="text-sm text-gray-400 w-max">Contact Us</div>
                <div className="text-sm text-gray-400 w-max">Blog</div>
              </div>
              <div className="w-48 space-y-1 max-w-56">
                <div className="text-lg font-semibold mb-7 font-jost">
                  SERVICE
                </div>
                <div className="text-sm text-gray-400 w-max">Network</div>
                <div className="text-sm text-gray-400 w-max">Chapters</div>
                <div className="text-sm text-gray-400 w-max">Certification</div>
                <div className="text-sm text-gray-400 w-max">Jobs</div>
              </div>
              <div className="w-56 space-y-1 max-w-56">
                <div className="text-lg font-semibold mb-7 font-jost">
                  CONTACT
                </div>
                <div className="flex items-center gap-2 text-xs ">
                  <MapPin className="p-2 mb-auto text-black bg-white rounded-full w-7 h-7" />
                  <div className="text-gray-400">
                    <div className="">Our Address:</div>
                    <div className="">
                      Old Westbury 256, New York 11201, United States
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <PhoneCall className="p-2 text-black bg-white rounded-full w-7 h-7 " />
                  +880 123 (4567) 890
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <AtSign className="p-2 text-black bg-white rounded-full w-7 h-7" />
                  example@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  justify-between px-12 py-1 pt-4 text-[.65rem] text-white  border-t border-gray-500">
            <div className="tracking-wider">
              Copyright © 2024 Consalt. Designed & Developed by Dream-IT
            </div>
            <div className="flex gap-4 font-bold ">
              <a>FACEBOOK</a> <a>TWITTER</a> <a>INSTAGRAM</a> <a>GITHUB</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
