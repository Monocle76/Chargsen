const fs = require("fs")
const { join } = require("path")

exports.handler = async function(event, context) {
  var fileDir = join(__dirname, "/data/data.json");
  var data = fs.readFileSync(fileDir).toString()
  if (event.httpMethod === "POST") {
    var newData = [...JSON.parse(data), JSON.parse(event.body)]
    fs.writeFileSync(fileDir, JSON.stringify(newData))
    return {
      statusCode: 200,
      body: JSON.stringify(newData)
    }
  } else if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: data
    }
  }
}