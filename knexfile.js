const databaseName = 'wasteless_app';

module.exports = {
  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL
    },
    migrations: {
       directory: __dirname + '/db/migrations'
    },
    seeds: {
       directory: __dirname + '/db/seeds'
    }
  }
};
