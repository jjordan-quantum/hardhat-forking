const axios = require("axios");

exports.sendRequest = async function(url, data, headers) {
    return  await axios.post(url, {
        ...data
    }, {
        headers: headers
    });
}
