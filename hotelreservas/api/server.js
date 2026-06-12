const express = require('express');
const cors = require('cors');

const quartosRoutes = require('./routes/quartos');
const reservasRoutes = require('./routes/reservas');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Hotel Reservas - online' });
});

app.use('/api/quartos', quartosRoutes);
app.use('/api/reservas', reservasRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
  console.log(`API Hotel Reservas rodando em http://localhost:${PORT}`);
});
