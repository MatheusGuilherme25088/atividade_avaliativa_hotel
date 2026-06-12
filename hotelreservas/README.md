# Hotel Reservas

Sistema web full-stack para gerenciamento de quartos e reservas de hotel.

## Estrutura do projeto

```
hotelreservas/
├── api/            # Back-end (Node.js + Express + SQLite)
├── web/            # Front-end (HTML, CSS, JavaScript)
├── docs/           # Script SQL e exportação de requisições (Insomnia)
├── wireframes/      # Imagens de referência do protótipo da interface
└── README.md
```

## Requisitos de Infraestrutura

- **IDE utilizada:** Visual Studio Code
- **SGBD:** SQLite 3 (via módulo nativo `node:sqlite` do Node.js)
- **Servidor de aplicação:** Node.js v22.x com Express 4.19
- **Linguagens utilizadas:** JavaScript (Node.js no back-end), HTML, CSS e JavaScript (front-end)

## Modelo de Banco de Dados

### Tabela `quartos`
| Campo  | Tipo         |
|--------|--------------|
| id     | INTEGER PK   |
| numero | VARCHAR(10)  |
| tipo   | VARCHAR(50)  |

### Tabela `reservas`
| Campo        | Tipo        |
|--------------|-------------|
| id           | INTEGER PK  |
| hospede      | VARCHAR(100)|
| data_entrada | DATE        |
| data_saida   | DATE        |
| quarto_id    | INTEGER (FK -> quartos.id) |

Relacionamento: um quarto pode possuir várias reservas; uma reserva pertence a apenas um quarto.

O script de criação das tabelas e dados de teste está em `docs/hotel_db.sql`.
A exportação das requisições (formato Insomnia) está em `docs/insomnia_export.json`.

## Passo a passo de execução

### 1. Pré-requisitos
- Node.js versão 22.5 ou superior (necessário para o módulo nativo `node:sqlite`)

### 2. Back-end (API)

```bash
cd api
npm install
npm run seed     # cria o banco hotel_db.sqlite e popula com dados de teste
npm start        # inicia a API em http://localhost:3000
```

Endpoints disponíveis:

| Método | Rota                         | Descrição                              |
|--------|------------------------------|-----------------------------------------|
| GET    | /api/quartos                 | Lista todos os quartos                  |
| GET    | /api/quartos/:id              | Busca um quarto pelo id                 |
| POST   | /api/quartos                 | Cadastra um novo quarto                 |
| DELETE | /api/quartos/:id              | Exclui um quarto (e suas reservas)      |
| GET    | /api/reservas                | Lista todas as reservas                 |
| GET    | /api/reservas?quarto_id=ID    | Lista reservas de um quarto específico  |
| POST   | /api/reservas                | Cadastra uma nova reserva               |
| DELETE | /api/reservas/:id              | Exclui uma reserva                      |

### 3. Front-end (Web)

O front-end é um conjunto de páginas HTML/CSS/JS estáticas que consomem a API.

```bash
cd web
# Abra o arquivo index.html no navegador,
# ou utilize um servidor estático, por exemplo:
npx serve .
```

> A API deve estar em execução em `http://localhost:3000` para que o front-end funcione corretamente (configurável em `web/api.js`).

## Telas do sistema

1. **Tela Principal** (`index.html`) — Listagem dos quartos cadastrados, com botões para cadastrar novo quarto, ver reservas e excluir.
2. **Cadastro de Quarto** (`cadastro-quarto.html`) — Formulário para informar número e tipo do quarto.
3. **Reservas do Quarto** (`reservas-quarto.html`) — Lista de reservas associadas a um quarto específico, com botão para nova reserva.
4. **Cadastro de Reserva** (`cadastro-reserva.html`) — Formulário para registrar nome do hóspede, data de entrada e saída.
5. **Confirmação de exclusão** — Modais de confirmação são exibidos antes de excluir quartos ou reservas.

As imagens do protótipo da interface (wireframes) estão disponíveis na pasta `./wireframes`.

## Prints das telas

> Adicione aqui os prints das telas em execução (front-end rodando e consumindo a API).
