
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { RecentPlaylist } from "./fetures/recentPlaylist/RecentPlaylist";

function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/home" element={<RecentPlaylist />} />
     </Routes>
    </Router>
  )
}

export default App;
