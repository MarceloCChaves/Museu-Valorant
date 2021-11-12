import { useEffect, useState } from "react";
import api from "../../services/api";
import { AxiosResponse } from "axios";
import { Agent } from "../../components/Agent";
import { Container } from './styles'

type AgentInfo = {
  uuid: string;
  displayName: string;
  description: string;
  bustPortrait: string;
};

export default function Home() {
  const [agents, setAgents] = useState<AgentInfo[]>([]);
  useEffect(() => {
    api.get("/agents").then((response: AxiosResponse<any>) => {
      setAgents(response.data.data as AgentInfo[]);
    });
  }, []);
  return (
    <Container>
      {agents.map((content) => {
        return (
          <Agent
            key={content.uuid}
            displayName={content.displayName}
            description={content.description}
            bustPortrait={content.bustPortrait}
            uuid={content.uuid}
          />
        );
      })}
    </Container>
  );
}
