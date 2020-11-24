const fs = require("fs")
const strip = require("strip-comments")
const prettier = require("prettier")
var glob = require("glob")

try {
  glob("**/*.js", { ignore: "**/node_modules/**" }, function (error, files) {
    files.forEach((element) => {
      var file = fs.openSync(element, "r+")
      var data = fs.readFileSync(file, "utf8")
      const str = strip(data)
      const pretty = prettier.format(str, { semi: false, parser: "babel" })
      fs.writeFileSync(element, pretty)
    })
  })
} catch (error) {
  console.log(error)
}
