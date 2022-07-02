import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { Container, Box } from "./styles";
import Loading from "../../components/Loading/Index";

type AgentInfo = {
  uuid: string;
  displayName: string;
  description: string;
  fullPortraitV2: string;
  displayIcon: string;
  role: {
    displayName: string;
    displayIcon: string;
  };
  abilities: Array<any>;
  voiceLine: {
    mediaList: Array<any>;
  }
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
    return(
      <Loading />
    )
  }
  if (agent === null) {
    return <div>Falha ao carregar</div>;
  }
  return (
    <Container key={agent.uuid}>
      <Box>
        <img className="character" src={agent.fullPortraitV2} alt={agent.displayName} loading="lazy" />
        <div>
          <div>
            <img src={agent.displayIcon} alt={agent.displayName} loading="lazy" />
            <strong>{agent.displayName}</strong>
          </div>
          <p>{agent.description}</p>
          <div>
            <img src={agent.role.displayIcon} alt={agent.displayName} loading="lazy" />
            <span>{agent.role.displayName}</span>
          </div>
          <div>
            <div className="abilities">
              <span>Habilidades</span>
              <details>
                <summary><img src={agent.abilities[0].displayIcon} alt={agent.displayName} /> {agent.abilities[0].displayName.charAt(0) + agent.abilities[0].displayName.slice(1).toLowerCase()}</summary>
                <span>{agent.abilities[0].description}</span>
              </details>
              <details>
                <summary><img src={agent.abilities[1].displayIcon} alt={agent.displayName} /> {agent.abilities[1].displayName.charAt(0) + agent.abilities[1].displayName.slice(1).toLowerCase()}</summary>
                <span>{agent.abilities[1].description}</span>
              </details>
              <details>
                <summary><img src={agent.abilities[2].displayIcon} alt={agent.displayName} /> {agent.abilities[2].displayName.charAt(0) + agent.abilities[2].displayName.slice(1).toLowerCase()}</summary>
                <span>{agent.abilities[2].description}</span>
              </details>
              <details>
                <summary><img src={agent.abilities[3].displayIcon} alt={agent.displayName} /> {agent.abilities[3].displayName.charAt(0) + agent.abilities[3].displayName.slice(1).toLowerCase()}</summary>
                <span>{agent.abilities[3].description}</span>
              </details>
            </div>
            <audio autoPlay>
              <source src={agent.voiceLine.mediaList[0].wave} type="audio/wav" />
            </audio>
          </div>
        </div>
      </Box>
    </Container>
  );
}
