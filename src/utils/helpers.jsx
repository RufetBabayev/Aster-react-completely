import { IoSunnyOutline } from "react-icons/io5";
import { CiCloudSun } from "react-icons/ci";
import { FaCloud, FaCloudMoon } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { IoIosCloudOutline } from "react-icons/io";
import { WiDayRainWind, WiNightAltRain } from "react-icons/wi";
import { LuCloudRainWind } from "react-icons/lu";
import { IoIosRainy } from "react-icons/io";
import { IoThunderstormOutline } from "react-icons/io5";
import { IoThunderstorm } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { RiMistFill } from "react-icons/ri";
import { BsMoonStars } from "react-icons/bs";
import { useParams } from "react-router-dom";

export const objectToQueryString = (obj) => {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export const findParam = () => {
  const param = useParams();
  return param.slug;
};

export const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

export const getWeatherIcon = (key) => {
  const icons = {
    "01d": <IoSunnyOutline />,
    "01n": <BsMoonStars />,
    "02d": <CiCloudSun />,
    "02n": <FaCloudMoon />,
    "03d": <CiCloudOn />,
    "03n": <FaCloud />,
    "04d": <IoIosCloudOutline />,
    "04n": <IoIosCloudOutline />,
    "09d": <WiDayRainWind />,
    "09n": <WiNightAltRain />,
    "10d": <LuCloudRainWind />,
    "10n": <IoIosRainy />,
    "11d": <IoThunderstormOutline />,
    "11n": <IoThunderstorm />,
    "13d": <FaRegSnowflake />,
    "13n": <FaRegSnowflake />,
    "50d": <RiMistFill />,
    "50n": <RiMistFill />,
  };
  return icons[key];
};
