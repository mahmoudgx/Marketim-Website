import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import dashboard from "../assets/dashboard.png";

const Hero = () => {
  return (
    <div className="text-center space-y-5 mt-5 px-4 md:px-0">
      <div className="flex justify-center">
        <div className="overflow-hidden bg-gradient-to-r from-purple-500 to-purple-900 p-3 text-center rounded-full flex items-center space-x-3 text-xs md:text-sm max-w-screen-md">
          <h1>
            Transforming Data into Actionable Insights for Unrivaled Marketing
            Performance
          </h1>
          <div className="bg-[#5356EC] text-white rounded-full p-1">
            <FaArrowRight size={10} />
          </div>
        </div>
      </div>
      <div className="text-3xl md:text-8xl font-bold">
        <h1>
          Empower Your
          <br /> Marketing Strategy with
          <br /> Marketim Analytics
        </h1>
      </div>
      <div>
        <p>
          Against a backdrop of dynamic visuals representing data in motion, our
          hero section captivates
          <br /> your attention, setting the stage for the transformative
          journey ahead.
        </p>
      </div>
      <div className="space-x-0 md:space-x-5 flex flex-col md:flex-row justify-center">
        <div className="flex bg-[#5356EC] font-semibold justify-center py-3 px-5 space-x-1 rounded-lg text-white items-center mb-3 md:mb-0">
          <button>Get Started For Free</button>
          <IoIosArrowRoundForward size={25} />
        </div>
        <button className="border-2 font-semibold py-3 px-5 rounded-lg">
          Download
        </button>
      </div>
      <div className="flex relative justify-center">
        <img className="w-full md:w-1/2" src={dashboard} alt="Dashboard" />
        <div className="absolute bottom-0 left-0 right-0 md:h-[500px] h-[250px] bg-gradient-to-t from-[#14141E] to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
