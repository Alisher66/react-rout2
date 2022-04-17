import {
    
  Routes,
  Route,
  Link
} from "react-router-dom";

import Episode1 from "./Episode1";
import Episode2 from "./Episode2";
import Episode3 from "./Episode3";



export default function Characters() {
  return(
      <>
      <span><Link to="/">Back</Link></span>
        <h1>Episodes</h1>
        <br />
        <nav>
          <Link to="episode1">Episode1</Link>
          <Link to="episode2">Episodes2</Link>
          <Link to="episode3">Episodes3</Link>
        </nav>
        <Routes>
          <Route path="/episode1" element={<Episode1 />}/>
          <Route path="/episode2" element={<Episode2 />}/>
          <Route path="/episode3" element={<Episode3 />}/>
        </Routes>
      </>
  )
}