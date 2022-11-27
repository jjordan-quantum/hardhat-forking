require("@nomicfoundation/hardhat-toolbox");
// TODO - install dotenv
// TODO - install ethernal plugin

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    hardhat: {
      chainId: 1,  // this will be a env var
    },
  },

  // TODO - ethernal options
};
