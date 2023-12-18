---
layout: post
title: "Validation"
date: 2023-12-16 12:00:00 -0000
categories: [blog]
---

12/17/2023

Today I didn't really accomplish much, basically just added a validation step to my API's Post method. It looks like this

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

Validation means we're checking the data sent to us in the HTTP request to make sure it's valid according to both the technical requirements and our business logic. All this function does is check the parent field to see if the provided parent id (if there is one) matches the id of another task in the database, and then check to see if the data provided contains a field for the name and completion status. If it fails these checks, the row (or document, as it's called in MongoDB terms) is not inserted into the database. If I was more of a go-getter, I would check the data to make sure it was the correct type and length but I'm still working out the requirements for what constitutes "good data". At some point I should probably find some way to ensure the submitted data doesn't contain more fields than what should be expected, but since I'm the only one that can send requests to the API for now I'll just assume I'm not going to send anything that will irreversibly corrupt my database (famous last words). 

For some reason VS Code is telling me that it has to be asynchronus (a topic for another day) because of the "await" keyword, but I'm no Javascript expert so I'm not going to rock the boat on this one. This function is not very "clean" but it works so I'm going to leave it alone for tonight. Tomorrow's goal will be to create a "GET" HTTP request method, which will allow me to fetch data on the database as opposed to just inserting new documents.