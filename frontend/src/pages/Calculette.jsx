import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import JsPDF from "jspdf";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

import Antutu from "../components/Antutu";

function Calculette() {
  const antutuArray = [
    0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000,
    500000, 550000, 600000, 650000, 700000, 750000, 800000,
  ];
  const valAArray = [
    40, 44, 49, 54, 59, 64, 69, 74, 79, 84, 89, 94, 99, 104, 109, 114, 119,
  ];
  // const [antmin, setAntmin] = useState(0);
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [ram, setRam] = useState(null);
  const [stockage, setStockage] = useState(null);
  const [indiceAntutu, setIndiceAntutu] = useState(null);
  const [ecran, setEcran] = useState(null);
  const [reseau, setReseau] = useState(null);
  const [android, setAndroid] = useState(null);
  const [chargeurcable, setChargeurcable] = useState("");
  const [idetat, setIdetat] = useState("");
  const [codeModel, setcodeModel] = useState("");
  const [valA, setValA] = useState(0);
  const [valM, setValM] = useState(0);
  const [valS, setValS] = useState(0);
  const [noteTel, setNoteTel] = useState(null);
  const [ponderation, setPonderation] = useState();
  const [categorie, setCategorie] = useState(null);

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
    setValM(e.target.value * 2);
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

  const formData = {
    mark: marque,
    model: modele,
    memoire: ram,
    stock: stockage,
    ant: indiceAntutu,
    screen: ecran,
    network: reseau,
    version: android,
    connexion: chargeurcable,
    stateId: idetat,
    code: codeModel,
  };

  const [showQrCode, setShowQrCode] = useState(false);
  const canvasRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowQrCode(true);
  };
  const handleExportPdf = () => {
    if (showQrCode) {
      const pdf = new JsPDF();
      pdf.addImage(canvasRef.current.toDataURL(), "PNG", 10, 10, 100, 100);
      pdf.save("qr-code.pdf");
    }
  };

  useEffect(() => {
    if (showQrCode) {
      QRCode.toCanvas(
        canvasRef.current,
        JSON.stringify(formData),
        (error) => error && console.error(error)
      );
    }
  }, [showQrCode, formData]);

  useEffect(() => {
    if (noteTel <= 90) {
      setCategorie("1-HC");
    } else if (noteTel <= 165) {
      setCategorie("2-C");
    } else if (noteTel <= 255) {
      setCategorie("3-B");
    } else if (noteTel <= 375) {
      setCategorie("4-A");
    } else {
      setCategorie("5-Premium");
    }
  }, [noteTel]);

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  console.log(formData);
  // console.log(noteTel);

  return (
    <div className="flex flex-col justify-evenly items-center  gap-4  h-screen">
      <Navbar />
      <div className="flex justify-around gap-10 w-full">
        <div className="flex justify-center">
          <Antutu setModele={setModele} setIndiceAntutu={setIndiceAntutu} />
        </div>
        <div className=" w-96 shadow-lg">
          <form className=" p-2" onSubmit={handleSubmit}>
            <h4 className="font-medium text-xl uppercase tracking-widest text-center mb-2">
              caractéristiques
            </h4>
            <div className="flex flex-col ">
              <div className=" mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  onChange={HandleMarque}
                  placeholder="Marque du telephone"
                  className="mb-3  placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="text"
                  value={modele}
                  onChange={HandleModele}
                  placeholder="Modele du telephone"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="number"
                  onChange={HandleRam}
                  placeholder="RAM du telephone"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="number"
                  onChange={HandleStockage}
                  placeholder="Stockage"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="number"
                  value={indiceAntutu}
                  onChange={HandleindiceAntutu}
                  placeholder="Indice antutu"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="number"
                  onChange={HandleEcran}
                  placeholder="Taille de l'écran"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="number"
                  onChange={HandleReseau}
                  placeholder="Reseau max"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="number"
                  onChange={HandleAndroid}
                  placeholder="Version android"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="text"
                  onChange={HandleChargeurcable}
                  placeholder="Chargeur"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="text"
                  onChange={HandleIdEtat}
                  placeholder="Etat du telephone "
                  htmlFor="grid-first-name5"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="text"
                  onChange={HandleCodeModel}
                  placeholder="Code modele"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />

                <input
                  type="number"
                  onChange={HandlePonderation}
                  placeholder="Ponderation"
                  className="mb-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
                <div className=" flex justify-center ">
                  <button
                    type="submit"
                    className=" justify-center w-1/3 inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
                  >
                    ok
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="block justify-center w-72 h-fit rounded-lg  p-6 shadow-lg ">
          <h5 className="mb-2  text-center leading-tight text-neutral-800 dark:black font-medium text-xl uppercase tracking-widest">
            {`Note du téléphone `}
          </h5>
          <div className="text-center">
            <h4 className="text-red text-lg">{`${noteTel}`}</h4>
            <h4 className="bg-purple text-white text-transform:  uppercase mt-2 rounded-md">{`categorie: ${categorie}`}</h4>
          </div>
          <p className="mb-4 mt-4 text-base text-center text-neutral-600 dark:text-black">
            Besoin d'un Qr Code ?
          </p>
          <div>
            <div>
              <form className="flex justify-center" onSubmit={handleFormSubmit}>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
                >
                  Générer le QR code
                </button>
              </form>

              {showQrCode && (
                <div className="modal ">
                  <canvas ref={canvasRef} />
                  <div className="flex justify-center">
                    <Button
                      type="button"
                      onClick={handleExportPdf}
                      className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red transition ease-in-out duration-150"
                    >
                      Exporter en PDF
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculette;
