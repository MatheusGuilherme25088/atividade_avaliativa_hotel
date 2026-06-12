const db = require('./database');

db.exec('PRAGMA foreign_keys = OFF');
db.exec('DELETE FROM reservas');
db.exec('DELETE FROM quartos');
db.exec("DELETE FROM sqlite_sequence WHERE name IN ('quartos','reservas')");
db.exec('PRAGMA foreign_keys = ON');

const quartos = [
  ['101', 'Standard'],
  ['102', 'Luxo'],
  ['201', 'Suíte'],
  ['202', 'Standard']
];

const insertQuarto = db.prepare('INSERT INTO quartos (numero, tipo) VALUES (?, ?)');
quartos.forEach(q => insertQuarto.run(...q));

const reservas = [
  ['João Silva', '2024-06-10', '2024-06-12', 1],
  ['Maria Souza', '2024-06-15', '2024-06-18', 1],
  ['Pedro Santos', '2024-06-20', '2024-06-22', 1],
  ['Ana Lima', '2024-07-01', '2024-07-05', 2],
  ['Carlos Souza', '2024-07-10', '2024-07-12', 3]
];

const insertReserva = db.prepare('INSERT INTO reservas (hospede, data_entrada, data_saida, quarto_id) VALUES (?, ?, ?, ?)');
reservas.forEach(r => insertReserva.run(...r));

console.log('Banco de dados populado com dados de teste!');
db.close();
