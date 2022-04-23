// can use `process.env.SECRET_MNEMONIC` or `process.env.SECRET_PRIV_KEY`
// to populate secret in CI environment instead of hardcoding

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  custom_tester_1: {
    mnemonic: process.env.SECRET_MNEMONIC,
  },
};
