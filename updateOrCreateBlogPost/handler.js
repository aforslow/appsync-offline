const {BlogPost} = require('../BlogPost')
const utils = require('./utils')

exports.updateOrCreateBlogPost = async (event, context, callback) => {
    console.log("event:", JSON.stringify(event))
    var body = utils.getBody(event)
    var info = utils.getInfo(body)
    console.log("info:", info)
    var blogPost = new BlogPost(info)
    await blogPost.createOrUpdate()
}