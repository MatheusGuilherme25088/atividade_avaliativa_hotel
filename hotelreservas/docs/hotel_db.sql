-- =========================================================
-- Banco de dados: hotel_db
-- Sistema: Hotel Reservas
-- SGBD: SQLite 3
-- =========================================================

-- Tabela: quartos
CREATE TABLE IF NOT EXISTS quartos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    numero VARCHAR(10) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

-- Tabela: reservas
CREATE TABLE IF NOT EXISTS reservas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hospede VARCHAR(100) NOT NULL,
    data_entrada DATE NOT NULL,
    data_saida DATE NOT NULL,
    quarto_id INTEGER NOT NULL,
    FOREIGN KEY (quarto_id) REFERENCES quartos(id) ON DELETE CASCADE
);

-- =========================================================
-- Dados de teste
-- =========================================================

INSERT INTO quartos (id, numero, tipo) VALUES
(1, '101', 'Standard'),
(2, '102', 'Luxo'),
(3, '201', 'Suíte'),
(4, '202', 'Standard');

INSERT INTO reservas (id, hospede, data_entrada, data_saida, quarto_id) VALUES
(1, 'João Silva',  '2024-06-10', '2024-06-12', 1),
(2, 'Maria Souza', '2024-06-15', '2024-06-18', 1),
(3, 'Pedro Santos','2024-06-20', '2024-06-22', 1),
(4, 'Ana Lima',    '2024-07-01', '2024-07-05', 2),
(5, 'Carlos Souza','2024-07-10', '2024-07-12', 3);
