const fs = require("fs")

exports.handler = async function() {
  var data = fs.readFileSync(__dirname + "/data/data.json").toString()
  return {
    statusCode: 200,
    body: data
  }
}