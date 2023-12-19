const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/TaskRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', taskRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});