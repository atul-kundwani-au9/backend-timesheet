
const express = require('express');
const { getAllClients, getClientById, createClient, updateClient, deleteClient } = require('../controllers/clientController');
const { authenticate } = require('../utils/authMiddleware');

const router = express.Router();
router.get('/', authenticate, getAllClients);
router.get('/:id', authenticate, getClientById);
router.post('/', authenticate, createClient);
router.put('/:id', authenticate, updateClient);
router.delete('/:id', authenticate, deleteClient);

module.exports = router;
