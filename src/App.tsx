import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
