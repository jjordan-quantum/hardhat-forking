const { sendRequest } = require('../utils/sendRequest');
require('dotenv').config();
const providerUrl = process.env.PROVIDER_URL;
(async () => {
    const headers = {
        'Content-type': 'application/json'
    };

    const data = {
        jsonrpc: '2.0',
        method: 'evm_setIntervalMining',
        params: [12000],
        id: 1
    }

    const response = await sendRequest(providerUrl, {
        ...data
    }, {headers});

    console.log(response);

    const _data = {
        jsonrpc: '2.0',
        method: 'evm_setAutomine',
        params: [false],
        id: 1
    }

    const _response = await sendRequest(providerUrl, {
        ..._data
    }, {headers});

    console.log(_response);
})()
    .catch(e => console.log(e));
