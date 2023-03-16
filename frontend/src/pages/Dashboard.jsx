import React, { useEffect, useState } from "react";
import axios from "axios";
import Smartphones from "../components/Smartphones";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/smartphones`).then((res) => {
      setSmartphones(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className=" flex justify-center m-8 text-xl font-semibold">
        Nos smartphones
      </h1>
      <div className="grid gap-4 grid-cols-2 p-6">
        {smartphones.map((smartphone) => (
          <Smartphones
            key={smartphone.id}
            marque={smartphone.marque}
            modele={smartphone.modele}
            stockage={smartphone.stockage}
            ram={smartphone.ram}
            reseau={smartphone.reseau}
            ecran={smartphone.ecran}
            android={smartphone.android}
            antutu={smartphone.indice_antutu}
            etat={smartphone.etat}
            image={smartphone.image_source}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
