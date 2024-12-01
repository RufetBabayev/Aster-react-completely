import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

function Map() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieHVkYXZlcmRpMjciLCJhIjoiY2xycW8waGY5MDR0eTJqbXRzOWVza3R6eCJ9.mTEEkgj9P930zB6kpAZiqw";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [49.8671, 40.4093],
      zoom: 9,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([49.8671, 40.4093])
      .addTo(map);

    // Clean up when the component is unmounted
    return () => map.remove();
  }, []);

  return <div id="map" className=" w-full h-[380px]" />;
}

export default Map;
