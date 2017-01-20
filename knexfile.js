module.exports = {
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://kigmrpflyvdecd:63d86be38192798648ecc9a64cfc3fd5221749551d159edfec872b13a2a77ca9@ec2-107-22-236-252.compute-1.amazonaws.com:5432/d26bav6nm5v4p4'
    },
    migrations: {
       directory: __dirname + '/db/migrations'
    },
    seeds: {
       directory: __dirname + '/db/seeds'
    }
  }
};
