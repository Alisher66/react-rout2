import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Characters from "./components/characters/Characters";
import Episodes from "./components/episodes/Episodes";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/*" element={<Characters />}/>
            <Route path="/episodes/*" element={<Episodes />}/>
          </Routes>

          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
