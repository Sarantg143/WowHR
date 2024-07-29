import logo from "../assets/Images/WowHRLogo.png";

const Header = () => {
  return (
    <header className="bg-green-800 text-white flex justify-between max-w-7xl h-[6.6rem] px-9 mx-auto items-center">
      {/* <a href="#home" className="bg-red-300 p-"> */}
      <img src={logo} alt="logo" className="w-[14.3rem] h-auto bg-red-900" />
      {/* </a> */}
      <nav className=" flex justify-between text-base gap-4 items-center bg-yellow-200">
        <a
          href="#home"
          className="bg-red-300 px-4 font-bold py-2 text-center min-w-28"
        >
          Home
        </a>
        <a
          href="#about-us"
          className="bg-red-300 px-4 font-bold py-2 text-center min-w-28"
        >
          About Us
        </a>
        <a
          href="#events"
          className="bg-red-300 px-4 font-bold py-2 text-center min-w-28"
        >
          Network
        </a>

        <a
          href="#leadership"
          className="bg-red-300 px-4 font-bold py-2 text-center min-w-28"
        >
          Leadership
        </a>
        <a
          href="#our-service"
          className="bg-red-300 px-4 font-bold py-2 text-center min-w-28"
        >
          Our Services
        </a>
        <a
          href="#partners"
          className="bg-red-300 px-4 font-bold py-2 text-center min-w-28"
        >
          Events
        </a>
        <a
          href="#testimonials"
          className="bg-red-300 px-4 font-bold py-2 text-center min-w-28"
        >
          Knowledge Hub
        </a>
      </nav>
    </header>
  );
};

export default Header;
