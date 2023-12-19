---
layout: post
title: "Re-examining My Project Structure"
date: 2023-12-18 12:00:00 -0000
categories: [blog]
---

12/18/2023

It's almost impressive how little progress I can make before finding fault with what I've created. So far my only accomplishments have been creating the world's simplest and smallest database and an API controller with a single HTTP request method, the latter of which already requires changes.

This is a good thing really. In agile programming you want to "fail fast" as opposed to allowing fundamental problems to fester and corrupt your project as you build on top of them. I have big plans for this project and I owe it to myself to build it on a strong foundation.

So let's talk project structure. As a professional programmer, I've had some success when this is spelled out for me, and abysmal failure in the instances where I've had to forge my own path. Now that I have some experience under my belt, I'm going to make the bold decision to design my project exactly the same way as my work's .NET project and deviate from what I'm familiar with as little as possible. That means I'll be using two design patterns, MVC and Repository, both of which I will explain in future blog posts.

Organized, scalable code usually means quite a bit of tedium. Whereas my back end thus far has been one big hodge-podge of a javascript file that looks like this:

<details>

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
</details>


For the non-programmers reading this, let me assure you, this is pretty rough, and it scales poorly. The functionality in this file *should* be divided into multiple files spanning different folders. This can be a bit of a pain at first, but maybe it doesn't have to be. I just upgraded my OpenAI account to ChatGPT Plus, let's see if ChatGPT 4 can [help me out.](https://reachforthesky.github.io/task-weaver-ai/assets/blog-content/12-18-2023/MERN-Project-Structure-MVC-&-Repository.html) 

I would consider that response outstanding. Like most code snippets I've gotten from ChatGPT it needs a bit of tweaking but this represents less than a minute of effort to get basically exactly what I need. Sure it's basically just a template for a fairly basic project but here OpenAI outperformed what would likely be hours of researching on Google and Youtube. I always struggle getting started properly on projects like this because of how much work is required before my code even compiles, so a tool that can help me get over that hump is huge. I may have fallen short of my goal, and lost the progress I made on validation, but that's a small price to pay for the degree of organization these changes provide. Tomorrow I'll try to re-implement validation and maybe take a crack at my original goal for today, implementing "read" functionality for my back end.