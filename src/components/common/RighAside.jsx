import { FiCrosshair } from "react-icons/fi";
import { FiFeather } from "react-icons/fi";
import Button from "@/components/ui/button";
import SliderCard from "../widgets/slider";
import { useEffect, useState } from "react";
import { useFetchWeatherData } from "../../hooks/useFetch";
import { getWeatherIcon } from "../../utils/helpers";
import NewsSkleton from "../widgets/news/NewsSkleton";
import SubscribeEmail from "../widgets/subscription/subscribe";
import { Link } from "react-router-dom";
function RightAside({ visible }) {
  const [weatherInfo, setWeather, weatherLoading] = useFetchWeatherData();
  const [fahrenheit, setFahrenheit] = useState(false);
  useEffect(() => {
    setWeather();
  }, []);

  return (
    <aside
      className={`space-y-[15px]  lg:mt-24 mb-6 md:max-w-[200px] lg:max-w-[364px] min-w-full ${visible} `}
    >
      <div className="right-section-cards darkMode bg-white shadow-theme ">
        {weatherLoading ? (
          <NewsSkleton image={false} />
        ) : (
          <>
            <div className="flex justify-between border-b">
              <p className="text-[15px]">
                {weatherInfo?.name}, {weatherInfo?.sys?.country}
              </p>
              <FiCrosshair />
            </div>
            <div className="flex justify-between items-center py-[15px]">
              <div>
                <p className="text-[15px]">{weatherInfo?.weather?.[0]?.main}</p>
                <span className="text-[26px] font-bold">
                  {fahrenheit
                    ? fahrenheit.toFixed(0)
                    : Math.round(weatherInfo?.main?.temp - 272.15)}{" "}
                  <sup>{!fahrenheit && "o"}</sup>{" "}
                  <small>{fahrenheit ? "F" : "C"}</small>
                </span>
              </div>
              <div className="size-[52px]">
                <span className="text-[#dcc674] text-[42px] size-full">
                  {getWeatherIcon(weatherInfo?.weather?.[0]?.icon)}
                </span>
              </div>
            </div>
            <div className="flex text-[12px] space-x-[23px]">
              <button
                className={fahrenheit ? "opacity-30" : ""}
                onClick={() => setFahrenheit(false)}
              >
                Celsius
              </button>
              <button
                onClick={() => {
                  setFahrenheit(
                    ((weatherInfo?.main?.temp - 272.15) * 9) / 5 + 32
                  );
                }}
                className={!fahrenheit ? "opacity-30" : ""}
              >
                Fahrenheit
              </button>
            </div>
          </>
        )}
      </div>
      <div className="right-section-cards darkMode bg-white shadow-theme">
        <div className="flex items-center space-x-[12px] mb-3">
          <span className="size-[24px]">
            <FiFeather className="size-full" />
          </span>
          <p className="text-[15px]">Məqalə yazarı ol</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs mr-4 opacity-60">
            Məqalə yazaraq qazanmağa başla
          </p>
          <Button
            rounded={"rounded-theme"}
            size={"lg"}
            border={true}
            padding={true}
          >
            <Link to={"/contact"} className="text-skyBlue">
              Daha çox
            </Link>
          </Button>
        </div>
      </div>
      <SliderCard className={"lg:block hidden"} />
      <SubscribeEmail className={"lg:block hidden"} block={true} p={"p-2"} />
    </aside>
  );
}

export default RightAside;
