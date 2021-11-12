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
        <strong>Agent: {props.displayName}</strong>
        <p>{props.description}</p>
    </AgentCard>
  );
}