const { registerRepository } = require('./register.repository');
const { getEncryptedData } = require('../../utils/md5');


async function registerService(req) {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      throw new Error('not valid user deatils');
    }

    const uuid = getEncryptedData(`${email}-${password}`);
    return await registerRepository(req, { uuid, fullName, email });
  } catch (e) {
    console.error(`Error during registerService: ${e}`);
    throw e;
  }
}

module.exports = { registerService };
