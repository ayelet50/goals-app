const express = require('express');
const router = express.Router();
const goalsService = require('./goals.service');

router.get('/:id', async function getGoal(req, res) {
  const { id } = req.params;
  return await goalsService.getGoal(req, res, id);
});

router.post('/create', async function createGoal(req, res) {
  return await goalsService.createGoal(req, res);
});

router.put('/:id', async function updateGoal(req, res) {
  const { id } = req.params;
  return await goalsService.updateGoal(req, res, id);
});

router.get('/:id/nextSteps', async function getGoalNextSteps(req, res) {
  return await goalsService.getGoalNextSteps(req, res);
});


module.exports = router;