const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient({
    region: process.env.region
})

function createBlogPost(info) {
    createThumbnailCard(info)
    createMainPost(info)
}

function createThumbnailCard(info) {
    var tableName = getTableName(info)
    var shortContent = getShortContent(info)
    var thumbNail = getThumbNail(info)
}

const getBody = (event) => {
    return JSON.parse(event.body)
}

const getInfo = (event) => {
    var info = event.info
    return info
}

module.exports = {
    getInfo,
    getBody
}