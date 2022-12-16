const { expect } = require("chai");
const Web3 = require('web3');
const hardhat = require("hardhat");
const axios = require("axios");
require('dotenv').config();
const { sendRequest } = require('../utils/sendRequest');
const providerUrl = process.env.PROVIDER_URL;
const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

describe("Forking JSON-RPC URL", async () => {
    let web3;

    describe("Connection", async () => {
        it("Should create a new web3 connection with the forking URL", async () => {
            web3 = new Web3(providerUrl);
            expect(true).to.eql(true);
        });
    });

    describe("JSON-RPC Requests", async () => {
        it("Should fetch the block number", async () => {
            const blockNumber = await web3.eth.getBlockNumber();
            console.log(`Block Number: ${blockNumber}`);
            expect(!!blockNumber).to.eql(true);
        });
    });

    describe("Hardhat Requests", async () => {
        it("Should reset the fork", async () => {
            const headers = {
                'Content-type': 'application/json'
            };

            const data = {
                jsonrpc: '2.0',
                method: 'hardhat_reset',
                params: [
                    {
                        forking: {
                            jsonRpcUrl: process.env.FORKING_URL,
                            //blockNumber: 16059601,
                        },
                    },
                ],
                id: 1
            }

            const response = await sendRequest(providerUrl, {...data}, {headers});

            const blockNumber = await web3.eth.getBlockNumber();
            console.log(`Block Number: ${blockNumber}`);
            expect(!!blockNumber).to.eql(true);
            const wethContractBalance = await web3.eth.getBalance(WETH);
            console.log(`WETH Balance: ${wethContractBalance}`);
            expect(!!wethContractBalance).to.be.true;
            expect(wethContractBalance !== '0').to.be.true;
        });
    });
});
