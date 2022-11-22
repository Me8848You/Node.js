const express = require("express");
const app = express();

const dbConnect = require("./dbConnect");

app.use(express.json()); //postman bata aayeko data (i.e json format)  accept garna middleware ma pathako

app.put("/:name", async (req, res) => {
  const db = await dbConnect();
  const result = await db.updateMany(
    {
      name: req.params.name
    },
    {
      $set:req.body
    }
  );

  console.log(result);

  res.send(req.body);
});

app.listen(3002, (err, _) => {
  console.log("Let's have a look on 3000 port. Thank You!!!");
});
