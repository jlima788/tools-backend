# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Clone este repositório e depois siga os seguintes passos:

```bash
npm install
```

```bash
cp .env.example .env
```

```bash
adonis key:generate
```

### Configuração do BD

Rode o comando abaixo para instalar o sqlite.

```js
adonis install sqlite3
```

Rode o comando abaixo para rodar as migrações e criar o banco de dados e as tabelas.

```js
adonis migration:run
```

### Rodar o servidor

Rode o comando abaixo para subir o servidor

```js
adonis serve --dev
```
