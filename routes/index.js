var express = require('express');
var router = express.Router();

const testService = require('../services/testService');


router.get("/get/:id", async (req, res) => {
  if (!req.params || !req.params.id) {
    res.status(403).send({ msg: "잘못된 파라미터입니다." });
    return;
  }
  const selectParams = {
    id: req.params.id
  };
  let data = await testService.getTest(selectParams);

  if (data.length == 0) {
    res.status(403).send({ msg: "정보가 없습니다." });
    return;
  }
  res.json({
    msg: "selecting test case",
    user: data.map(x => {
      return x;
    })[0]
  });
});
module.exports = router;
