
const { model, DataTypes } = require('@prisma/client');

const Client = model('Client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  
});

module.exports = Client;
