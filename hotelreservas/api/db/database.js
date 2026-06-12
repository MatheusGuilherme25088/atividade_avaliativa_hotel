const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const dbPath = path.join(__dirname, 'hotel_db.sqlite');
const db = new DatabaseSync(dbPath);
db.exec('PRAGMA foreign_keys = ON');

db.exec(`CREATE TABLE IF NOT EXISTS quartos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  numero VARCHAR(10) NOT NULL,
  tipo VARCHAR(50) NOT NULL
)`);

db.exec(`CREATE TABLE IF NOT EXISTS reservas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  hospede VARCHAR(100) NOT NULL,
  data_entrada DATE NOT NULL,
  data_saida DATE NOT NULL,
  quarto_id INTEGER NOT NULL,
  FOREIGN KEY (quarto_id) REFERENCES quartos(id) ON DELETE CASCADE
)`);

module.exports = db;
