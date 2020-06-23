

function getBody(event) {
    return JSON.parse(event.body)
}

async function getQueryStringParams(event) {
    return event.queryStringParameters
}

module.exports = {
    getBody,
    getQueryStringParams
}