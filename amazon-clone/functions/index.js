const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KMQsRECN8owME30Nyfj6RRurjGflKIOdur4slJt5J7TSUdKLTq92c3gtLnvetBKrlSIbnWoAVMyjfRfkwogKEjg00KtP7Vy4s');

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));


app.post("/payments/create", async (request, response) => {
   const total = request.query.total;

   console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

   const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunit of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-fbaf4/us-central1/api

