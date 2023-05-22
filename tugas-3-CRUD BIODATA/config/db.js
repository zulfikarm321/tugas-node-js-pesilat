const { Sequelize } = require('sequelize');

const db = new Sequelize('hello_world_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const config = {};
config.Sequelize = Sequelize;
config.db = db;

config.biodata = require('../models/biodata.model')(db, Sequelize);

module.exports = config;
