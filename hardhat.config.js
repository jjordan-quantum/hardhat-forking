require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
// TODO - install ethernal plugin

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    hardhat: {
      forking: {
        url: process.env.FORKING_URL,
        mining: {
          auto: false,
          interval: 12000
        }
      },
      chainId: 1,  // this will be a env var
    },
  },

  // TODO - ethernal options
};
