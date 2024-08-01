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
    <header className="bg-green-800  text-white flex justify-between max-w-7xl sm:h-[6.6rem] h-[4rem] sm:px-9 mx-auto items-center relative z-50">
      <div className="relative flex items-center flex-grow sm:flex-grow-0">
        {/* Hamburger menu for smaller screens */}
        <div className="absolute left-3 sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hamburger-button"
          >
            <svg
              className="w-6 h-6"
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
          className="sm:w-[14.3rem] mx-auto w-[10rem] h-auto bg-red-900"
        />
      </div>

      {/* Navigation links for larger screens */}
      <nav className="items-center justify-between hidden gap-4 text-base bg-yellow-200 sm:flex">
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
      <nav
        className={`fixed top-0 left-0 w-[55%] h-full bg-gray-100 flex flex-col items-start p-4 gap-3 text-base transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden z-40 overflow-y-auto`}
      >
        <div className="flex items-center justify-between w-full mb-4">
          <img
            src={logo}
            alt="logo"
            className="w-3/4 h-auto p-1 bg-white rounded-lg"
          />
          <button
            onClick={toggleMenu}
            className="p-1 text-3xl text-white rounded-full bg-lightBlue focus:outline-none"
          >
            <ChevronLeft />
          </button>
        </div>
        <a
          href="#home"
          onClick={handleNavClick}
          className="w-full px-4 py-2 font-bold text-left text-white transition-colors duration-200 rounded-md bg-lightBlue "
        >
          Home
        </a>
        <a
          href="#about-us"
          onClick={handleNavClick}
          className="w-full px-4 py-2 font-bold text-left text-white transition-colors duration-200 rounded-md bg-lightBlue"
        >
          About Us
        </a>
        <a
          href="#events"
          onClick={handleNavClick}
          className="w-full px-4 py-2 font-bold text-left text-white transition-colors duration-200 rounded-md bg-lightBlue"
        >
          Network
        </a>
        <a
          href="#leadership"
          onClick={handleNavClick}
          className="w-full px-4 py-2 font-bold text-left text-white transition-colors duration-200 rounded-md bg-lightBlue"
        >
          Leadership
        </a>
        <a
          href="#our-service"
          onClick={handleNavClick}
          className="w-full px-4 py-2 font-bold text-left text-white transition-colors duration-200 rounded-md bg-lightBlue"
        >
          Our Services
        </a>
        <a
          href="#partners"
          onClick={handleNavClick}
          className="w-full px-4 py-2 font-bold text-left text-white transition-colors duration-200 rounded-md bg-lightBlue"
        >
          Events
        </a>
        <a
          href="#testimonials"
          onClick={handleNavClick}
          className="w-full px-4 py-2 font-bold text-left text-white transition-colors duration-200 rounded-md bg-lightBlue"
        >
          Knowledge Hub
        </a>
      </nav>
    </header>
  );
};

export default Header;
