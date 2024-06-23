import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Pricing = () => {
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

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "startups and small businesses",
      buttonBg: "#5356EC",
      buttonText: "Choose Now",
      bgColor: "#14141E",
      features: [
        { name: "real-time insights", accepted: true },
        { name: "Customizable dashboards", accepted: true },
        { name: "multi channel attribution", accepted: true },
        { name: "predictive analytics", accepted: false },
        { name: "audience segmentation", accepted: false },
        { name: "campaign optimization", accepted: false },
        { name: "intelligent recommendations", accepted: false },
        { name: "collaboration tools", accepted: false },
        { name: "dedicated support", accepted: false },
        { name: "custom pricing option", accepted: false },
        { name: "no-risk trial period", accepted: true },
        { name: "scalable pricing", accepted: true },
      ],
    },
    {
      name: "Pro",
      price: "$99/month",
      description: "growing business and marketing teams",
      buttonBg: "#ffffff",
      buttonText: "Choose Now",
      bgColor: "#5356EC",
      features: [
        { name: "real-time insights", accepted: true },
        { name: "Customizable dashboards", accepted: true },
        { name: "multi channel attribution", accepted: true },
        { name: "predictive analytics", accepted: true },
        { name: "audience segmentation", accepted: true },
        { name: "campaign optimization", accepted: true },
        { name: "intelligent recommendations", accepted: false },
        { name: "collaboration tools", accepted: false },
        { name: "dedicated support", accepted: false },
        { name: "custom pricing option", accepted: false },
        { name: "no-risk trial period", accepted: true },
        { name: "scalable pricing", accepted: true },
      ],
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "large enterprise organizations",
      buttonBg: "#5356EC",
      buttonText: "Choose Now",
      bgColor: "#14141E",
      features: [
        { name: "real-time insights", accepted: true },
        { name: "Customizable dashboards", accepted: true },
        { name: "multi channel attribution", accepted: true },
        { name: "predictive analytics", accepted: true },
        { name: "audience segmentation", accepted: true },
        { name: "campaign optimization", accepted: true },
        { name: "intelligent recommendations", accepted: true },
        { name: "collaboration tools", accepted: true },
        { name: "dedicated support", accepted: true },
        { name: "custom pricing option", accepted: true },
        { name: "no-risk trial period", accepted: true },
        { name: "scalable pricing", accepted: true },
      ],
    },
  ];

  return (
    <div ref={sectionRef} className="mt-20 px-4">
      <motion.div
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="flex flex-col text-center space-y-5"
      >
        <h1 className="text-[#53B7ED]">Pricing</h1>
        <p className="text-2xl md:text-4xl font-semibold">
          Tailored pricing plans to <br className="hidden md:block" /> suit
          every business need
        </p>
      </motion.div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 mt-10 md:mt-20 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={itemVariants}
              custom={index}
              key={index}
              className={`border-2 space-y-5 rounded-lg p-7 ${
                plan.bgColor === "#5356EC" ? "bg-[#5356EC]" : "bg-[#14141E]"
              }`}
            >
              <h1 className="text-2xl font-semibold">{plan.name}</h1>
              <h1 className="text-4xl font-bold">{plan.price}</h1>
              <p>{plan.description}</p>
              <button
                className={`py-2 w-full rounded-lg font-semibold ${
                  plan.bgColor === "#5356EC"
                    ? "bg-white text-black"
                    : "bg-[#5356EC] text-white"
                }`}
              >
                {plan.buttonText}
              </button>
              <div className="flex flex-col items-center space-y-5">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      width={20}
                      src={`https://www.svgrepo.com/show/${
                        feature.accepted
                          ? "384403/accept-check-good-mark-ok-tick"
                          : "401366/cross-mark-button"
                      }.svg`}
                      alt={feature.accepted ? "Accepted" : "Not accepted"}
                    />
                    <h1>{feature.name}</h1>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
