const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const hospitalCollection = client.db("hospitalDB").collection("hospitals");

    // get all hospitals
    app.get("/hospitals", async (req, res) => {
      const page = req.query.page;
      const mylimit = req.query.limit;
      const query = {};
      const hospitals = await hospitalCollection
        .find(query)
        .skip(parseInt(page * mylimit))
        .limit(parseInt(mylimit))
        .toArray();
      const count = await hospitalCollection.countDocuments(query);
      res.send({ count, hospitals });
    });
  } finally {
  }
}

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
