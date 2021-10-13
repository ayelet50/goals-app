const { getCollection } = require('../../services/mongoDb/mongoService');
const config = require('../../server.config');

async function loginRepository(req, uuid) {
  try {
    const collection = await getCollection(req, config.COLLECTION_NAME);
    return await collection.findOne({ 'uuid': uuid });
  } catch (e) {
    console.error(`Error during loginRepository: ${e}`);
    throw e;
  }
}

module.exports = { loginRepository };
