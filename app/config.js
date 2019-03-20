require('dotenv').config();

const environment = process.env.ENV || 'development';
const config = {
  development: {
    port: 4001,
  },
  production: {
    port: process.env.PORT || 4000,
  },
  test: {
    port: 5000,
  },
};
module.exports = config[environment];
