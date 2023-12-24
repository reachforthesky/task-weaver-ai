---
layout: post
title: "Rounding out API requests"
date: 2023-12-22 12:00:00 -0000
categories: [blog]
---

12/22/2023

I've been travelling so I haven't had time to provide many updates before tonight, but I finally managed to sit down and make a bit of progress for the first time in a few days. Here's what I've accomplished;

1. Model/Repository level validation

    I added a bit more validation to the Task schema, made the "completed" and "description" fields required and added a maximum character length to the "name" and "description" field. I also added a check in the repository "add task" function to check the parent ID of a task, if provided in the request, to see if it exists in the collection, so you can't create an "orphan" subtask that belongs to a nonexistent parent task.

2. "Add Task" refactor

    I merged the "add subtask" functionality into the "add task" function. Now there's no separate post request to add a subtask, the "add task" request now includes logic to handle tasks with a valid parent ID.

3. Added new request to get all top level tasks

    I know it's not necessarily best practice to create a bunch of API requests with really specific functionality but it's what I'm used to. I can always change it to a more standard RESTful/CRUD API down the road if it becomes unweildy.

