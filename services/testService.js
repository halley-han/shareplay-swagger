const mybatis = require('../config/mybatis');
const sequelize = require("../config/sequelize");

export async function getTest(param) {
    var selectQuery = mybatis.getStatement(
        "testMapper",
        "testBasic",
        param,
        {language: "sql", indent: "  "}
    );

    let data = [];
    try {
        data = await sequelize.query(selectQuery, {
            type: sequelize.QueryTypes.SELECT
        });
        console.log("data:", data);
        return data;
    } catch (error) {
        console.log(error);
        return;
    }
}