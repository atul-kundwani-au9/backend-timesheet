const { Client } = require('../models');

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findMany();
    res.status(200).json({ clients });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({ where: { id: parseInt(id) } });

    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.status(200).json({ client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createClient = async (req, res) => {
  try {
    const { name } = req.body;
    const client = await Client.create({ name });
    res.status(201).json({ client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedClient = await Client.update({
      where: { id: parseInt(id) },
      data: { name },
    });

    if (!updatedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.status(200).json({ client: updatedClient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await Client.delete({ where: { id: parseInt(id) } });

    if (!deletedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllClients, getClientById, createClient, updateClient, deleteClient };
