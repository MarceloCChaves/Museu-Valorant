import { Link } from 'react-router-dom';
import { AgentCard } from './styles'

type AgentInfo = {
    uuid: string;
    displayName: string;
    description: string;
    bustPortrait: string;
  };

export function Agent(props: AgentInfo) {
  return (
    <AgentCard>
        <img src={props.bustPortrait} alt={props.displayName} />
        <strong>{props.displayName}</strong>
        <p>{props.description}</p>
        <Link to={`/agents/${props.uuid}`}>Ver mais informações sobre o agente</Link>
    </AgentCard>
  );
}