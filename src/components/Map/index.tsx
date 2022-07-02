import { MapContainer } from "./styles";

type MapInfo = {
  displayName: string;
  coordinates: string;
  displayIcon: string;
  splash: string;
};

export function Map(props: MapInfo) {
  return (
    <MapContainer>
      <div className="info">
        <strong>{props.displayName}</strong>
        <p>{props.coordinates}</p>
      </div>
      <div className="maps">
        <img src={props.displayIcon} alt={props.displayName} loading="lazy" />
        <div className="map-details">
          <img src={props.splash} alt={props.displayName} loading="lazy" />
          <a
            href={`https://valorant.fandom.com/wiki/${props.displayName}`}
            target={"_blank"}
            rel="noreferrer"
          >
            Ver mapa
          </a>
        </div>
      </div>
    </MapContainer>
  );
}
