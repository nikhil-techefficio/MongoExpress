// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser'); // Optional, uncomment if needed
// require('dotenv').config(); // Load environment variables
// const connectDB = require('./db');
// const User = require('./models');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // CORS middleware (optional)
// app.use(cors());

// // Body parser middleware (optional)
// app.use(bodyParser.json()); // Parse JSON request bodies

// // Your Express API routes will go here

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/niki', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Define a schema and model for your Test1 collection
const test1Schema = new mongoose.Schema({}, { collection: 'Test1' });
const Test1 = mongoose.model('Test1', test1Schema);

// Define a route to get data from the Test1 collection
app.get('/api/test1', async (req, res) => {
  try {
    const data = await Test1.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
