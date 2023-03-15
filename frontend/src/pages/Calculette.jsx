import React, { useState } from "react";

function Calculette() {
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [ram, setRam] = useState("");
  const [stockage, setStockage] = useState("");
  const [indiceAntutu, setIndiceAntutu] = useState("");
  const [ecran, setEcran] = useState("");
  const [reseau, setReseau] = useState("");
  const [android, setAndroid] = useState("");
  const [chargeurcable, setChargeurcable] = useState("");
  const [idetat, setIdetat] = useState("");
  const [codeModel, setcodeModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const HandleMarque = (e) => {
    setMarque(e.target.value);
  };
  const HandleModele = (e) => {
    setModele(e.target.value);
  };
  const HandleRam = (e) => {
    setRam(e.target.value);
  };
  const HandleStockage = (e) => {
    setStockage(e.target.value);
  };
  const HandleindiceAntutu = (e) => {
    setIndiceAntutu(e.target.value);
  };
  const HandleEcran = (e) => {
    setEcran(e.target.value);
  };
  const HandleReseau = (e) => {
    setReseau(e.target.value);
  };

  const HandleAndroid = (e) => {
    setAndroid(e.target.value);
  };

  const HandleChargeurcable = (e) => {
    setChargeurcable(e.target.value);
  };

  const HandleIdEtat = (e) => {
    setIdetat(e.target.value);
  };

  const HandleCodeModel = (e) => {
    setcodeModel(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Marque:
          <input type="text" value={marque} onChange={HandleMarque} />
        </label>
        <label>
          Modele:
          <input type="text" value={modele} onChange={HandleModele} />
        </label>
        <label>
          RAM:
          <input type="text" value={ram} onChange={HandleRam} />
        </label>
        <label>
          stockage:
          <input type="text" value={stockage} onChange={HandleStockage} />
        </label>{" "}
        <label>
          indice antutu:
          <input
            type="text"
            value={indiceAntutu}
            onChange={HandleindiceAntutu}
          />
        </label>
        <label>
          ecran:
          <input type="text" value={ecran} onChange={HandleEcran} />
        </label>
        <label>
          ecran:
          <input type="text" value={reseau} onChange={HandleReseau} />
        </label>
        <label>
          android:
          <input type="text" value={android} onChange={HandleAndroid} />
        </label>
        <label>
          chargeurcable:
          <input
            type="text"
            value={chargeurcable}
            onChange={HandleChargeurcable}
          />
        </label>
        <label>
          idetat:
          <input type="text" value={idetat} onChange={HandleIdEtat} />
        </label>
        <label>
          code_model:
          <input type="text" value={codeModel} onChange={HandleCodeModel} />
        </label>
      </form>
    </div>
  );
}

export default Calculette;
