const pgp = require("pg-promise")();
require("dotenv").config();


// PG_PASSWORD does not exist locally, but it does exist and is require on Render when we deploy. So we add it to our `cn` object so the production environment can find it and use it.
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password:process.env.PG_PASSWORD
};

const db = pgp(cn);
module.exports = db;