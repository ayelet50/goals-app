const goalsRepository = require('./goals.repository');

module.exports = { getGoal, createGoal,updateGoal, getGoalNextSteps };


async function getGoal(req, res, id) {
  try {
    const response = await goalsRepository.getGoal(req, id);
    res.status(200).json({ error: false, data: response });
  } catch (e) {
    console.error(`Error during service getGoal: ${e}`);
    res.status(500).json({ error: true, data: null });
  }
}

async function createGoal(req, res) {
  try {
    const response = await goalsRepository.createGoal(req);
    res.status(200).json({ error: false, data: response });
  } catch (e) {
    console.error(`Error during service getGoal: ${e}`);
    res.status(500).json({ error: true, data: null });
  }
}

async function updateGoal(req, res, id) {
  try {
    const response = await goalsRepository.updateGoal(req);
    res.status(200).json({ error: false, data: response });
  } catch (e) {
    console.error(`Error during service getGoal: ${e}`);
    res.status(500).json({ error: true, data: null });
  }
}

async function getGoalNextSteps(req, res) {
  // try {
  //   const response = await goalsRepository.getGoalNextSteps(req);
  //   res.status(200).json({ error: false, data: response });
  // } catch (e) {
  //   console.error(`Error during service getGoal: ${e}`);
  //   res.status(500).json({ error: true, data: null });
  // }
}

