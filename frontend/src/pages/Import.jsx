import { useState, useEffect } from "react";
import papa from "papaparse";
import axios from "axios";
import Navbar from "../components/Navbar";

const backendURL = import.meta.env.VITE_BACKEND_URL;

function Import() {
  const [link, setLink] = useState("");
  const [phones, setPhones] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const phonesInStorage = localStorage.getItem("phones");
    const headersInStorage = localStorage.getItem("headers");
    setPhones(phonesInStorage ? JSON.parse(phonesInStorage) : []);
    setHeaders(headersInStorage ? JSON.parse(headersInStorage) : []);
  }, []);

  const handleInput = (e) => {
    setLink(e.target.value);
  };

  const handlePersist = () => {
    const phoneObj = {
      marque: "Nokia",
      modele: "Nokia 3.1 Plus",
      ram: 3,
      stockage: 32,
      indice_antutu: 0,
      ecran: 6,
      reseau: 0,
      android: 0,
      chargeurcable: 0,
      idetat: 4,
    };
    axios
      .post(`${backendURL}/smartphones`, phoneObj)
      .then((res) => console.log(res))
      .then(alert("votre téléphone a bien été sauvegardé en base de données"))
      .catch((err) => {
        alert("votre téléphone n'a pas pu être sauvegardé");
        console.error(err);
      });
  };

  const prepareJsonData = (data) => {
    // eslint-disable-next-line
    const json = data.map((line) => {
      let obj = {};
      data[0].forEach((el, j) => (obj = { ...obj, [el]: line[j] }));
      return { ...obj, statut: false };
    });
    const titleObject = json.splice(0, 1);
    const titleArray = Object.keys(titleObject[0]).map((elem) => ({
      text: elem,
      status: false,
    }));
    setPhones(json);
    setHeaders(titleArray);
    localStorage.setItem("phones", JSON.stringify(phones));
    localStorage.setItem("headers", JSON.stringify(headers));
  };

  const handleImport = () => {
    fetch(`${link}`)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((sheet) => prepareJsonData(sheet.data));
  };

  // const handleCheck = (e) => {
  //     const index = e.target.parentElement.parentElement.childNodes[1].childNodes[0].textContent;
  //     const obj = phones[index - 1];
  //     console.log(obj);
  // };

  const handleColumnCheck = (e) => {
    const titleChecked = e.target.parentElement.childNodes[0].textContent;
    setHeaders((prevHeaders) =>
      prevHeaders.map((header) => {
        if (header.text === titleChecked) {
          return { ...header, status: !header.status };
        }
        return header;
      })
    );
  };

  const handleAllColumns = () => {
    setHeaders((prevHeaders) =>
      prevHeaders.map((header) => {
        return { ...header, status: !header.status };
      })
    );
  };

  const handleRowCheck = (e) => {
    // console.log(e.target.parentElement.parentElement.childNodes[1].childNodes[0].textContent);
    const rowChecked =
      e.target.parentElement.parentElement.childNodes[1].childNodes[0]
        .textContent;
    setPhones((prevPhones) =>
      prevPhones.map((phone) => {
        if (phone.id === rowChecked) {
          return { ...phone, statut: !phone.statut };
        }
        return phone;
      })
    );
  };

  const handleAllRows = () => {
    setPhones((prevPhones) =>
      prevPhones.map((phone) => {
        return { ...phone, statut: !phone.statut };
      })
    );
  };

  const handleEmpty = () => {
    setPhones([]);
    setHeaders([]);
    localStorage.removeItem("phones");
    localStorage.removeItem("headers");
  };

  return (
    <div className="relative">
      <div className="fixed h-[458px] bg-white z-10">
        <div className="w-screen z-10">
          <Navbar />
        </div>
        <div className="w-screen flex flex-row justify-center align-middle items-center">
          <input
            className="border-2 w-72 mr-4 ml-4 text-sm leading-4 rounded-lg p-2"
            name="url"
            type="text"
            placeholder="saisir ici l'url du fichier à importer"
            onChange={handleInput}
          />
          <button
            type="button"
            onClick={handleImport}
            className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs leading-4 text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
          >
            Importer le fichier
          </button>
          {headers.length > 0 && (
            <button
              type="button"
              onClick={handleEmpty}
              className="inline-flex items-center ml-10 px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs leading-4 text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
            >
              Vider
            </button>
          )}
        </div>
        <div className="w-screen flex justify-center mt-10">
          {headers.length > 0 && (
            <p>
              Vous pouvez maintenant sélectionner les colonnes que vous
              souhaitez sauvegarder en base de données
            </p>
          )}
        </div>
        {headers.length > 0 && (
          <div className="flex gap-4 w-full justify-center pt-10">
            <button
              type="button"
              onClick={handleAllColumns}
              className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs leading-4 text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
            >
              Toutes les colonnes
            </button>
            <button
              type="button"
              onClick={handleAllRows}
              className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs leading-4 text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
            >
              Toutes les lignes
            </button>
            <button
              type="button"
              onClick={handlePersist}
              className="ml-10 inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs leading-4 text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
            >
              Envoyer
            </button>
          </div>
        )}
      </div>
      <div className="absolute mt-[410px]">
        <table className="mt-12 overflow-x-scroll ">
          <thead className="m-4 bg-darkgreen">
            <tr>
              {headers.length > 0 && (
                <th className="p-4 text-white">Votre sélection</th>
              )}
              {headers.map((title) => (
                <th className="p-4 text-white" key={title.text}>
                  <p>{title.text}</p>
                  <input
                    id="checkbox"
                    type="checkbox"
                    name="checkbox"
                    onChange={handleColumnCheck}
                    checked={title.status}
                    className="w-4 h-4 text-teal-600 bg-gray-100 border-darkgreen rounded"
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {phones.map((phone) => (
              <tr
                className="odd:bg-gray-200 even:bg-white h-fit"
                key={phone.id}
              >
                <td className="flex h-12 justify-center items-center">
                  <input
                    id="checkbox"
                    type="checkbox"
                    name="checkbox"
                    onChange={handleRowCheck}
                    checked={phone.statut}
                    className="w-4 h-4 text-teal-600 bg-gray-100 border-darkgreen rounded"
                  />
                </td>
                {headers.map((header) => (
                  <td className="px-4 py-1" key={header.text}>
                    {phone[header.text]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Import;
