const Sequelize = require('sequelize')
const { DB_USER, DB_PASSWORD } = require('./config')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/postgres`);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('connected to the database')
  } catch (err) {
    console.log('failed to connect to the database')
    return process.exit(1)
  }

  return null
}

module.exports = { connectToDatabase, sequelize }


      