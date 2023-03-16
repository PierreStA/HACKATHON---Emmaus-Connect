const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  displayPhone() {
    return this.database.query(
      `select smartphone.*, etat from smartphone join etat on smartphone.idetat = etat.id;`
    );
  }

  insert(smartphone) {
    return this.database.query(
      `insert into ${this.table} (marque, modele, ram, stockage, indice_antutu, ecran, reseau, android, chargeurcable, idetat) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        smartphone.marque,
        smartphone.modele,
        smartphone.ram,
        smartphone.stockage,
        smartphone.indice_antutu,
        smartphone.ecran,
        smartphone.reseau,
        smartphone.android,
        smartphone.chargeurcable,
        smartphone.idetat,
      ]
    );
  }

  update(smartphone) {
    return this.database.query(
      `update ${this.table} set marque = ? where id = ?`,
      [smartphone.title, smartphone.id]
    );
  }
}

module.exports = SmartphoneManager;
