const databaseName = 'wasteless_app';

module.exports = {
  production: {
    client: 'postgresql',
    connection: {
      database: 'wasteless_app'
    },
    migrations: {
       directory: __dirname + '/db/migrations'
    },
    seeds: {
       directory: __dirname + '/db/seeds'
    }
  }
};
