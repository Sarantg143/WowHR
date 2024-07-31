import com1 from "../assets/Images/company1.jpg";
import com2 from "../assets/Images/company2.png";
import com3 from "../assets/Images/company3.png";
import com4 from "../assets/Images/company4.png";
import Banner from "./Banner";

const Partners = () => {
  return (
    <section
      id="partners"
      className="flex flex-col items-center justify-center h-screen overflow-hidden bg-red-600"
    >
      <div className="mb-32">
        <Banner />
      </div>
      <div className="max-w-6xl bg-red-200">
        <div className="text-3xl font-semibold text-center bg-green-300 font-jost mb-9">
          BUSINESS PARTNERS
        </div>
        <div className="bg-green-400 text-lg font-semibold text-center tracking-wider leading-[1.9] mb-20 mx-auto w-[78%]">
          To be one of the pioneering, dynamic and leading companies that offer
          quality products and services with an understanding of continuous
          improvement in the fields in which it operates.
        </div>
        <div className="flex justify-between w-full mb-20 bg-purple-800">
          <img
            src={com1}
            alt="com1"
            className="object-contain h-auto bg-red-200 w-44"
          />
          <img
            src={com3}
            alt="com3"
            className="object-contain h-auto bg-red-400 w-44"
          />
          <img
            src={com2}
            alt="com2"
            className="object-contain h-auto bg-red-300 w-36"
          />
          <img
            src={com4}
            alt="com4"
            className="object-contain w-24 h-auto bg-red-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
