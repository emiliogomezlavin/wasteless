module.exports = {
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://ykmtlokjudojzq:bd0835dad058d128c6fcaefcd1fa197af59a4f1a5a7e30a1d1f500dce0e38aa6@ec2-107-20-141-145.compute-1.amazonaws.com:5432/d99ludobfqlqgv?ssl=true'
    },
    migrations: {
       directory: __dirname + '/db/migrations'
    },
    seeds: {
       directory: __dirname + '/db/seeds'
    }
  }
};
