
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { RecentPlaylist } from "./fetures/recentPlaylist/RecentPlaylist";
import { WebPlayback } from "./spotify/WebPlayback";

function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/home" element={
        <WebPlayback>
          <RecentPlaylist />
        </WebPlayback>
      } />
     </Routes>
    </Router>
  )
}

export default App;
