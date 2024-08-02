// import logo from "../assets/Images/WowHRLogo.png";

// const Header = () => {
//   return (
//     <header className="bg-green-800 text-white flex justify-between max-w-7xl h-[6.6rem] px-9 mx-auto items-center">
//       {/* <a href="#home" className="bg-red-300 p-"> */}
//       <img src={logo} alt="logo" className="w-[14.3rem] h-auto bg-red-900" />
//       {/* </a> */}
//       <nav className="flex items-center justify-between gap-4 text-base bg-yellow-200 ">
//         <a
//           href="#home"
//           className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
//         >
//           Home
//         </a>
//         <a
//           href="#about-us"
//           className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
//         >
//           About Us
//         </a>
//         <a
//           href="#events"
//           className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
//         >
//           Network
//         </a>

//         <a
//           href="#leadership"
//           className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
//         >
//           Leadership
//         </a>
//         <a
//           href="#our-service"
//           className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
//         >
//           Our Services
//         </a>
//         <a
//           href="#partners"
//           className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
//         >
//           Events
//         </a>
//         <a
//           href="#testimonials"
//           className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
//         >
//           Knowledge Hub
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import {
  Home,
  Info,
  Users,
  Award,
  Briefcase,
  Calendar,
  MessageCircle,
} from "lucide-react";

import logo from "../assets/Images/WowHRLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const handleNavClick = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <header className="bg-green-800  text-white flex justify-between max-w-7xl lg:h-[6.6rem] md:h-[6rem] h-[3.5rem] lg:px-9 mx-auto items-center relative z-50">
      <div className="relative flex items-center flex-grow lg:flex-grow-0">
        {/* Hamburger menu for smaller screens */}
        <div className="absolute left-3 lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hamburger-button"
          >
            <svg
              className="w-5 h-5 md:w-10 md:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <img
          src={logo}
          alt="logo"
          className="lg:w-[14.3rem] md:w-[15rem] mx-auto w-[9rem] h-auto bg-red-900"
        />
      </div>
      {/* Navigation links for larger screens */}
      <nav className="items-center justify-between hidden gap-4 text-base bg-yellow-200 lg:flex">
        <a
          href="#home"
          className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
        >
          Home
        </a>
        <a
          href="#about-us"
          className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
        >
          About Us
        </a>
        <a
          href="#events"
          className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
        >
          Network
        </a>
        <a
          href="#leadership"
          className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
        >
          Leadership
        </a>
        <a
          href="#our-service"
          className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
        >
          Our Services
        </a>
        <a
          href="#partners"
          className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
        >
          Events
        </a>
        <a
          href="#testimonials"
          className="px-4 py-2 font-bold text-center bg-red-300 min-w-28"
        >
          Knowledge Hub
        </a>
      </nav>
      {/* Black Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
      {/* Overlay Navigation for mobile */}
      {/* <nav
        className={`fixed top-0 left-0 w-[55%] h-full bg-gray-100 flex flex-col items-start p-4 gap-3 text-base transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-40 overflow-y-auto`}
      >
        <div className="flex items-center justify-between w-full mb-4">
          <img
            src={logo}
            alt="logo"
            className="w-3/4 md:w-[60%] h-auto p-1 bg-white rounded-lg"
          />
          <button
            onClick={toggleMenu}
            className="p-1 text-3xl text-white rounded-full md:text-5xl bg-lightBlue focus:outline-none"
          >
            <ChevronLeft />
          </button>
        </div>
        <a
          href="#home"
          onClick={handleNavClick}
          className="w-full px-4 py-2 text-base font-bold text-left text-white transition-colors duration-200 rounded-md md:py-4 md:text-2xl bg-lightBlue "
        >
          Home
        </a>
        <a
          href="#about-us"
          onClick={handleNavClick}
          className="w-full px-4 py-2 text-base font-bold text-left text-white transition-colors duration-200 rounded-md md:py-4 md:text-2xl bg-lightBlue"
        >
          About Us
        </a>
        <a
          href="#events"
          onClick={handleNavClick}
          className="w-full px-4 py-2 text-base font-bold text-left text-white transition-colors duration-200 rounded-md md:py-4 md:text-2xl bg-lightBlue"
        >
          Network
        </a>
        <a
          href="#leadership"
          onClick={handleNavClick}
          className="w-full px-4 py-2 text-base font-bold text-left text-white transition-colors duration-200 rounded-md md:py-4 md:text-2xl bg-lightBlue"
        >
          Leadership
        </a>
        <a
          href="#our-service"
          onClick={handleNavClick}
          className="w-full px-4 py-2 text-base font-bold text-left text-white transition-colors duration-200 rounded-md md:py-4 md:text-2xl bg-lightBlue"
        >
          Our Services
        </a>
        <a
          href="#partners"
          onClick={handleNavClick}
          className="w-full px-4 py-2 text-base font-bold text-left text-white transition-colors duration-200 rounded-md md:py-4 md:text-2xl bg-lightBlue"
        >
          Events
        </a>
        <a
          href="#testimonials"
          onClick={handleNavClick}
          className="w-full px-4 py-2 text-base font-bold text-left text-white transition-colors duration-200 rounded-md md:py-4 md:text-2xl bg-lightBlue"
        >
          Knowledge Hub
        </a>
      </nav> */}
      {/* backdrop-blur-lg bg-gray-100 bg-opacity-[.7] */}
      <nav
        className={`fixed top-0 left-0 w-[55%] h-full  flex flex-col  items-center bg-white p-1 gap-4 text-base transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-40 overflow-y-auto`}
      >
        <div className="flex items-center justify-between w-full p-1 px-2 bg-white">
          <img
            src={logo}
            alt="logo"
            className="w-3/4 md:w-[60%] h-auto p-2 bg-white rounded-lg"
          />
          <button
            onClick={toggleMenu}
            className="p-1 px-2 text-white rounded-full bg-lightBlue focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="flex h-[60%] w-[90%] justify-between flex-col gap-3 p-4 bg-gray-400  shadow-xl bg-opacity-30 rounded-2xl ">
          <a
            href="#home"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Home className="w-5 h-5 mr-2" /> Home
          </a>
          <a
            href="#about-us"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Info className="w-5 h-5 mr-2" /> About Us
          </a>
          <a
            href="#events"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Users className="w-5 h-5 mr-2" /> Network
          </a>
          <a
            href="#leadership"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Award className="w-5 h-5 mr-2" /> Leadership
          </a>
          <a
            href="#our-service"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Briefcase className="w-5 h-5 mr-2" /> Our Services
          </a>
          <a
            href="#partners"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Calendar className="w-5 h-5 mr-2" /> Events
          </a>
          <a
            href="#testimonials"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <MessageCircle className="w-5 h-5 mr-2" /> Knowledge Hub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
