## Setup

Clone este repositório e depois siga os seguintes passos:

Entre na pasta que você escolheu para o projeto

Rode o seguinte comando

```bash
npm install
```

Para você trabalhar com o framework Adonisjs, precisa instalar ele globalmente com o comando abaixo:

```bash
npm i -g @adonisjs/cli
```

Use o comando abaixo se estiver utilizando Linux ou Mac

```bash
cp .env.example .env
```

Use o comando abaixo de estiver no Windows

```bash
copy .env.example .env
```

Gere a chave para poder rodar o servidor

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

ou

```js
npm start
```

### Passos para ver a documentação no Swagger

Acesse o endereço abaixo:

```bash
http://127.0.0.1:3000/docs
```
