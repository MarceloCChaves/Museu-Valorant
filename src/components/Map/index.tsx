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
        <img className={props.displayIcon === null ? 'nullImage' : ''} src={props.displayIcon} alt={props.displayName} loading="lazy" />
        <div>
          <img src={props.splash} alt={props.displayName} loading="lazy" />
          <a
            href={`https://valorant.fandom.com/wiki/${props.displayName}`}
            target={"_blank"}
            rel="noreferrer"
          >
            Ver mais informações
          </a>
        </div>
      </div>
    </MapContainer>
  );
}
