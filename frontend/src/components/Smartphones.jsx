import React from "react";

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
  categorie,
}) {
  return (
    <div className="grid grid-cols-2 w-full rounded-lg shadow-md p-4">
      <div>
        <p>
          <span className="font-medium text-darkgreen"> Marque : </span>
          {marque}
        </p>
        <p>
          <span className="font-medium text-darkgreen">Modèle : </span>
          {modele}
        </p>
        <p>
          <span className="font-medium text-darkgreen">Capacité de stockage : </span>
          {stockage}Go
        </p>
        <p>
          <span className="font-medium text-darkgreen">Mémoire vive : </span>
          {ram}Go
        </p>
        <p>
          <span className="font-medium text-darkgreen">Reseau : </span>
          {reseau}G
        </p>
        <p>
          <span className="font-medium text-darkgreen">Ecran : </span>
          {ecran}"
        </p>
        <p>
          <span className="font-medium text-darkgreen">Android </span>
          {android}
        </p>
        <p>
          <span className="font-medium text-darkgreen">Score Antutu : </span>
          {antutu}
        </p>
        <p className="text-red">{etat}</p>
        <p><span className="font-medium text-darkgreen">Catégorie : </span>{categorie}</p>
      </div>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${image}`}
        alt="apperçu du téléphone"
      />
    </div>
  );
}

export default Smartphones;
