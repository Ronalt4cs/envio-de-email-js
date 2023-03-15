const fs = require('fs/promises')
const handlebars = require('handlebars')

const compilerHtml = async (arq, context) => {
  const html = await fs.readFile(arq)

  const compiler = handlebars.compile(html.toString())

  return compiler(context)
}

module.exports = {
  compilerHtml
}