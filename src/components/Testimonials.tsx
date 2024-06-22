import { FaPlay } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col mb-20 text-center space-y-5">
        <h1 className="text-[#53B7ED]">Testimonials</h1>
        <p className="text-4xl font-semibold">
          many companies Believe in <br></br> Marketim
        </p>
      </div>
      <div className="grid grid-rows-2 gap-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="space-y-5 w-[80%] border-2 rounded-lg p-5">
            <img
              width={50}
              src="https://www.svgrepo.com/show/416519/medium-logo.svg"
            />
            <p>
              marketim analytics has become an indispensable part of our
              marketing toolkit. its robust features and insightful reports have
              empowered us to make data-driven decisions that have a tangible
              impact on our bottom line.
            </p>
            <div className="bg-white rounded-full inline-block p-2 items-center text-blue-500">
              <FaPlay />
            </div>
          </div>
          <div className="space-y-5 w-[81%] border-2 rounded-lg p-5">
            <img
              width={50}
              src="https://www.svgrepo.com/show/400860/tridentemblem.svg"
            />
            <p>
              since implemented marketim analysis we've seen a significance
              improvement in our marketing strategy, its advanced analytics
              tools and actionable insights have empowered ys to make
              data-driven decisions and stay ahead of the competition
            </p>
            <div className="bg-white rounded-full inline-block p-2 items-center text-blue-500">
              <FaPlay />
            </div>
          </div>
          <div className="space-y-5 w-[80%] border-2 rounded-lg p-5">
            <img
              width={50}
              src="https://www.svgrepo.com/show/303558/yammer-1-logo.svg"
            />
            <p>
              marketim analytics has exceeded our expectations in every way. its
              user-friendly interface, comprehensive reporting, and responsive
              sports team make it a pleasure to work with, we're thrilled with
              the results we've achieved using this platfrom !
            </p>
            <div className="bg-white rounded-full inline-block p-2 items-center text-blue-500">
              <FaPlay />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-5 w-[52.5%] border-2 rounded-lg p-5">
            <img
              width={50}
              src="https://www.svgrepo.com/show/416519/medium-logo.svg"
            />
            <p>
              The depth of insights provided by marketim analytics is truly
              impressive. it's helped us understand our audience better, refine
              our targeting strategies, and improve overall campaign
              performance, it's a must-have for any marketer serious about
              driving results
            </p>
            <div className="bg-white rounded-full inline-block p-2 items-center text-blue-500">
              <FaPlay />
            </div>
          </div>
          <div className="space-y-5 border-2 rounded-lg p-5 bg-[url('D:\Projects\Marketim\src\assets\person.png')] overflow-hidden bg-contain bg-right bg-no-repeat">
            <div className="space-y-5 w-[52.5%] ">
              <img
                width={50}
                src="https://www.svgrepo.com/show/416519/medium-logo.svg"
              />
              <p>
                as a small business owner i was initially skeptical about
                investing in analytics software. however, after tying marketim
                analytics , i can confidently say it's worth every penny
              </p>
              <h1>michael brown</h1>
              <h1>Founder of Trance</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
