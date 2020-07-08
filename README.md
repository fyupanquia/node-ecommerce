# node-ecommerce

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://node-ecommerce.fyupanquia.vercel.app/products)

### Installation

node-exomerce requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd node-ecommerce
$ npm i
$ node index.js
```

For production environments...

```sh
$ cp .env.example .env
$ npm run start
```

For development environments...

```sh
$ cp .env.example .env
$ npm run dev
```

### API

| Method | Path | Authorization |
| ------ | ------ | ----- |
| POST | /api/auth/token | Basic Auth |
| GET | /api/products | - |
| GET | /api/products/:id | - |
| GET | /api/products?tags[]=tagname | - |
| POST | /api/products | Bearer Token |
| PUT | /api/products/:id | Bearer Token |

## RELEASES
https://node-ecommerce.fyupanquia.vercel.app/products
