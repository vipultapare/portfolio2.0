import currency_convertor from "../assets/currency_convertor.jpg";
import Encryption from "../assets/Encryption.jpg";
import ml from "../assets/ml.jpg";
import shop from "../assets/shop.avif";
import Weather_Forecast from "../assets/Weather_Forecast.avif";
import dream from "../assets/dreamflix.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800   text-white overflow-y-auto "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  h-full ">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  md:pt-[350px] mt-24 md:mt-0 min-h-[100px] ">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={dream}
              alt=""
              className="rounded-md transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
            />
            <p className="flex justify-center pt-2 ">Dream Flix</p>
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 hover:scale-105  border-2 border-blue rounded-lg bg-gradient-to-b from-cyan-500 to-blue-900">
                <a
                  href="https://github.com/vipultapare/DreamFlix"
                  target="_blank_"
                >
                  Code
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 border-2 border-blue rounded-lg bg-gradient-to-b from-cyan-500 to-blue-900">
                <a href="https://dream-flix.vercel.app/" target="_blank_">
                  Link
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={currency_convertor}
              alt=""
              className="rounded-md h-80 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 border-2 border-blue rounded-lg bg-gradient-to-b from-cyan-500 to-blue-900">
                <a
                  href="https://github.com/vipultapare/Currency-Convertor2"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg ">
            <img
              src={Encryption}
              alt=""
              className="rounded-md transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 h-80"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 border-2 border-blue rounded-lg bg-gradient-to-b from-cyan-500 to-blue-900">
                <a href="" target="_blank">
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg ">
            <img
              src={ml}
              alt=""
              className="rounded-md transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 h-80"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 border-2 border-blue rounded-lg bg-gradient-to-b from-cyan-500 to-blue-900">
                <a
                  href="https://github.com/vipultapare/Detection-Of-Diabetic-Retinopathy"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg mb-4 md:mb-2">
            <img
              src={shop}
              alt=""
              className="rounded-md transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 h-80"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 border-2 border-blue rounded-lg bg-gradient-to-b from-cyan-500 to-blue-900">
                <a
                  href="https://github.com/vipultapare/E-Commerse"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg mb-4 md:mb-2">
            <img
              src={Weather_Forecast}
              alt=""
              className="rounded-md transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 h-80"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 border-2 border-blue rounded-lg bg-gradient-to-b from-cyan-500 to-blue-900">
                <a
                  href="https://github.com/vipultapare/WeatherApp"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// 1:23
