const Features = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col mb-20 text-center space-y-5">
        <h1 className="text-[#53B7ED]">Features</h1>
        <p className="text-4xl font-semibold">
          Discover the <br></br>Comprehensive Features
        </p>
      </div>
      <div className="grid grid-row-2 gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-5 w-[100%] border-2 p-5 rounded-lg">
            <img />
            <h1 className="text-xl font-semibold">
              ActiveCampaign vs. Total Sale
            </h1>
            <p className="text-sm">
              Both ActiveCampaign and Total Sale offer a wide range of features
              for marketing and sales automation making them suitable options
              for businesses looking to streamline their processes and drive
              growth. The choice between the two would depend on specific
              business needs, budget, and preferences regarding pricing and
              support options.
            </p>
          </div>
          <div className="space-y-5 p-5 w-[46%] rounded-lg border-2">
            <img />
            <h1 className="text-xl font-semibold">Real-Time Insights</h1>
            <p className="text-sm">
              Gain instant access to real-time data insights and monitor key
              metrics campaign performance as it happens. React swiftly to
              market changes with up-to-the-minute updates
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="rounded-lg w-[70%]  border-2 space-y-5 p-5">
            <img />
            <h1 className="text-xl  font-semibold">Audience Segmentation</h1>
            <p className="text-sm">
              segment your audience based on demographics behavior and
              engagement. Personalized campaigns for greater impact and drive
              engagement with targeted messaging strategies
            </p>
          </div>
          <div className="rounded-lg border-2 w-[70%]  space-y-5 p-5">
            <h1 className="text-xl font-semibold">Country Specification</h1>
            <p className="text-sm">
              optimize campaign for in real-time based on performance data and
              conduct A/B tests to refine messaging and creative elements
            </p>
            <img src="" />
          </div>
          <div className="rounded-lg border-2 w-[70%] space-y-5 p-5">
            <img src="" />
            <h1 className="text-xl font-semibold">Multi-Channel Attribution</h1>
            <p className="text-sm">
              gain a holistic view of your marketing efforts across channels.
              understand the impact of each touchpoint on conversions and
              optimize budget allocation for maximum ROI.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#5356EC] px-7 font-semibold py-3 rounded-lg">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
