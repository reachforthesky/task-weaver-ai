const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/TaskRoutes');

const app = express();
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000' // Allow your frontend origin
}));

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', taskRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});