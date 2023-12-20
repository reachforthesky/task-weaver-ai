---
layout: post
title: "Design Patterns"
date: 2023-12-19 12:00:00 -0000
categories: [blog]
---

12/19/2023

So now I have a shiny new project structure that keeps things nice and organized. Unfortunately, it required a bit of backtracking and now we've lost a bit of validation logic. The good news is, there's a bit of validation inherent in our new structure. Before we get into that, let's talk design patterns.

When you're working on big software projects, you tend to run into some problems or requirements frequently. Some of these issues are so universal that the industry collectively nominated some clever ways of dealing with them, and these oft-reused methods are called design patterns. It's a little tricky to describe what a "design pattern" is so let me instead provide you with a couple of examples from our project.

In our project, our tasks are stored in our database, on a server. They are added and viewed by users from client machines. For some good reasons I'm not going to get into right now, you don't want to expose direct access to your database to your users. To handle this scenario, we use two design patterns called MVC, or Model-View-Controller, and Repository.

Model-View-Controller describes three layers involved in accessing and updating data by users. There's the View, which is what the user sees and interacts with, the Model, which is a representation of data, and the Controller, which facilitates communication between the other two layers. Users request data with some UI element in the View, which sends a request to the Controller, which responds with data drawn from the Model, and updates the View. The user can submit changes from the View, which the Controller uses to update the Model. If that makes your head spin, you're in good company. I probably had to take three or four whacks at implementing this pattern in my work before I truly understood it (I hope.)

Then there's Repository. The Repository is responsible for querying the data from a database and converting it into an object that conforms to a Model, and updating the database when the Model is changed by a valid user request. I consider it a kind of unofficial fourth layer of MVC.

The reason I'm explaining all this on a blog post about validation, is that in our project (At this point created almost entirely by an AI) some validation logic is already implemented in the Task Model. Check out this code in models/Task.js:

    const TaskSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: String,
        completed: {
            type: Boolean,
            required: true
        },
        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    });

This code describes the "Schema" or structure of our data. Every document in the Task collection of our database should conform to this schema, they should each have a name, an optional description, a true or false value representing whether the task is marked completed, and an optional "parentId" value if the task is a subtask. If a document does not have a parent ID, we'll just assume it represents a top-level task. Notice each field describes the type of variable the field contains, and some are designated as required. Tomorrow I'm going to update this model to contain more validation logic as well as implementing so validation in the repository layer. Yes, I've been falling short of my goals like crazy lately, but I didn't expect to info-dump about design patterns today so I officially absolve myself of failure.