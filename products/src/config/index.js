const dotEnv = require("dotenv");
const path = require('path')


if (process.env.NODE_ENV == "dev") {
  const configFile = path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`);
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}
// console.log(`message broker url ${process.env.MESSAGE_BROKER_URL}`)
module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  EXCHANGE_NAME: 'ONLINE_SHOPPING',
  SHOPPING_BINDING_KEY: 'SHOPPING_SERVICE',
  CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
};
