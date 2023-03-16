import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculette from "./pages/Calculette";
import Dashboard from "./pages/Dashboard";
import Api from "./pages/Api";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculette" element={<Calculette />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </div>
  );
}

export default App;
