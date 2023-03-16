import React, { useState } from "react";

function Calculette() {
  const antutuArray = [
    0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000,
    500000, 550000, 600000, 650000, 700000,
  ];
  const valAArray = [
    40, 44, 49, 54, 59, 64, 69, 74, 79, 84, 89, 94, 99, 104, 109,
  ];
  // const [antmin, setAntmin] = useState(0);
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [ram, setRam] = useState("");
  const [stockage, setStockage] = useState("");
  const [indiceAntutu, setIndiceAntutu] = useState();
  const [ecran, setEcran] = useState("");
  const [reseau, setReseau] = useState("");
  const [android, setAndroid] = useState("");
  const [chargeurcable, setChargeurcable] = useState("");
  const [idetat, setIdetat] = useState("");
  const [codeModel, setcodeModel] = useState("");
  const [valA, setValA] = useState(0);
  const [valM, setValM] = useState(0);
  const [valS, setValS] = useState(0);
  const [noteTel, setNoteTel] = useState(0);
  const [ponderation, setPonderation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNoteTel(valA + valM + valS + ((valA + valM + valS) / 100) * ponderation);
  };
  const HandleMarque = (e) => {
    setMarque(e.target.value);
  };
  const HandleModele = (e) => {
    setModele(e.target.value);
  };
  const HandleRam = (e) => {
    setRam(parseInt(e.target.value, 10));
    setValM(e.target.value * 10);
  };
  const HandleStockage = (e) => {
    setStockage(parseInt(e.target.value, 10));
    setValS(e.target.value * 2);
  };
  const HandleindiceAntutu = (e) => {
    setIndiceAntutu(e.target.value);
    let index = 0;
    for (let i = 0; i < antutuArray.length; i += 1) {
      if (
        e.target.value >= antutuArray[i] &&
        e.target.value < antutuArray[i] + 50000
      ) {
        index = i;
        break;
      }
    }
    setValA(valAArray[index]);
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
  const HandlePonderation = (e) => {
    setPonderation(e.target.value);
  };
  // console.log(noteTel);

  return (
    <div className="text-left">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              <input
                type="text"
                value={marque}
                onChange={HandleMarque}
                placeholder="Marque du telephone"
              />
            </label>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name5"
            >
              <input
                type="text"
                value={modele}
                onChange={HandleModele}
                placeholder="modele du telephone"
              />
            </label>{" "}
          </div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={ram}
              onChange={HandleRam}
              placeholder="RAM du telephone"
            />
          </label>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={stockage}
              onChange={HandleStockage}
              placeholder="stockage"
            />
          </label>{" "}
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={indiceAntutu}
              onChange={HandleindiceAntutu}
              placeholder="indice antutu"
            />
          </label>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={ecran}
              onChange={HandleEcran}
              placeholder="taille de l'écran"
            />
          </label>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={reseau}
              onChange={HandleReseau}
              placeholder="reseau max"
            />
          </label>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={android}
              onChange={HandleAndroid}
              placeholder="version android"
            />
          </label>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={chargeurcable}
              onChange={HandleChargeurcable}
              placeholder="chargeur"
            />
          </label>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={idetat}
              onChange={HandleIdEtat}
              placeholder="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name5"
            />
          </label>
          <label className="m-5">
            <input
              type="text"
              value={codeModel}
              onChange={HandleCodeModel}
              placeholder="code modele"
            />
          </label>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name5"
          >
            <input
              type="text"
              value={ponderation}
              onChange={HandlePonderation}
              placeholder="Ponderation"
            />
          </label>
          <button type="submit">ok</button>
        </div>
      </form>
      <div>{noteTel}</div>
    </div>
  );
}

export default Calculette;
