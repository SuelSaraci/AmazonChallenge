
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JjIizKXti6DiA7Jj7ZZuxmvpK7zn0l0llLGAui6MZHRIbj3IZHV3Hgyefv4xhyF04BUCfeGYTsswygqWBtuxr520059GY7msi');
const functions = require("firebase-functions");



const app = express();


app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
        const total = request.query.total;


        const paymentIntent = await stripe.paymentIntents.create({
              amount: total,
              currency: "usd",
        });

        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
});


exports.api = functions.https.onRequest(app)