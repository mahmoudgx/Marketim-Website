import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
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
    <div className="mt-20 px-4 md:px-0">
      <motion.div
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="flex flex-col mb-20 text-center space-y-5"
      >
        <h1 className="text-[#53B7ED]">Features</h1>
        <p className="text-4xl font-semibold">
          Discover the <br />
          Comprehensive Features
        </p>
      </motion.div>
      <div className="flex  justify-center">
        <div className="flex flex-col md:flex-row max-w-5xl gap-5 mx-auto">
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.1}
            className="space-y-5 w-full md:w-[220%] border-2 p-5 rounded-lg"
          >
            <h1 className="text-xl font-semibold">
              ActiveCampaign vs. Total Sale
            </h1>
            <p>
              Both ActiveCampaign and Total Sale offer a wide range of features
              for marketing and sales automation making them suitable options
              for businesses looking to streamline their processes and drive
              growth. The choice between the two would depend on specific
              business needs, budget, and preferences regarding pricing and
              support options.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.2}
            className="space-y-5 w-full border-2 p-5 rounded-lg"
          >
            <h1 className="text-xl font-semibold">Real-Time Insights</h1>
            <p>
              Gain instant access to real-time data insights and monitor key
              metrics campaign performance as it happens. React swiftly to
              market changes with up-to-the-minute updates.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            ref={sectionRef}
            custom={0.3}
            className="space-y-5 border-2 p-5 rounded-lg"
          >
            <h1 className="text-xl font-semibold">Audience Segmentation</h1>
            <p>
              Segment your audience based on demographics behavior and
              engagement. Personalized campaigns for greater impact and drive
              engagement with targeted messaging strategies.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.4}
            className="space-y-5 border-2 p-5 rounded-lg"
          >
            <h1 className="text-xl font-semibold">Country Specification</h1>
            <p>
              Optimize campaign for in real-time based on performance data and
              conduct A/B tests to refine messaging and creative elements.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            custom={0.5}
            className="space-y-5 border-2 p-5 rounded-lg"
          >
            <h1 className="text-xl font-semibold">Multi-Channel Attribution</h1>
            <p>
              Gain a holistic view of your marketing efforts across channels.
              Understand the impact of each touchpoint on conversions and
              optimize budget allocation for maximum ROI.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <motion.button
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          custom={0.6}
          className="bg-[#5356EC] px-7 font-semibold py-3 rounded-lg"
        >
          View All
        </motion.button>
      </div>
    </div>
  );
};

export default Features;
