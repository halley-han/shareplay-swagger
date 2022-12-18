const express = require('express');
const router = express.Router();

const testService = require('../services/testService');


router.get("/", async (req, res) => {
  const data = {
    "UUID": "010 222 111",
      "targetUUID": "123 123 123",
      "nickname": "유병권",
      "regdate": "2022-03-22T12:11:00.000Z",
      "agreedate": "2022-03-22T12:11:00.000Z",
      "status": "P"
  };

  let arr = Array();
  for(let i=0;i<5;i++){
    arr.push(data);
  }
  res.status(200);

  res.json(arr);
});
router.post("/", async (req, res) => {

  res.status(200);
  res.json(req.body);
});
router.patch("/", async (req, res) => {
  res.status(200);
  res.json(req.body);
});
router.delete("/", async (req, res) => {
  res.status(200);
  res.json(req.body);
});

module.exports = router;
