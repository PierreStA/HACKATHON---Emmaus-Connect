import { useState } from "react";
import papa from "papaparse";
import Navbar from "../components/Navbar";

function Import() {
  const [link, setLink] = useState("");
  const [phones, setPhones] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleInput = (e) => {
    setLink(e.target.value);
  };

  const prepareJsonData = (data) => {
    // eslint-disable-next-line
    const json = data.map((line) => {
      let obj = {};
      data[0].forEach((el, j) => (obj = { ...obj, [el]: line[j] }));
      return obj;
    });
    const titleObject = json.splice(0, 1);
    const titleArray = Object.keys(titleObject[0]);
    setPhones(json);
    setHeaders(titleArray);
  };

  const handleImport = () => {
    fetch(`${link}`)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((sheet) => prepareJsonData(sheet.data));
  };

  return (
    <div className="relative">
      <div className="fixed w-screen">
        <Navbar />
      </div>
      <div className="w-screen flex flex-row justify-center align-middle items-center pt-60">
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
          className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs leading-4 text-white uppercase tracking-widest hover:bg-red transition ease-in-out duration-150"
        >
          Importer le fichier
        </button>
      </div>
      <div className="flex justify-center mt-12">
        {headers && (
          <p>
            Vous pouvez maintenant sélectionner les colonnes que vous souhaitez
            sauvegarder en base de données
          </p>
        )}
      </div>
      <div className="phones">
        <table className="mt-12">
          <thead className="m-4 bg-darkgreen">
            <tr>
              {headers.map((title) => (
                <th className="p-4 text-white" key={title}>
                  <p>{title}</p>
                  <input
                    id="checkbox"
                    type="checkbox"
                    value=""
                    name="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {phones.map((phone) => (
              <tr className="odd:bg-gray-200" key={phone.id}>
                {headers.map((header) => (
                  <td className="px-4 py-1" key={header}>
                    {phone[header]}
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
