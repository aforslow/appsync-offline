const {getInfo} = require('./utils')
const utils = require('./utils')
const {BlogPost} = require('../BlogPost')
var info = {"info": "info"}
var blogPost = new BlogPost(info)
console.log("getInfo:", utils.getInfo)
console.log("get info res:", utils.getInfo(info))
console.log("inside test")
console.log(getInfo(info))