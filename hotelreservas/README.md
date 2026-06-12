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

Prints Anexado nos WireFrames
