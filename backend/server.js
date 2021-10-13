const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const config = require('./server.config');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../front/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  credentials: true,
  origin: true
}));

const router = routes();
app.use(config.BASE_API_PATH, router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../front/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});