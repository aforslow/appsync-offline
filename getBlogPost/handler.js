const {BlogPost} = require('../BlogPost')
const utils = require('../utils')
const logic = require('./logic')

module.exports.getBlogPost = async (event, context, callback) => {
    console.log("event:", JSON.stringify(event))
    // var body = utils.getQueryStringParams(event)
    // console.log("body:", body)
    var info = await utils.getQueryStringParams(event)
    console.log("info:", info)
    var blogPost = new BlogPost(info)
    console.log("blogpost:", blogPost)
    try {
        var blogPostResp = await blogPost.get()
        console.log("blog post resp:", blogPostResp)
        await callback(null, JSON.stringify(blogPostResp))
    } catch (err) {
        callback(err, null)
    }
}