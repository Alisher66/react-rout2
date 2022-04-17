import {
    
    Routes,
    Route,
    Link
  } from "react-router-dom";

  import Character1 from "./Character1";
  import Character2 from "./Character2";
  import Character3 from "./Character3";

export default function Characters() {
    return(
        <>
            
        <Routes>
              <Route path="/" element={<span><Link to="/">Back</Link></span>} />
              <Route path="/*" element={<span><Link to="/characters">Back</Link></span>} />
        </Routes>
          <h1>Characters</h1>
          <br />
          <nav>
          <Routes>
              <Route path="/" element={<>
                <Link to="character1">Character1</Link>
                <Link to="character2">Character2</Link>
                <Link to="character3">Character3</Link>
              </>} />
           
            </Routes>
          </nav>
          <Routes>
            <Route path="/character1" element={<Character1 />}/>
            <Route path="/character2" element={<Character2 />}/>
            <Route path="/character3" element={<Character3 />}/>
          </Routes>
        </>
    )
}