const swaggerUi = require("swagger-ui-express")
const YAML =  require('yamljs')
const path = require("path");

const specs = YAML.load(path.join(__dirname, '../build/swagger.yaml'))
module.exports = { swaggerUi, specs }