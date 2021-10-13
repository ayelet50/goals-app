const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const config = require('../../server.config');

let connections = new Map();

async function getConnection(url, opts) {
  opts = opts || {};
  if (typeof url !== 'string') {
    throw new Error('Expected url to be a string');
  }

  if (!connections.has(url)) {
    try {
      const connection = await MongoClient.connect(
        url,
        opts
      );
      connections.set(url, connection);

    } catch (err) {
      throw new Error('Could not establish connection, dig in logs');
    }
  }

  return connections.get(url);
}


function closeConnection() {
  if (connections.size >= 0) {
    for (let [uri, connection] of connections) {
      connection.close();
    }
  }
}


async function getCollection(req, collectionName, connectionString = config.MONGODB_CONNECTION_STRING) {
  try {
    if (!connectionString || !collectionName) {
      console.error(`Error connecting mongodb, missing connection parameters:
        [connectionString: ${JSON.stringify(connectionString)} ,
           collectionName: ${JSON.stringify(collectionName)}]`);

      throw 'could not establish db connection';
    }

    const connection = await getConnection(connectionString, {
      useNewUrlParser: true
    });

    const db = await connection.db();
    return await db.collection(collectionName);
  } catch (e) {
    console.error(`Error connecting mongodb : ${e}`, req, e);
    throw 'could not establish db connection';
  }
}

//close connection when process is destroyed
process.once('SIGINT', () => {
  closeConnection();
});

module.exports = {
  getCollection
};


