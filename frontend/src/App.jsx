import { Routes, Route } from "react-router-dom";
import QrCode from "@pages/QrCode";
import Home from "./pages/Home";
import Calculette from "./pages/Calculette";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<QrCode />} />
        <Route path="/calculette" element={<Calculette />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
