
const { model, DataTypes } = require('@prisma/client');

const Project = model('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  
});

module.exports = Project;
