import com1 from "../assets/Images/company1.jpg";
import com2 from "../assets/Images/company2.png";
import com3 from "../assets/Images/company3.png";
import com4 from "../assets/Images/company4.png";
import Banner from "./Banner";

const Partners = () => {
  return (
    <section
      id="partners"
      className="flex flex-col items-center justify-center h-full overflow-hidden bg-red-600 sm:h-screen"
    >
      <div className="bg-green-100 my-7 sm:mt-0 sm:mb-24">
        <Banner />
      </div>
      <div className="max-w-6xl bg-red-200">
        <div className="mb-5 text-xl font-semibold text-center bg-green-300 sm:text-3xl font-jost sm:mb-9">
          BUSINESS PARTNERS
        </div>
        <div className="bg-green-400 text-xs sm:text-lg font-semibold text-center tracking-wider leading-[1.9] mb-20 mx-auto w-[78%]">
          To be one of the pioneering, dynamic and leading companies that offer
          quality products and services with an understanding of continuous
          improvement in the fields in which it operates.
        </div>
        <div className="flex justify-between w-full mb-10 bg-purple-800 sm:mb-20">
          <img
            src={com1}
            alt="com1"
            className="object-contain w-24 h-auto bg-red-200 sm:w-44"
          />
          <img
            src={com3}
            alt="com3"
            className="object-contain w-24 h-auto bg-red-400 sm:w-44"
          />
          <img
            src={com2}
            alt="com2"
            className="object-contain w-20 h-auto bg-red-300 sm:w-36"
          />
          <img
            src={com4}
            alt="com4"
            className="object-contain w-16 h-auto bg-red-500 sm:w-24"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
