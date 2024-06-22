const Work = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col mb-20 text-center space-y-5">
        <h1 className="text-[#53B7ED]">How It Work</h1>
        <p className="text-4xl font-semibold">
          How Marketim Works<br></br> for You
        </p>
        <div className="grid grid-row-2 gap-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="border-2 w-[70%] rounded-lg space-y-5 p-5">
              <div className="flex justify-between items-center">
                <h1 className="flex flex-col text-2xl  font-semibold">
                  01 <span className="text-xl">Step</span>
                </h1>
                <img
                  width={50}
                  src="https://www.svgrepo.com/show/362160/sign-up.svg"
                />
              </div>
              <div className="text-left">
                <ul className="mb-2">Sign Up</ul>
                <li className="text-sm ml-2">
                  begin your journey by signing up for marketim.
                </li>
                <li className="text-sm ml-2">
                  provide your email address and create a password to get
                  started.
                </li>
              </div>
            </div>
            <div className="border-2 w-[70%] rounded-lg space-y-5 p-5">
              <div className="flex justify-between items-center">
                <h1 className="flex flex-col text-2xl  font-semibold">
                  02 <span className="text-xl">Step</span>
                </h1>
                <img
                  width={50}
                  src="https://www.svgrepo.com/show/29508/apps.svg"
                />
              </div>
              <div className="text-left">
                <ul className="mb-2">Customize Your Dashboard</ul>
                <li className="text-sm ml-2">
                  tailor your dashboard to your specific needs and preferences
                </li>
                <li className="text-sm ml-2">
                  arrange widgets visualization options, and workspace
                </li>
              </div>
            </div>
            <div className="border-2 w-[70%] rounded-lg space-y-5 p-5">
              <div className="flex justify-between items-center">
                <h1 className="flex flex-col text-2xl  font-semibold">
                  03 <span className="text-xl">Step</span>
                </h1>
                <img
                  width={50}
                  src="https://www.svgrepo.com/show/506956/cld-cloud-wifi.svg"
                />
              </div>
              <div className="text-left">
                <ul className="mb-2">Connect Your Data Sources</ul>
                <li className="text-sm ml-2">
                  seamlessly integrate your data sources with marketim
                </li>
                <li className="text-sm ml-2">
                  connect platforms like google analytics, facebook ads and more
                  with just a few clicks
                </li>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="border-2 w-[70%] rounded-lg space-y-5 p-5">
              <div className="flex justify-between items-center">
                <h1 className="flex flex-col text-2xl  font-semibold">
                  04 <span className="text-xl">Step</span>
                </h1>
                <img
                  width={50}
                  src="https://www.svgrepo.com/show/345315/graph-chart-data-analytics-statistic-report-analysis.svg"
                />
              </div>
              <div className="text-left">
                <ul className="mb-2">explore insights and analytics</ul>
                <li className="text-sm ml-2">
                  dive into your insights and analytics to uncover valuable
                  information
                </li>
                <li className="text-sm ml-2">
                  track key metrics, monitor campaign performance insights
                </li>
              </div>
            </div>
            <div className="border-2 w-[70%] rounded-lg space-y-5 p-5">
              <div className="flex justify-between items-center">
                <h1 className="flex flex-col text-2xl  font-semibold">
                  05 <span className="text-xl">Step</span>
                </h1>
                <img
                  width={50}
                  src="https://www.svgrepo.com/show/428744/marketing-promotion-communication.svg"
                />
              </div>
              <div className="text-left">
                <ul className="mb-2">optimize your marketing strategy</ul>
                <li className="text-sm ml-2">
                  identify opportunities for improvement and optimization
                </li>
                <li className="text-sm ml-2">
                  fine-tune your campaigns to maximum your return on investment
                </li>
              </div>
            </div>
            <div className="border-2 w-[70%] rounded-lg space-y-5 p-5">
              <div className="flex justify-between items-center">
                <h1 className="flex flex-col text-2xl  font-semibold">
                  06 <span className="text-xl">Step</span>
                </h1>
                <img
                  width={50}
                  src="https://www.svgrepo.com/show/489955/star-favorite.svg"
                />
              </div>
              <div className="text-left">
                <ul className="mb-2">measure your success</ul>
                <li className="text-sm ml-2">
                  track your progress over time with comprehensive reporting
                </li>
                <li className="text-sm ml-2">
                  analyze trends measure your success and your success
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#5356EC] px-7 font-semibold py-3 rounded-lg">
          View All
        </button>
      </div>
    </div>
  );
};

export default Work;
