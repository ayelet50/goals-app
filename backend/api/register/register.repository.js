const { getCollection } = require('../../services/mongoDb/mongoService');
const config = require('../../server.config');

async function registerRepository(req, { uuid, fullName, email }) {
  try {
    const collection = await getCollection(req, config.COLLECTION_NAME);
    await collection.insertOne({ uuid, fullName, email, goals: [] });
    return 'insert user succeeded';
  } catch (e) {
    console.error(`Error during registerRepository: ${e}`);
    throw e;
  }
}

module.exports = { registerRepository };
