const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const port = 3040;
const { sleep, addition, multiplication } = require("./task");

app.use(cors());
app.use(bodyparser.json());

app.post("/addition", (req, res) => {
  const [nbr1, nbr2] = req.body.numbers;
  sleep(5000);
  res.json({
    value: addition(nbr1, nbr2)
  });
});

app.post("/multiplication", (req, res) => {
  const [nbr1, nbr2] = req.body.numbers;
  sleep(5000);
  res.json({
    value: multiplication(nbr1, nbr2)
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
