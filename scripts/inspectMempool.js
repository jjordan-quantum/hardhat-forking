const { sendRequest } = require('../utils/sendRequest');
const Web3 = require("web3");
require('dotenv').config();
const providerUrl = process.env.PROVIDER_URL;
const web3 = new Web3(providerUrl);

(async () => {
    const headers = {
        'Content-type': 'application/json'
    };

    const data = {
        jsonrpc: '2.0',
        method: 'eth_getBlockByNumber',
        params: [
            "pending",
            false,
        ],
        id: 1
    }

    const response = await sendRequest(providerUrl, {
        ...data
    }, {headers});

    console.log(response.data);
    const block = response.data.result;
    const transactions = block.transactions;

    for(const hash of transactions) {
        const tx = await web3.eth.getTransaction(hash);
        console.log(tx);
    }

})()
    .catch(e => console.log(e));
