import chartImage from "../assets/chart.svg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-start pt-24 md:pt-38 pb-20 overflow-hidden">
      <div className="w-full flex justify-center px-6 relative z-10">
        <p className="max-w-2xl text-gray-700 text-sm md:text-base leading-relaxed text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-16 md:mt-24 px-6 md:px-20 relative z-10">
        <div className="flex flex-col justify-start items-start w-full">
          <p className="text-start italic text-gray-800 font-semibold text-lg  leading-snug">
            " Excepteur sint accaecat cupiatat non proident "
          </p>

          <img
            src={chartImage}
            alt="chart"
            className="w-40 md:w-56 lg:w-64 h-auto object-contain mt-10 md:mt-16"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-screen md:w-[50vw] h-[40vh] md:h-[50vh] z-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-0 w-full h-full bg-linear-to-tr from-blue-600 via-indigo-500 to-purple-400 opacity-90"
          style={{ borderTopLeftRadius: "100%" }}
        ></div>

        <div className="absolute top-[10%] left-[15%] w-12 h-12 md:w-20 md:h-20 bg-indigo-500 rounded-full opacity-90"></div>
        <div className="absolute top-[0%] right-[25%] w-8 h-8 md:w-12 md:h-12 bg-indigo-400 rounded-full opacity-70"></div>
      </div>

      <div className="absolute top-0 left-0 w-48 sm:w-64 h-32 bg-cyan-400 rounded-br-[100%] -z-10" />
    </section>
  );
};

export default HeroSection;
