import com1 from "../assets/Images/company1.jpg";
import com2 from "../assets/Images/company2.png";
import com3 from "../assets/Images/company3.png";
import com4 from "../assets/Images/company4.png";

const Partners = () => {
  return (
    <section
      id="partners"
      className="h-screen flex flex-col justify-center items-center overflow-hidden bg-red-600"
    >
      <div className="bg-gradient-to-r from-blue-500 via-white  mb-32 to-blue-500 rotate-2 h-[4.5rem] font-semibold font-jost text-[1.75rem] flex justify-center items-center max-w-full overflow-hidden whitespace-nowrap scale-105 tracking-tight">
        <bold>&#8226; </bold> &nbsp; WOW HR CRAFTING AN IMPACTFUL LEARNING
        CURVE&nbsp;&nbsp;&nbsp;&nbsp; <bold>&#8226; </bold> &nbsp; WOW HR
        CRAFTING AN IMPACTFUL LEARNING CURVE&nbsp;&nbsp;&nbsp;&nbsp;
      </div>

      <div className="max-w-6xl bg-red-200">
        <div className="bg-green-300 text-center font-semibold font-jost text-3xl mb-9">
          BUSINESS PARTNERS
        </div>
        <div className="bg-green-400 text-lg font-semibold text-center tracking-wider leading-[1.9] mb-20 mx-auto w-[78%]">
          To be one of the pioneering, dynamic and leading companies that offer
          quality products and services with an understanding of continuous
          improvement in the fields in which it operates.
        </div>
        <div className="bg-purple-800 flex justify-between mb-20 w-full">
          <img
            src={com1}
            alt="com1"
            className="object-contain w-44 h-auto bg-red-200"
          />
          <img
            src={com3}
            alt="com3"
            className="object-contain w-44 h-auto bg-red-400"
          />
          <img
            src={com2}
            alt="com2"
            className="object-contain w-36 h-auto bg-red-300"
          />
          <img
            src={com4}
            alt="com4"
            className="object-contain w-24   h-auto bg-red-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
