const express = require('express');
const router = express.Router();
const HasToken = require('./middlewares/jwt');

const registerRouter = require('./register/register.route');
const loginRouter = require('./login/login.route');
const goalsRouter = require('./goals/goals.route');
const stepsRouter = require('./steps/steps.route');


const routes = () => {

  /*  APPLICATION API  */
  router.use('/register', registerRouter);
  router.use('/login', loginRouter);
  router.use('/goals', HasToken, goalsRouter);
  router.use('/steps', HasToken, stepsRouter);
  /*  APPLICATION API  */

  return router;
};

module.exports = routes;