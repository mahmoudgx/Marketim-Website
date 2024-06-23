const Work = () => {
  return (
    <div className="mt-20 px-5 md:px-0">
      <div className="flex flex-col mb-20 text-center space-y-5">
        <h1 className="text-[#53B7ED]">How It Works</h1>
        <p className="text-4xl font-semibold">
          How Marketim Works
          <br /> for You
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <div className="border-2 rounded-lg space-y-5 p-5">
            <div className="flex justify-between items-center">
              <h1 className="flex flex-col text-2xl font-semibold">
                01 <span className="text-xl">Step</span>
              </h1>
              <img
                className="w-12 h-12"
                src="https://www.svgrepo.com/show/362160/sign-up.svg"
                alt="Sign Up"
              />
            </div>
            <div className="text-left">
              <h2 className="mb-2 text-lg font-semibold">Sign Up</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Begin your journey by signing up for Marketim.</li>
                <li>
                  Provide your email address and create a password to get
                  started.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-2 rounded-lg space-y-5 p-5">
            <div className="flex justify-between items-center">
              <h1 className="flex flex-col text-2xl font-semibold">
                02 <span className="text-xl">Step</span>
              </h1>
              <img
                className="w-12 h-12"
                src="https://www.svgrepo.com/show/29508/apps.svg"
                alt="Customize Your Dashboard"
              />
            </div>
            <div className="text-left">
              <h2 className="mb-2 text-lg font-semibold">
                Customize Your Dashboard
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Tailor your dashboard to your specific needs and preferences.
                </li>
                <li>Arrange widgets, visualization options, and workspace.</li>
              </ul>
            </div>
          </div>
          <div className="border-2 rounded-lg space-y-5 p-5">
            <div className="flex justify-between items-center">
              <h1 className="flex flex-col text-2xl font-semibold">
                03 <span className="text-xl">Step</span>
              </h1>
              <img
                className="w-12 h-12"
                src="https://www.svgrepo.com/show/506956/cld-cloud-wifi.svg"
                alt="Connect Your Data Sources"
              />
            </div>
            <div className="text-left">
              <h2 className="mb-2 text-lg font-semibold">
                Connect Your Data Sources
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Seamlessly integrate your data sources with Marketim.</li>
                <li>
                  Connect platforms like Google Analytics, Facebook Ads, and
                  more with just a few clicks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <div className="border-2 rounded-lg space-y-5 p-5">
            <div className="flex justify-between items-center">
              <h1 className="flex flex-col text-2xl font-semibold">
                04 <span className="text-xl">Step</span>
              </h1>
              <img
                className="w-12 h-12"
                src="https://www.svgrepo.com/show/345315/graph-chart-data-analytics-statistic-report-analysis.svg"
                alt="Explore Insights and Analytics"
              />
            </div>
            <div className="text-left">
              <h2 className="mb-2 text-lg font-semibold">
                Explore Insights and Analytics
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Dive into your insights and analytics to uncover valuable
                  information.
                </li>
                <li>Track key metrics and monitor campaign performance.</li>
              </ul>
            </div>
          </div>
          <div className="border-2 rounded-lg space-y-5 p-5">
            <div className="flex justify-between items-center">
              <h1 className="flex flex-col text-2xl font-semibold">
                05 <span className="text-xl">Step</span>
              </h1>
              <img
                className="w-12 h-12"
                src="https://www.svgrepo.com/show/428744/marketing-promotion-communication.svg"
                alt="Optimize Your Marketing Strategy"
              />
            </div>
            <div className="text-left">
              <h2 className="mb-2 text-lg font-semibold">
                Optimize Your Marketing Strategy
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Identify opportunities for improvement and optimization.
                </li>
                <li>
                  Fine-tune your campaigns to maximize your return on
                  investment.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-2 rounded-lg space-y-5 p-5">
            <div className="flex justify-between items-center">
              <h1 className="flex flex-col text-2xl font-semibold">
                06 <span className="text-xl">Step</span>
              </h1>
              <img
                className="w-12 h-12"
                src="https://www.svgrepo.com/show/489955/star-favorite.svg"
                alt="Measure Your Success"
              />
            </div>
            <div className="text-left">
              <h2 className="mb-2 text-lg font-semibold">
                Measure Your Success
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Track your progress over time with comprehensive reporting.
                </li>
                <li>Analyze trends and measure your success.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#5356EC] text-white px-7 font-semibold py-3 rounded-lg">
          View All
        </button>
      </div>
    </div>
  );
};

export default Work;
