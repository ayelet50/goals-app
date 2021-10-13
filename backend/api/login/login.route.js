const express = require('express');
const router = express.Router();
const { loginService } = require('./login.service');


router.post('', loginRoute);

async function loginRoute(req, res) {
  try {
    console.log('started loginRoute');
    const { isLoggedIn, goalsData } = await loginService(req, res);
    res.status(200).json({ error: isLoggedIn, data: goalsData });
  } catch (e) {
    console.error(`Error during loginRoute route: ${e}`);
    res.status(500).json({ error: true, data: null });
  }
}

module.exports = router;