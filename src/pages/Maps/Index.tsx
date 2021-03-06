import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Map } from "../../components/Map/index";
import { Navbar } from "../../components/Navbar";
import api from "../../services/api";
import { Container } from "./styles";

type MapInfo = {
  uuid: string;
  displayName: string;
  coordinates: string;
  displayIcon: string;
  splash: string;
};

export default function Maps() {
  const [maps, setMaps] = useState<MapInfo[]>([]);
  const filteredMaps = maps.filter((map) => {
    return map.displayIcon !== null
  })
  useEffect(() => {
    api.get("/maps").then((response: AxiosResponse<any>) => {
      setMaps(response.data.data as MapInfo[]);
    });
  }, []);
  return (
    <div>
      <Navbar />
    <Container>
      {filteredMaps.map((content) => {
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
      {filteredMaps.length <= 0 && <h1 className="loading-maps">Carregando mapas...</h1>}
    </Container>
    </div>
  );
}
