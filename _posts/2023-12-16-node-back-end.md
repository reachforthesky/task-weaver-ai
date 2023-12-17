---
layout: post
title: "Node Back End"
date: 2023-12-16 12:00:00 -0000
categories: [blog]
---

12/16/2023

Finally, I've found some traction again. After watching some tutorials on Node.js I finally managed to give up on youtube tutorials and [let a robot tell me exactly what to do](https://reachforthesky.github.io/task-weaver-ai/assets/blog-content/12-16-2023/Nodejs-API-with-Express.html) to get my API started. Now, I always make a point to try and understand the code that I flagrantly copy-paste into my own projects and what ChatGPT has given me is pretty straight-forward as far as back ends go. I've already "implemented" the code in the output and tested it, and only one line causes an error:
    
    // Log the result of the insertion
    console.log('Inserted document:', result.ops[0]);

changing result.ops[0] to result.insertedId fixes everything. I can now send data to my api and it will be inserted into my database.

I suppose I might as well explain what I'm doing here for those without a programming background. My project, like many web apps, can be divided into three parts; the front end, the back end, and the database. I've already gone over the database, but if you need a refresher, it's basically a big blob of information that can be searched and altered. I'll be working on the front end later, it's basically what the user sees and interacts with, usually a web page or an app interface of some kind. I'm currently building the back end, which is responsible for receiving and responding to requests from the front end. 

If we were talking about Google.com, the front end would be the search bar, the search buttons, and the navigation controls in the upper corners of the page. When you type text into the search bar and hit enter, it packages up your query into something called an HTTP request (think of an envelope sent through the mail system) that the back end then reads and sends back a response, ususally in the form of a list of results. In the case of my app, right now there is no front end, so I'm just sending my API raw data which is then inserted into my database. I still need to implement logic to validate what's being sent so it won't just stuff whatever garbage it receives into the database willy-nilly and create a new request method to retrieve data from my database, but that will be tomorrow's goal.