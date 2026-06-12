# Hotel Reservas

Sistema web desenvolvido para o gerenciamento de quartos e reservas de um hotel.

## Estrutura do Projeto

```text
hotelreservas/
├── api/
├── web/
├── docs/
├── wireframes/
└── README.md
```

## Tecnologias Utilizadas

* IDE: Visual Studio Code
* Banco de Dados: SQLite 3
* Servidor de Aplicação: Node.js
* Framework Back-end: Express
* Linguagens: HTML, CSS e JavaScript

## Banco de Dados

### Tabela: quartos

| Campo  | Tipo        |
| ------ | ----------- |
| id     | INTEGER     |
| numero | VARCHAR(10) |
| tipo   | VARCHAR(50) |

### Tabela: reservas

| Campo        | Tipo         |
| ------------ | ------------ |
| id           | INTEGER      |
| hospede      | VARCHAR(100) |
| data_entrada | DATE         |
| data_saida   | DATE         |
| quarto_id    | INTEGER      |

### Relacionamento

* Um quarto pode possuir várias reservas.
* Uma reserva pertence a apenas um quarto.

## Funcionalidades

### Quartos

* Cadastrar quarto
* Listar quartos
* Excluir quarto

### Reservas

* Cadastrar reserva
* Listar reservas
* Excluir reserva

## Como Executar o Projeto

### 1. Instalar as dependências

```bash
cd api
npm install
```

### 2. Criar o banco de dados

```bash
npm run seed
```

### 3. Iniciar a API

```bash
npm start
```

A API será iniciada em:

```text
http://localhost:3000
```

### 4. Executar o Front-end

Abra o arquivo:

```text
web/index.html
```

ou utilize uma extensão como Live Server.

## Endpoints da API

### Quartos

| Método | Rota             |
| ------ | ---------------- |
| GET    | /api/quartos     |
| GET    | /api/quartos/:id |
| POST   | /api/quartos     |
| DELETE | /api/quartos/:id |

### Reservas

| Método | Rota                       |
| ------ | -------------------------- |
| GET    | /api/reservas              |
| GET    | /api/reservas?quarto_id=id |
| POST   | /api/reservas              |
| DELETE | /api/reservas/:id          |

## Arquivos de Documentação

A pasta `docs` contém:

* Script do banco de dados.
* Exportação das requisições do Insomnia.

## Prints das Telas

Nos WireFrames
