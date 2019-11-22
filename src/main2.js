const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const port = 3040;
const { sleep } = require("./task");

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.use(cors());
  app.use(bodyparser.json());

  app.post("/", (req, res) => {
    const [nbr1, nbr2] = req.body.numbers;
    sleep(5000);
    res.json({
      value: nbr1 + nbr2
    });
  });

  app.listen(port, () => console.log(`app listening on port ${port}!`));
}
