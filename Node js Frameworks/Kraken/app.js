const express = require('express');
const kraken = require('kraken-js');

const app = express();

// Kraken middleware setup
app.use(kraken());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Kraken!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
