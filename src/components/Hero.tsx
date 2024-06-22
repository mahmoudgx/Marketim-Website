import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import dashboard from "../assets/dashboard.png";

const Hero = () => {
  return (
    <div className="text-center space-y-5 mt-5">
      <div className="flex justify-center">
        <div className="border-2  p-3 text-center rounded-full flex items-center space-x-3 text-sm max-w-screen-md">
          <h1>
            Transforming Data into Actionable Insights for Unrivaled Marketing
            Performance
          </h1>
          <div className="bg-[#5356EC] text-white rounded-full p-1">
            <FaArrowRight size={10} />
          </div>
        </div>
      </div>
      <div className="text-8xl font-bold">
        <h1>
          Empower Your<br></br> Marketing Strategy with<br></br> Marketim
          Analytics
        </h1>
      </div>
      <div>
        <p>
          Against a backdrop of dynamic visuals representing data in motion, our
          bhero section captivates<br></br> your attention, setting the stage
          for the transformative journey ahead.
        </p>
      </div>
      <div className="space-x-5 flex justify-center">
        <div className="flex bg-[#5356EC] font-semibold py-3 px-5 space-x-1 rounded-lg text-white items-center">
          <button>Get Started For Free</button>
          <IoIosArrowRoundForward size={25} />
        </div>
        <button className="border-2 font-semibold py-3 px-5 rounded-lg">
          Download
        </button>
      </div>
      <div className="flex justify-center">
        <img className="w-1/2" src={dashboard} />
      </div>
    </div>
  );
};

export default Hero;
