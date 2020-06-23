const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk')
// var documentClient = new AWS.DynamoDB.DocumentClient({
//     region: process.env.region
// })

var documentClient = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
})

class BlogPost {

    constructor(info) {
        this.tableName = info.tableName
        this.blogPostId = this.getId(info)
        this.title = info.title
        this.shortContent = info.shortContent
        this.thumbNail = info.thumbNail
        this.mainContent = info.mainContent
        this.lastTimeChanged = info.lastTimeChanged
    }

    getId(info) {
        var id = info.blogPostId
        if (id !== 'undefined' && id !== null) {
            return id
        }
        return uuidv4()
    }

    async createOrUpdate() {
        var params = {
            TableName: this.tableName,
            Item: {
                BlogPostId: this.blogPostId,
                Title: this.title,
                ShortContent: this.shortContent,
                ThumbNail: this.thumbNail,
                MainConent: this.mainContent,
                LastTimeChanged: this.lastTimeChanged
            }
        }

        await documentClient.put(params).promise().then(data => {
            console.log("data:", data)
        }).catch(err => {
            console.log("err:", err)
        })
    }

    async delete() {
        var params = {
            TableName: this.tableName,
            Key: {
                BlogPostId: this.blogPostId
            }
        }
        await documentClient.delete(params).promise().then(data => data)
    }

    async get() {
        var params = {
            TableName: this.tableName,
            Key: {
                BlogPostId: this.blogPostId
            }
        }
        console.log("params:", params)
        var item = await documentClient.get(params).promise().then(data => {
            console.log("data item:", data.Item)
            return data.Item
            })
        return item
    }
}

module.exports = {
    BlogPost
}