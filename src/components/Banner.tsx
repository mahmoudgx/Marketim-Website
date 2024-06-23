import dashborad from "../assets/dashboard.png";

const Banner = () => {
  return (
    <div className="mt-20 mb-20 px-4">
      <div className="overflow-hidden flex flex-col items-center text-center bg-gradient-to-r from-purple-500 to-purple-900 mx-auto justify-center max-w-6xl p-5 rounded-lg">
        <div className="space-y-10 mt-10">
          <h1 className="font-semibold text-3xl md:text-5xl">
            Thank you for choosing Marketim!
            <br /> Getting started with our software is quick <br /> and easy.
          </h1>
          <div className="space-x-5 flex justify-center">
            <img
              width={120}
              className="cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg"
              alt="Microsoft Store"
            />
            <img
              width={150}
              className="cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-full md:max-w-3xl"
              src={dashborad}
              alt="Dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
