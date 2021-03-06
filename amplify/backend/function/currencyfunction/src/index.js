

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// amplify/backend/function/currencyfunction/src/index.js
const axios = require('axios')

exports.handler = function (event, _, callback) {
    let apiUrl = `https://api.coinlore.com/api/tickers/?start=1&limit=10`

    if (event.arguments) {
        const { start = 0, limit = 10 } = event.arguments
        apiUrl = `https://api.coinlore.com/api/tickers/?start=${start}&limit=${limit}`
    }

    axios.get(apiUrl)
        .then(response => callback(null, response.data.data))
        .catch(err => callback(err))
}