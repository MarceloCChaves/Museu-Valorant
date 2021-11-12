import { useEffect, useState } from "react";
import api from "../../services/api";
import { AxiosResponse } from "axios";

type AgentInfo = {
  uuid: string;
  displayName: string;
  description: string;
  bustPortrait: string;
  role: {
    displayName: string;
    displayIcon: string;
  };
};

export default function Home() {
  const [agents, setAgents] = useState<AgentInfo[]>([]);
  useEffect(() => {
    api.get("/agents").then((response: AxiosResponse<any>) => {
      setAgents(response.data.data as AgentInfo[]);
    });
  }, []);
  return (
    <div>
      {agents.map((content) => {
          return(
              <div key={content.uuid}>
                  <h3>{content.displayName}</h3>
              </div>
          )
      })}
    </div>
  );
}
