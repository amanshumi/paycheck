//ENV
require('dotenv').config();

//APP Config
const express = require('express');
const app = express();
const port = process.env.PORT


// Middleware to parse JSON bodies
app.use(express.json());


// Import the routes
const authRoutes = require('./routes/auth');

// Use the imported routes with their respective base paths
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
