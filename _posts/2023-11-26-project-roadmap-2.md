---
layout: post
title: "Project Roadmap Pt. 2"
date: 2023-11-26 12:00:00 -0000
categories: [blog]
---
11/26/2023

Yesterday I spent an inordinate amount of time getting ChatGPT to output a rough mockery of information that could have easily been found with a google search. After a good night's sleep I've started to rethink my strategy a bit. This is my current process for using generative AI to map out my plan of attack, that I'm hoping to automate with this project:

    1. Give the AI something like a mission statement or core purpose of a project and ask for steps to complete it.
    2. Request that it elaborate on individual steps, breaking them down into substeps
    3. Repeat step 2 until you have a complete task tree with all "leaves" (the substeps at the very end of a branch that are not broken down further) being completeable somewhere between 30 minutes and two hours.

For instance, if I wanted to create a task tree from something like "Make Spaghetti" I would want to the final product to look something like this:

![Made with draw.io](https://reachforthesky.github.io/task-weaver-ai/assets/blog-content/11-26-2023/Spaghetti.png)

Now, ChatGPT could easily produce something like this in text format (no idea if it could generate a diagram by iself with DALL-E) but even though it can create a plan, would it necessarily be a *good* plan? I learned yesterday that for any kind of complex project, the answer is no, not without giving it a little more to work with. If you ask it to plan the development of some software project, it'll give you an output that you might get from a pretty smart person who knows a bit about software dev, but it will be quite removed from industry best practices. Even if you tell it to use a specific methodology, like Scrum, its output is just not consistent enough to reliably use without basically knowing what you're doing already, defeating the whole purpose. As a test, I repeatedly asked ChatGPT to give me "An Agile lifecycle". Not only were the answers different from reality, they were different *from each other*. The order and number of phases, plus how they were split and grouped up was different from output to output.

I need to narrow my scope for now. I need to create a prompt that will reliably give me a usable (not perfect) Agile lifecycle for a sofware project as its output. If you don't know what "Agile" or "Scrum" is, for now all you need to know is that these are terms refering to the methods many software teams use to structure their development. I'm going to give ChatGPT the format I want its output to look like, in this case I'm going to give it the six most widely accepted phases of Agile development, and ask it for an estimate for how much time it will take each one to complete.

[The results are an improvement.](https://reachforthesky.github.io/task-weaver-ai/assets/blog-content/11-26-2023/Solo-Agile-AI-Tool.html) The time estimates are completely ridiculous for a solo project, but I like most of the content. Based on the output I have a feeling that ChatGPT is "assuming" that I'm trying to release a professional product, so I'm going to modify my prompt to mention that this is a personal project. 
