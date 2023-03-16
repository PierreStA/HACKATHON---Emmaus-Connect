import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode";
import JsPDF from "jspdf";

function Qr({
  marque,
  modele,
  ram,
  stockage,
  indiceAntutu,
  ecran,
  reseau,
  android,
  chargeurcable,
  idetat,
  codeModel,
  setMarque,
}) {
  const [formData, setFormData] = useState({
    marque,
    modele,
    ram,
    stockage,
    indiceAntutu,
    ecran,
    reseau,
    android,
    chargeurcable,
    idetat,
    codeModel,
  });
  const [showQrCode, setShowQrCode] = useState(false);
  const canvasRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.getItem(marque);
    console.log(marque);
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  console.log(formData);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red transition ease-in-out duration-150"
        >
          Générer le QR code
        </button>
      </form>

      {showQrCode && (
        <div className="modal">
          <canvas ref={canvasRef} />
          <button type="button" onClick={handleExportPdf}>
            Exporter en PDF
          </button>
        </div>
      )}
    </div>
  );
}
Qr.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  ram: PropTypes.number.isRequired,
  stockage: PropTypes.number.isRequired,
  indiceAntutu: PropTypes.number.isRequired,
  ecran: PropTypes.string.isRequired,
  reseau: PropTypes.string.isRequired,
  android: PropTypes.string.isRequired,
  chargeurcable: PropTypes.string.isRequired,
  idetat: PropTypes.number.isRequired,
  codeModel: PropTypes.string.isRequired,
};

export default Qr;
