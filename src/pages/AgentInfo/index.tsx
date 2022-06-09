import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { Container, Box } from "./styles";

type AgentInfo = {
  uuid: string;
  displayName: string;
  description: string;
  bustPortrait: string;
  displayIcon: string;
  role: {
    displayName: string;
    displayIcon: string;
  };
  abilities: Array<any>;
};

export default function Agent() {
  const { id } = useParams();
  const [agent, setAgent] = useState<AgentInfo | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.get(`/agents/${id}`).then(({ data }: any) => {
      setAgent(data.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (agent === null) {
    return <div>Falha ao carregador</div>;
  }
  return (
    <Container key={agent.uuid}>
      <Box>
        <img src={agent.bustPortrait} alt={agent.displayName} />
        <div>
          <div>
            <img src={agent.displayIcon} alt={agent.displayName} />
            <strong>{agent.displayName}</strong>
          </div>
          <p>{agent.description}</p>
          <div>
            <img src={agent.role.displayIcon} alt={agent.displayName} />
            <span>{agent.role.displayName}</span>
          </div>
          <div>
            <div className="abilities">
              <span>Habilidades</span>
              <details>
                <summary><img src={agent.abilities[0].displayIcon} alt={agent.displayName} /> {agent.abilities[0].displayName}</summary>
                <span>{agent.abilities[0].description}</span>
              </details>
              <details>
                <summary><img src={agent.abilities[1].displayIcon} alt={agent.displayName} /> {agent.abilities[1].displayName}</summary>
                <span>{agent.abilities[1].description}</span>
              </details>
              <details>
                <summary><img src={agent.abilities[2].displayIcon} alt={agent.displayName} /> {agent.abilities[2].displayName}</summary>
                <span>{agent.abilities[2].description}</span>
              </details>
              <details>
                <summary><img src={agent.abilities[3].displayIcon} alt={agent.displayName} /> {agent.abilities[3].displayName}</summary>
                <span>{agent.abilities[3].description}</span>
              </details>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
}
