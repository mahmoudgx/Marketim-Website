const Features = () => {
  return (
    <div className="mt-20 px-5 md:px-0">
      <div className="flex flex-col mb-20 text-center space-y-5">
        <h1 className="text-[#53B7ED]">Features</h1>
        <p className="text-4xl font-semibold">
          Discover the <br />
          Comprehensive Features
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row max-w-5xl gap-5 mx-auto">
          <div className="space-y-5 w-full md:w-[220%] border-2 p-5 rounded-lg">
            <img className="w-full h-auto" />
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
          </div>
          <div className="space-y-5 w-full border-2 p-5 rounded-lg">
            <img className="w-full h-auto" />
            <h1 className="text-xl font-semibold">Real-Time Insights</h1>
            <p>
              Gain instant access to real-time data insights and monitor key
              metrics campaign performance as it happens. React swiftly to
              market changes with up-to-the-minute updates
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <div className="space-y-5 border-2 p-5 rounded-lg">
            <img className="w-full h-auto" />
            <h1 className="text-xl font-semibold">Audience Segmentation</h1>
            <p>
              Segment your audience based on demographics behavior and
              engagement. Personalized campaigns for greater impact and drive
              engagement with targeted messaging strategies
            </p>
          </div>
          <div className="space-y-5 border-2 p-5 rounded-lg">
            <h1 className="text-xl font-semibold">Country Specification</h1>
            <p>
              Optimize campaign for in real-time based on performance data and
              conduct A/B tests to refine messaging and creative elements
            </p>
            <img className="w-full h-auto" src="" />
          </div>
          <div className="space-y-5 border-2 p-5 rounded-lg">
            <img className="w-full h-auto" src="" />
            <h1 className="text-xl font-semibold">Multi-Channel Attribution</h1>
            <p>
              Gain a holistic view of your marketing efforts across channels.
              Understand the impact of each touchpoint on conversions and
              optimize budget allocation for maximum ROI.
            </p>
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

export default Features;
