import { MapContainer } from './styles'

type MapInfo = {
  displayName: string;
  coordinates: string;
  displayIcon: string;
  splash: string;
};

export function Map(props: MapInfo) {
return (
  <MapContainer>
      <img src={props.displayIcon} alt={props.displayName} loading="lazy" />
      <img src={props.splash} alt={props.displayName} loading="lazy" />
      <strong>{props.displayName}</strong>
      <p>{props.coordinates}</p>
  </MapContainer>
);
}