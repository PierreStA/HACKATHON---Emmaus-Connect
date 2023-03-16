import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculette from "./pages/Calculette";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculette" element={<Calculette />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
