import React, { useEffect, useState } from "react";
import axios from "axios";
import Smartphones from "../components/Smartphones";

function Dashboard() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/smartphones`).then((res) => {
      setSmartphones(res.data);
    });
  }, []);
  console.log(smartphones);
  return (
    <div>
      <h1>Nos smartphones</h1>
      <div>
        {smartphones.map((smartphone) => (
          <Smartphones
            key={smartphone.id}
            marque={smartphone.marque}
            modele={smartphone.modele}
            stockage={smartphone.stockage}
            ram={smartphone.ram}
            reseau={smartphone.reseau}
            ecran={smartphone.ecran}
            antutu={smartphone.indice_antutu}
            etat={smartphone.etat}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
