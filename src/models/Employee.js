
const { model, DataTypes } = require('@prisma/client');

const Employee = model('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  
});

module.exports = Employee;
