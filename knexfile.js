module.exports = {
  production: {
    client: 'postgresql',
    connection: process.env.DATABSE_URL,
    migrations: {
       directory: __dirname + '/db/migrations'
    },
    seeds: {
       directory: __dirname + '/db/seeds'
    }
  }
};
