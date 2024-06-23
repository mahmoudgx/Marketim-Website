import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import dashboard from "../assets/dashboard.png";

const Hero = () => {
  const bannerRef = useRef(null);
  const bannerInView = useInView(bannerRef, { once: true });

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const paragraphRef = useRef(null);
  const paragraphInView = useInView(paragraphRef, { once: true });

  const buttonsRef = useRef(null);
  const buttonsInView = useInView(buttonsRef, { once: true });

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className="text-center space-y-5 md:mt-5 mt-0 px-4 md:px-0">
      <div className="flex justify-center">
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={bannerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="overflow-hidden bg-gradient-to-r from-purple-500 to-purple-900 p-3 text-center rounded-full md:flex hidden items-center space-x-3 text-xs md:text-sm max-w-screen-md"
        >
          <h1>
            Transforming Data into Actionable Insights for Unrivaled Marketing
            Performance
          </h1>
          <div className="bg-[#5356EC] text-white rounded-full p-1">
            <FaArrowRight size={10} />
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={headingInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-8xl font-bold"
      >
        <h1>
          Empower Your
          <br /> Marketing Strategy with
          <br /> Marketim Analytics
        </h1>
      </motion.div>
      <motion.div
        ref={paragraphRef}
        initial={{ opacity: 0 }}
        animate={paragraphInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="md:text-base text-sm">
          Against a backdrop of dynamic visuals representing data in motion, our
          hero section captivates
          <br className="md:flex hidden" /> your attention, setting the stage
          for the transformative journey ahead.
        </p>
      </motion.div>
      <motion.div
        ref={buttonsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={buttonsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="space-x-0 md:space-x-5 flex flex-col md:flex-row justify-center"
      >
        <div className="flex bg-[#5356EC] font-semibold justify-center py-3 px-5 space-x-1 rounded-lg text-white items-center mb-3 md:mb-0">
          <button>Get Started For Free</button>
          <IoIosArrowRoundForward size={25} />
        </div>
        <button className="border-2 font-semibold py-3 px-5 rounded-lg">
          Download
        </button>
      </motion.div>
      <div className="flex relative justify-center">
        <motion.img
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imageInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-full md:w-1/2"
          src={dashboard}
          alt="Dashboard"
        />
        <div className="absolute bottom-0 left-0 right-0 md:h-[500px] h-[250px] bg-gradient-to-t from-[#14141E] to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
