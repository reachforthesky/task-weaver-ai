const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection string (replace with your actual connection string)
const mongoURI = 'mongodb://localhost:27017';

// Basic data validation function
async function validateData(data, tasks) {
    var validParent;
    if(!data.parent){
        data.parent = null;
        validParent = true;
    }
    else
        validParent = await tasks.findOne({ _id: new ObjectId(data.parent) });
    const valid = data && data.name  && data.completed && validParent;
    return valid;
}


// POST request handler
app.post('/api/tasks/postData', async (req, res) => {
  // Access the posted data from the request body
  const postData = req.body;

  // MongoDB logic to insert a document
  try {
    const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('local'); // Replace with your actual database name
    const collection = db.collection('tasks'); // Replace with your actual collection name

    
    if(!(await validateData(postData, collection)))
      throw new Error("Invalid data");
    // Insert the document into the collection
    const result = await collection.insertOne(postData);

    // Log the result of the insertion
    console.log('Inserted document:', result.insertedId);

    // Send a response back to the client
    res.json({ message: 'Data received and inserted successfully!' });

    // Close the MongoDB connection
    await client.close();
  } catch (error) {
    console.error('Error inserting document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});