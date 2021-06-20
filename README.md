# Blog Application

An example of a Blog Application.

Hosted at: https://blooming-bayou-30676.herokuapp.com/

Liked it? Find it useful? Support by ⭐'ing it.

## Features

- 🕸️ Server side application to handle authentication and data on a database server. More info at server directory.
- 💄 Client side application providing a user interface to interact with the server. More info at client directory.
- ☁️ Fullstack application ready to be deployed on Heroku.

## Getting Started

- Clone the repo
  ```
  git clone https://github.com/henrique-c-ladeira/blog-app
  ```
- Set up a .env with the mongodb url and a jwt private key just like in .env.example.

  ```
  // server/.env

  DATABASE_URL=mongodb+srv://your_mongodb_url

  JWT_PRIVATE=YOUR_JWT_PRIVATE_KEY

  ```

- At the project's root directory run:
  ```
  yarn build && yarn start
  ```
  ![Getting Started](./docs/getting_started.gif)
- After that the server should be running at: http://localhost:3000

### 🚧 TODO and Notes:

- This is still an alpha version with unimplemented features.
- Make sure to set up ormconfig.js correctly

  ```
  if you want to deploy on heroku -> entities: ['*/dist/entity/*.*']

  if you want to build locally -> entities: ['dist/entity/*.*']
  ```
