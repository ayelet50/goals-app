const { getCollection } = require('../../services/mongoDb/mongoService');
const config = require('../../server.config');
const { randomStringId } = require('../../utils');

module.exports = { getGoal, createGoal, updateGoal };


async function getGoal(req, id) {
  try {
    const collection = await getCollection(req, config.COLLECTION_NAME);
    return await collection.findOne({ uuid: req.user.uuid, 'goals.id': id });
  } catch (e) {
    console.error(`Error during repository getGoal: ${e}`);
    throw e;
  }
}

async function createGoal(req) {
  try {
    const goalDescription = req.body;
    const collection = await getCollection(req, config.COLLECTION_NAME);
    return await collection.updateOne({ uuid: req.user.uuid }, {
      $push: {
        goals: {
          id: randomStringId(),
          complete: false,
          desc: goalDescription,
          steps: []
        }
      }
    });
  } catch (e) {
    console.error(`Error during repository createGoal: ${e}`);
    throw e;
  }
}

async function updateGoal(req, uuid) {
  try {
    const collection = await getCollection(req, config.COLLECTION_NAME);
    return await collection.findOne({ 'uuid': uuid });
  } catch (e) {
    console.error(`Error during repository updateGoal: ${e}`);
    throw e;
  }
}
