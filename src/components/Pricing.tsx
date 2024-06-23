const Pricing = () => {
  return (
    <div className="mt-20 px-4">
      <div className="flex flex-col mb-20 text-center space-y-5">
        <h1 className="text-[#53B7ED]">Pricing</h1>
        <p className="text-2xl md:text-4xl font-semibold">
          Tailored pricing plans to <br className="hidden md:block" /> suit
          every business need
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 mt-10 md:mt-20 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <div className="border-2 bg-[#14141E] space-y-5 rounded-lg p-7">
              <h1 className="text-2xl font-semibold">Starter</h1>
              <h1 className="text-4xl font-bold">Free</h1>
              <p>startups and small businesses</p>
              <button className="bg-[#5356EC] py-2 w-full rounded-lg font-semibold">
                Choose Now
              </button>
              <div className="flex flex-col items-center space-y-5">
                {[
                  "real-time insights",
                  "Customizable dashboards",
                  "multi channel attribution",
                  "predictive analytics",
                  "audience segmentation",
                  "campaign optimization",
                  "intelligent recommendations",
                  "collaboration tools",
                  "dedicated support",
                  "custom pricing option",
                  "no-risk trial period",
                  "scalable pricing",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      width={20}
                      src={`https://www.svgrepo.com/show/${
                        feature.includes("mark")
                          ? "401366/cross-mark-button"
                          : "384403/accept-check-good-mark-ok-tick"
                      }.svg`}
                    />
                    <h1>{feature}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#5356EC] space-y-5 rounded-lg p-7">
              <h1 className="text-2xl font-semibold">Pro</h1>
              <h1 className="text-4xl font-bold">
                $99<span className="text-sm">/month</span>
              </h1>
              <p>growing business and marketing teams</p>
              <button className="bg-white text-black py-2 w-full rounded-lg font-semibold">
                Choose Now
              </button>
              <div className="flex flex-col items-center space-y-5">
                {[
                  "real-time insights",
                  "Customizable dashboards",
                  "multi channel attribution",
                  "predictive analytics",
                  "audience segmentation",
                  "campaign optimization",
                  "intelligent recommendations",
                  "collaboration tools",
                  "dedicated support",
                  "custom pricing option",
                  "no-risk trial period",
                  "scalable pricing",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      width={20}
                      src={`https://www.svgrepo.com/show/${
                        feature.includes("mark")
                          ? "401366/cross-mark-button"
                          : "384403/accept-check-good-mark-ok-tick"
                      }.svg`}
                    />
                    <h1>{feature}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 bg-[#14141E] space-y-5 rounded-lg p-7">
              <h1 className="text-2xl font-semibold">Enterprise</h1>
              <h1 className="text-4xl font-bold">Custom Pricing</h1>
              <p>large enterprise organizations</p>
              <button className="bg-[#5356EC] py-2 w-full rounded-lg font-semibold">
                Choose Now
              </button>
              <div className="flex flex-col items-center space-y-5">
                {[
                  "real-time insights",
                  "Customizable dashboards",
                  "multi channel attribution",
                  "predictive analytics",
                  "audience segmentation",
                  "campaign optimization",
                  "intelligent recommendations",
                  "collaboration tools",
                  "dedicated support",
                  "custom pricing option",
                  "no-risk trial period",
                  "scalable pricing",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      width={20}
                      src={`https://www.svgrepo.com/show/${
                        feature.includes("mark")
                          ? "401366/cross-mark-button"
                          : "384403/accept-check-good-mark-ok-tick"
                      }.svg`}
                    />
                    <h1>{feature}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
