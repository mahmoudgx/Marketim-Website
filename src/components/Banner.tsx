import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dashborad from "../assets/dashboard.png";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="mt-20 mb-20 px-4">
      <div className="overflow-hidden flex flex-col items-center text-center bg-gradient-to-r from-purple-500 to-purple-900 mx-auto justify-center max-w-6xl p-5 rounded-lg">
        <motion.div
          className="space-y-10 mt-10"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="font-semibold text-3xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Thank you for choosing Marketim!
            <br /> Getting started with our software is quick <br /> and easy.
          </motion.h1>
          <motion.div
            className="space-x-5 flex justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.img
              width={120}
              className="cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg"
              alt="Microsoft Store"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              width={150}
              className="cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.img
              className="w-full md:max-w-3xl"
              src={dashborad}
              alt="Dashboard"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 2, duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
