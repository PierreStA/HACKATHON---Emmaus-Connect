import React from "react";
// import image from "../assets/téléchargement.jpeg";

function Smartphones({
  marque,
  modele,
  stockage,
  ram,
  reseau,
  ecran,
  android,
  antutu,
  etat,
  image,
}) {
  return (
    <div className="grid grid-cols-2 w-full rounded-lg shadow-md p-4">
      <div>
        <p>
          <span className="font-medium"> Marque : </span>
          {marque}
        </p>
        <p>
          <span className="font-medium">Modèle : </span>
          {modele}
        </p>
        <p>
          <span className="font-medium">Capacité de stockage : </span>
          {stockage}Go
        </p>
        <p>
          <span className="font-medium">Mémoire vive : </span>
          {ram}Go
        </p>
        <p>
          <span className="font-medium">Reseau : </span>
          {reseau}G
        </p>
        <p>
          <span className="font-medium">Ecran : </span>
          {ecran}"
        </p>
        <p>
          <span className="font-medium">Android </span>
          {android}
        </p>
        <p>
          <span className="font-medium">Score Antutu : </span>
          {antutu}
        </p>
        <p>{etat}</p>
      </div>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${image}`}
        alt="S23"
      />
    </div>
  );
}

export default Smartphones;
