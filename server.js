//ENV
require('dotenv').config();

//APP Config
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT

//TEST AUTO DEPLOY

// Middleware to parse JSON bodies
app.use(express.json());

//Middleware to use cors
app.use(cors());


// Import the routes
const authRoutes = require('./routes/auth');
const webhookRoute = require('./routes/webhookRoutes');

// Use the imported routes with their respective base paths
app.use('/auth', authRoutes);
app.use(webhookRoute);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
