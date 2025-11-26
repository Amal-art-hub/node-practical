//////////////////////////////////////////////////////path param and path query
const express = require("express");

const app = express();

function validate(req, res, next) {
  const { num1, num2 } = req.query;

  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "apply numbers" });
  }
  next();
}

app.get("/data", validate, (req, res) => {
  const { num1, num2 } = req.query;

  let num3 = Number(num1);
  let num4 = Number(num2);

  let result = num4 / num3;
  res.json({ output: result });
});

app.listen(3000, () => {
  console.log("running on 3000");
});
