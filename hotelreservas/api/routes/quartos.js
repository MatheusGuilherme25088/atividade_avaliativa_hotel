const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Listar todos os quartos
router.get('/', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM quartos').all();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Buscar quarto por id
router.get('/:id', (req, res) => {
  try {
    const row = db.prepare('SELECT * FROM quartos WHERE id = ?').get(req.params.id);
    if (!row) return res.status(404).json({ error: 'Quarto não encontrado' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cadastrar novo quarto
router.post('/', (req, res) => {
  const { numero, tipo } = req.body;
  if (!numero || !tipo) {
    return res.status(400).json({ error: 'Número e tipo do quarto são obrigatórios' });
  }
  try {
    const result = db.prepare('INSERT INTO quartos (numero, tipo) VALUES (?, ?)').run(numero, tipo);
    res.status(201).json({ id: Number(result.lastInsertRowid), numero, tipo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir quarto
router.delete('/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM reservas WHERE quarto_id = ?').run(req.params.id);
    const result = db.prepare('DELETE FROM quartos WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Quarto não encontrado' });
    res.json({ message: 'Quarto excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
