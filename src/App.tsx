import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/index";
import Agents from './pages/Agents/index'
import AgentInfo from "./pages/AgentInfo/index";
import Maps from "./pages/Maps/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:id" element={<AgentInfo />} />
          <Route path="/maps" element={<Maps/>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
