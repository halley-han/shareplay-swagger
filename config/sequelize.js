const path = require("path");
const Sequelize = require("sequelize");
const mybatisMapper = require("mybatis-mapper");
const envType = process.env.ENV ? process.env.ENV : "dev";
const version = process.env.VERSION ? process.env.VERSION : "base";

// DB connection 정보
const sequelize = new Sequelize('test', 'root', 'skyblue12#', {
    host: 'tosky.co.kr',
    dialect: 'mysql'
} );

const sqlPath = path.join(__dirname, "..", ".", `/mapper/`);

mybatisMapper.createMapper([`${sqlPath}/test.xml`]);

const init = async function(req, res, next) {
    req.envType = envType;
    req.sequelize = sequelize;
    req.mybatisMapper = mybatisMapper;

    next();
};

module.exports = sequelize;