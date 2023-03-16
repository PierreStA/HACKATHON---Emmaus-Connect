import axios from "axios";
import React, { useState, useEffect } from "react";

function Api() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    const auth = {
      headers: {
        Authorization: `bearer ${import.meta.env.VITE_TOKEN}`,
      },
    };
    axios
      .get("https://api.device-specs.io/api/smartphones?populate=*", auth)
      .then((data) => setSmartphones(data.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Liste des smartphones :</h1>
      <ul>
        {smartphones.map((smartphone) => (
          <li key={smartphone.id}>
            {smartphone.name} {smartphone.main.cpu_number_of_cores}{" "}
            {smartphone.main.storage_capacity__gb}{" "}
            {smartphone.main.display_size__inch}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Api;
