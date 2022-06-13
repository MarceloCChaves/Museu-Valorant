import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Map } from "../../components/Map/index";
import { Navbar } from "../../components/Navbar";
import api from "../../services/api";

type MapInfo = {
  uuid: string;
  displayName: string;
  coordinates: string;
  displayIcon: string;
  splash: string;
};

export default function Maps() {
  const [maps, setMaps] = useState<MapInfo[]>([]);
  useEffect(() => {
    api.get("/maps").then((response: AxiosResponse<any>) => {
      setMaps(response.data.data as MapInfo[]);
    });
  }, []);
  return (
    <div>
      <Navbar />
      {maps.map((content) => {
        return (
          <Map
            key={content.uuid}
            displayName={content.displayName}
            coordinates={content.coordinates}
            displayIcon={content.displayIcon}
            splash={content.splash}
          />
        );
      })}
    </div>
  );
}
