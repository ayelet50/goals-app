const express = require('express');
const router = express.Router();


router.post('/create', async function createStep(req, res) {
  // return await service.createStep(req);
});

router.put('/:id', async function updateStep(req, res) {
  // return await service.updateStep(req);
});


module.exports = router;