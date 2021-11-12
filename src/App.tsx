import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Agents from './pages/Agents/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Agents />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
