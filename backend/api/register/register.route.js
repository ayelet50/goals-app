const express = require('express');
const router = express.Router();
const { registerService } = require('./register.service');


router.post('', registerRoute);

async function registerRoute(req, res) {
  try {
    console.log('started registerRoute');
    const response = await registerService(req);
    res.status(200).json({ error: false, data: response});
  } catch (e) {
    console.error(`Error during registerRoute route: ${e}`);
    res.status(500).json({ error: true, data: null });
  }
}

module.exports = router;