import { useState, useCallback, memo } from "react";
import { motion } from "motion/react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Location = () => {
  const coords = { lat: 19.92, lng: -103.03 };
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback((m) => {
    const bounds = new window.google.maps.LatLngBounds(coords);
    m.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback((m) => {
    setMap(null);
  }, []);

  const tempContainerStyle = {
    width: "100dvw",
    height: "50dvh",
  };

  return isLoaded ? (
    <section id="Location">
      <div className="min-h-[50dvh] flex flex-col justify-center">
        <div>
          <h1>Location</h1>
          <p>Calle Vallarta #40, Mazamitla, Jalisco 49500</p>
          <p>+52 382 688 0013</p>
          <p>Jorgebarajas0718@yahoo.com</p>
        </div>

        <div className="flex justify-center items-center">
          <GoogleMap
            mapContainerStyle={tempContainerStyle}
            center={coords}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <></>
          </GoogleMap>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default memo(Location);
