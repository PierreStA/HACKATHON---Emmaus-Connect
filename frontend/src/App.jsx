import { Routes, Route } from "react-router-dom";
import QrCode from "@pages/QrCode";
import Home from "./pages/Home";
import Calculette from "./pages/Calculette";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<QrCode />} />
        <Route path="/calculette" element={<Calculette />} />
      </Routes>
    </div>
  );
}

export default App;
