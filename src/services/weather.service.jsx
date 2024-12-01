import { getPosition } from "../utils/helpers";
import { getWeather } from "../utils/request";

export const serviceWeather = () =>
  new Promise(async (resolve, reject) => {
    if ("geolocation" in navigator) {
      try {
        //FOR USER LOCATION

        // const position = await getPosition();
        // const { latitude, longitude } = position.coords;
        // const query = `weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
        const key = "1882ca3053a86bff2e348a30b9d66d62";

        const query = `weather?q=Baku&appid=${key}&lang=en`;
        resolve(await getWeather(query));
      } catch (error) {
        reject(error);
      }
    } else {
      reject(new Error("Browser dont support Geolocation"));
    }
  });
