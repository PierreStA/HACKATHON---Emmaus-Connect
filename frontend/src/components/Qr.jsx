import React, { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";

// function QrCode() {
//   const [text, setText] = useState("");
//   const canvasRef = useRef();

//   useEffect(() => {
//     QRCode.toCanvas(
//       canvasRef.current,
//       text || " ",
//       (error) => error && console.error(error)
//     );
//   }, [text]);
//   return (
//     <div>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <br />

//       <canvas ref={canvasRef} />
//     </div>
//   );
// }

// export default QrCode;

function QrCode() {
  const [text, setText] = useState("");
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      text || " ",
      (error) => error && console.error(error)
    );
  }, [text]);

  const getDataFromCard = () => {
    const cardData = {
      // données de la card */
    };
    const dataString = JSON.stringify(cardData);
    setText(dataString);
  };

  return (
    <div>
      <button className="btn-yellow" type="button" onClick={getDataFromCard}>
        Générer le QR Code
      </button>
      <br />

      <canvas ref={canvasRef} />
    </div>
  );
}

export default QrCode;
