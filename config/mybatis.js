/* mybatis $ npm i mybatis-mapper */
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['./mapper/test.xml'])

module.exports = mybatisMapper;