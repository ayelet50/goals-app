const { loginRepository } = require('./login.repository');
const { getEncryptedData } = require('../../utils/md5');
const createToken = require('../../utils/createToken');


async function loginService(req, res) {
  try {
    const { email, password } = req.body;
    const response = { isUserLoggedIn: false, goalsData: null };

    if (!email || !password) {
      throw new Error('not valid user deatils');
    }

    const uuid = getEncryptedData(`${email}-${password}`);
    const userData = await loginRepository(req, uuid);
    if (userData) {
      response.isUserLoggedIn = true;
      response.goalsData = userData.goals;

      // user is logged in successfully so we create jwt on res.cookie
      createToken(res, uuid);
    }

    return response;
  } catch (e) {
    console.error(`Error during loginService: ${e}`);
    throw e;
  }
}

module.exports = { loginService };
