require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const ALCHEMY_URL = process.env.ALCHEMY_URL;
const ETHERSCAN_APIKEY = process.env.ETHERSCAN_APIKEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    solidity: "0.8.27",
    networks: {
        sepolia: {
            url: ALCHEMY_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_APIKEY,
    },
    sourcify: {
        enabled: true,
    }
};