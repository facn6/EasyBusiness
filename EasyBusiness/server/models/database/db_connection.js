const pg = require("pg");
const Pool = pg.Pool;
const url = require("url");
require("env2")("config.env");

pg.defaults.ssl = true;
let options = { max: process.env.DB_MAX_CONNECTIONS || 5 };

// used for heroku DB
if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  const [username, password] = params.auth.split(":");
  options = Object.assign(options, {
    user: username,
    password: password,
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1]
  });

  // error case
} else {
  throw new Error("database credentials must be set");
}

module.exports = new Pool(options);
