import { FaPlay } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  };

  return (
    <div className="mt-20 mb-20 px-4">
      <motion.div
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="flex flex-col mb-20 text-center space-y-5"
      >
        <h1 className="text-[#53B7ED]">Testimonials</h1>
        <p className="text-2xl md:text-4xl font-semibold">
          Many Companies Believe in <br className="hidden md:block" /> Marketim
        </p>
      </motion.div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.1}
            className="space-y-5 border-2 rounded-lg p-5"
          >
            <img
              width={50}
              src="https://www.svgrepo.com/show/416519/medium-logo.svg"
              alt="Medium"
            />
            <p>
              Marketim analytics has become an indispensable part of our
              marketing toolkit. Its robust features and insightful reports have
              empowered us to make data-driven decisions that have a tangible
              impact on our bottom line.
            </p>
            <div className="bg-white rounded-full inline-block p-2 items-center text-blue-500">
              <FaPlay />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.2}
            className="space-y-5 border-2 rounded-lg p-5"
          >
            <img
              width={50}
              src="https://www.svgrepo.com/show/400860/tridentemblem.svg"
              alt="Trident"
            />
            <p>
              Since implementing Marketim analytics, we've seen a significant
              improvement in our marketing strategy. Its advanced analytics
              tools and actionable insights have empowered us to make
              data-driven decisions and stay ahead of the competition.
            </p>
            <div className="bg-white rounded-full inline-block p-2 items-center text-blue-500">
              <FaPlay />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.3}
            ref={sectionRef}
            className="space-y-5 border-2 rounded-lg p-5"
          >
            <img
              width={50}
              src="https://www.svgrepo.com/show/303558/yammer-1-logo.svg"
              alt="Yammer"
            />
            <p>
              Marketim analytics has exceeded our expectations in every way. Its
              user-friendly interface, comprehensive reporting, and responsive
              support team make it a pleasure to work with. We're thrilled with
              the results we've achieved using this platform!
            </p>
            <div className="bg-white rounded-full inline-block p-2 items-center text-blue-500">
              <FaPlay />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex flex-col md:flex-row gap-5 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.4}
            className="space-y-5 border-2 rounded-lg p-5"
          >
            <img
              width={50}
              src="https://www.svgrepo.com/show/303440/gulp-logo.svg"
              alt="Gulp"
            />
            <p>
              The depth of insights provided by Marketim analytics is truly
              impressive. It's helped us understand our audience better, refine
              our targeting strategies, and improve overall campaign
              performance. It's a must-have for any marketer serious about
              driving results.
            </p>
            <div className="bg-white rounded-full inline-block p-2 items-center text-blue-500">
              <FaPlay />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.5}
            className="space-y-5 border-2 md:w-[365%] rounded-lg p-5 md:bg-[url('D:/Projects/Marketim/src/assets/person.png')] overflow-hidden bg-contain bg-right bg-no-repeat"
          >
            <div className="space-y-5 md:w-[50%]">
              <img
                width={50}
                src="https://www.svgrepo.com/show/303549/google-analytics-1-logo.svg"
                alt="Google Analytics"
              />
              <p>
                As a small business owner, I was initially skeptical about
                investing in analytics software. However, after trying Marketim
                analytics, I can confidently say it's worth every penny.
              </p>
              <div className="space-y-1">
                <h1 className="text-sm font-semibold">Michael Brown</h1>
                <h1 className="text-sm font-semibold">Founder of Trance</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
