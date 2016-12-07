const databaseName = 'wasteless_app';

module.exports = {
  development: {
    connection: `postgres://localhost:5432/${databaseName}`,
    migrations: {
       directory: __dirname + '/db/migrations'
    },
    seeds: {
       directory: __dirname + '/db/seeds'
    }
  }
 // test: {
 //   client: 'postgresql',
 //   connection: `postgres://localhost:5432/${databaseName}_test`,
 //   migrations: {
 //     directory: __dirname + '/src/server/db/migrations'
 //   },
 //   seeds: {
 //     directory: __dirname + '/src/server/db/seeds'
 //   }
 // }
};


