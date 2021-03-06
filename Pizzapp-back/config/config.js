module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "pizzapp",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3306",
    "operatorsAliases": 1
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  authentication: {
    jwtSecret: 'secret'
  }
}
