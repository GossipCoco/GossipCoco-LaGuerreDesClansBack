const { Sequelize } = require('sequelize');

class Database {
  constructor() {
    if (!Database.instance) {
      this._init();
      Database.instance = this;
    }

    return Database.instance;
  }

  _init() {
    this.connection = new Sequelize({
      "username": "sa",
      "password": '23031983',
      "database": "laGuerreDesClans",
      "host": "localhost",
      "dialect": "mssql",
      dialectOptions: {
        options: {
          encrypt: true, // Si nécessaire pour votre configuration MSSQL
          requestTimeout: 30000 // 30 secondes
        }
      },
      options: {
        instanceName: 'sqlexpress'
      }
    });

    this.connection
      .authenticate()
      .then(() => {
        console.log('Back end Connection successful');
      })
      .catch(err => {
        console.log('Error connecting to the database:', err);
      });
  }

  getConnection() {
    return this.connection;
  }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance.getConnection(); // Exporte directement l'instance Sequelize
