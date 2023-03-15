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
}) {
  return (
    <div>
      <div>
        <p>Marque : {marque}</p>
        <p>Modèle : {modele}</p>
        <p>Capacité de stockage : {stockage}Go</p>
        <p>Mémoire vive : {ram}Go</p>
        <p>Reseau : {reseau}G</p>
        <p>Ecran : {ecran}"</p>
        <p>Android {android}</p>
        <p>Score Antutu : {antutu}</p>
        <p>{etat}</p>
      </div>
    </div>
  );
}

export default Smartphones;
