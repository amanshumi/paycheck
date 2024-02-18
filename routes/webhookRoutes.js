//Route for git Hub webHook

const express = require('express');
const router = express.Router();
const { handleWebhook } = require('./webhookController');

router.post('/webhook', handleWebhook);

module.exports = router;