const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(authHeader);
  if (!authHeader) {
    return res.status(401).send({ error: 401, message: "Unauthorized Access" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: 403, message: "Forbidded Access" });
    }
    req.decoded = decoded;
    next();
  });
};

async function run() {
  try {
    const hospitalCollection = client.db("hospitalDB").collection("hospitals");
    const usersCollection = client.db("hospitalDB").collection("users");
    const plansCollection = client.db("hospitalDB").collection("plans");
    const ordersCollection = client.db("hospitalDB").collection("orders");
    const paymentsCollection = client.db("hospitalDB").collection("payments");
    const doctorsCollection = client.db("hospitalDB").collection("doctors");

    // verify admin
    const verifyAdmin = async (req, res, next) => {
      const decodedEmail = req.decoded.email;
      const query = { email: decodedEmail };
      const user = await usersCollection.findOne(query);
      if (user?.role !== "admin") {
        return res
          .status(403)
          .send({ error: 403, message: "forbidden access" });
      }
      next();
    };

    // create payment intent
    app.post("/create-payment-intent", async (req, res) => {
      const plan = req.body;
      const price = plan.price;
      const amount = price * 100;
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount: amount,
        payment_method_types: ["card"],
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    // payments
    app.post("/payments", verifyJWT, async (req, res) => {
      const payment = req.body;
      const result = await paymentsCollection.insertOne(payment);
      const id = payment.planId;
      const filter = { _id: ObjectId(id) };
      const updatedOrderDoc = {
        $set: {
          paid: true,
          transactionId: payment.transactionId,
        },
      };
      // eslint-disable-next-line no-unused-vars
      const updateOrder = await ordersCollection.updateOne(
        filter,
        updatedOrderDoc,
        { upsert: true }
      );
      res.send(result);
    });

    // add a doctor
    app.post("/doctors", verifyJWT, verifyAdmin, async (req, res) => {
      const doctor = req.body;
      const result = await doctorsCollection.insertOne(doctor);
      res.send(result);
    });

    // get all doctors
    app.get("/doctors", verifyJWT, verifyAdmin, async (req, res) => {
      const doctors = await doctorsCollection.find({}).toArray();
      res.send(doctors);
    });

    // delete a doctor
    app.delete("/doctors/:id", verifyJWT, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await doctorsCollection.deleteOne(query);
      res.send(result);
    });

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

    // add a hospital
    app.post("/hospitals", verifyJWT, verifyAdmin, async (req, res) => {
      const hospital = req.body;
      const result = await hospitalCollection.insertOne(hospital);
      res.send(result);
    });

    // get all plans
    app.get("/plans", async (req, res) => {
      const plan = req.query.plan;
      const query = {};
      const plans = await plansCollection.find(query).toArray();
      const monthly = plans.filter((ursplan) => ursplan.monthly === plan);
      const yearly = plans.filter((ursplan) => ursplan.yearly === plan);
      if (monthly.length > 0) {
        return res.status(200).send(monthly);
      } else if (yearly.length > 0) {
        return res.status(200).send(yearly);
      } else {
        return res.status(404).send({ message: "plan not found" });
      }
    });

    // post a order
    app.post("/orders", verifyJWT, async (req, res) => {
      const booking = req.body;
      const result = await ordersCollection.insertOne(booking);
      res.send(result);
    });

    // get all order for specific email
    app.get("/orders", verifyJWT, async (req, res) => {
      const email = req.query.email;
      const decodedEmail = req.decoded.email;
      if (decodedEmail !== email) {
        return res
          .status(403)
          .send({ error: 403, message: "Forbidden Access" });
      }
      const query = { email: email };
      const result = await ordersCollection.find(query).toArray();
      res.send(result);
    });

    // jwt
    app.get("/jwt", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      if (user) {
        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
          expiresIn: "5d",
        });
        return res.send({ accessToken: token });
      }
      res.status(403).send({ accessToken: "" });
    });

    // get all users for admin
    app.get("/users", verifyJWT, verifyAdmin, async (req, res) => {
      const query = {};
      const users = await usersCollection.find(query).toArray();
      res.send(users);
    });

    // delete a user
    app.delete("/users/:email", verifyJWT, verifyAdmin, async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    // add a user
    app.put("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await usersCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // check admin
    app.get("/users/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      res.send({ isAdmin: user?.role === "admin" });
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
