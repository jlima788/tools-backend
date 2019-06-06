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

### Passos para ver a documentação no Swagger

Acesse o endereço abaixo:

```bash
http://localhost:3000/docs
```
