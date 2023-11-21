
const { Employee } = require('../models');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findMany();
    res.status(200).json({ employees });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id: parseInt(id) } });

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({ employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { name } = req.body;
    const employee = await Employee.create({ name });
    res.status(201).json({ employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedEmployee = await Employee.update({
      where: { id: parseInt(id) },
      data: { name },
    });

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({ employee: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.delete({ where: { id: parseInt(id) } });

    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };
