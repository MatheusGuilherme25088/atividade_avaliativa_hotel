const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Listar todas as reservas (opcionalmente filtrando por quarto)
router.get('/', (req, res) => {
  try {
    const { quarto_id } = req.query;
    let rows;
    if (quarto_id) {
      rows = db.prepare('SELECT * FROM reservas WHERE quarto_id = ?').all(quarto_id);
    } else {
      rows = db.prepare('SELECT * FROM reservas').all();
    }
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Buscar reserva por id
router.get('/:id', (req, res) => {
  try {
    const row = db.prepare('SELECT * FROM reservas WHERE id = ?').get(req.params.id);
    if (!row) return res.status(404).json({ error: 'Reserva não encontrada' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cadastrar nova reserva
router.post('/', (req, res) => {
  const { hospede, data_entrada, data_saida, quarto_id } = req.body;
  if (!hospede || !data_entrada || !data_saida || !quarto_id) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  try {
    const quarto = db.prepare('SELECT * FROM quartos WHERE id = ?').get(quarto_id);
    if (!quarto) return res.status(404).json({ error: 'Quarto não encontrado' });

    const result = db.prepare(
      'INSERT INTO reservas (hospede, data_entrada, data_saida, quarto_id) VALUES (?, ?, ?, ?)'
    ).run(hospede, data_entrada, data_saida, quarto_id);

    res.status(201).json({ id: Number(result.lastInsertRowid), hospede, data_entrada, data_saida, quarto_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir reserva
router.delete('/:id', (req, res) => {
  try {
    const result = db.prepare('DELETE FROM reservas WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Reserva não encontrada' });
    res.json({ message: 'Reserva excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
