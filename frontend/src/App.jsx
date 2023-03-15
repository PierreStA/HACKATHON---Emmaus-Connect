import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculette from "./pages/Calculette";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculette" element={<Calculette />} />
      </Routes>
    </div>
  );
}

export default App;
