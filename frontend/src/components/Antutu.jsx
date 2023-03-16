import { useEffect, useState } from "react";
import papa from "papaparse";

function Antutu() {
  const [phones, setPhones] = useState([]);
  const [field, setField] = useState("");
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [filterActivated, setFilterActivated] = useState(false);

  const handleInput = (e) => {
    setField(e.target.value.toLowerCase());
  };

  const handleFilter = () => {
    const selectedPhones = phones.filter((phone) =>
      phone.model.toLowerCase().includes(field)
    );
    setFilteredPhones(selectedPhones);
    setFilterActivated(true);
    console.log(selectedPhones);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleFilter();
    }
  };

  const prepareJsonData = (data) => {
    // eslint-disable-next-line
    const json = data.map((line, index) => {
      if (index > 0) {
        let obj = {};
        data[0].forEach((el, j) => (obj = { ...obj, [el]: line[j] }));
        return obj;
      }
    });
    json.shift();
    setPhones(json);
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbeClvP70VOzGOFE-0ii1cA7bfbLz_oO4rLfv1uwIDxTREui0eJJCkBmxeFqq68_PgYTrFULmX2K87/pub?output=csv"
    )
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((sheet) => prepareJsonData(sheet.data));
  }, []);

  return (
    <div className="App">
      <label htmlFor="model">Phone model</label>
      <input
        className="border-2"
        name="model"
        type="text"
        onChange={handleInput}
        onKeyDown={handleKeyPress}
      />
      <button type="button" onClick={handleFilter}>
        Trouver le score Antutu
      </button>
      <div className="phoneCards">
        {filteredPhones &&
          filteredPhones.map((phone) => (
            <div key={phone.id}>
              <p>Modèle : {phone.model}</p>
              <p>Score Antutu : {phone.antutu_score}</p>
            </div>
          ))}
      </div>
      <div>
        {filterActivated && filteredPhones.length === 0 && (
          <p>
            Il n'existe pas encore de score répertorié pour ce modèle, vous
            allez devoir le trouver manuellement.
          </p>
        )}
      </div>
    </div>
  );
}

export default Antutu;
