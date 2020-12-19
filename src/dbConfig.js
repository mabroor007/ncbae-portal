const postgres = require('postgres');

const dbOptions = {
  host: 'localhost', // Postgres ip address or domain name
  port: 5432, // Postgres server port
  path: '', // unix socket path (usually '/tmp')
  database: 'test', // Name of database to connect to
  username: 'postgres', // Username of database user
  password: 'pwd', // Password of database user
  ssl: false, // True, or options for tls.connect
  max: 10, // Max number of connections
  timeout: 5, // Idle connection timeout in seconds
  connection: {
    application_name: 'postgres.js' // Default application_namehhhhhhhhhhh
  }
}

sql = postgres({
  ...dbOptions
});

module.exports = sql;
