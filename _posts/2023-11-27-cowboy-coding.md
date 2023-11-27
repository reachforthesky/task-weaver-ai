---
layout: post
title: "Cowboy Coding"
date: 2023-11-27 12:00:00 -0000
categories: [blog]
---

11/27/2023

Yesterday I found a very helpful paper about using [agile practices as a solo developer.](https://core.ac.uk/download/pdf/51292464.pdf) In it Ashby Brooks Hollar describes his own invented agile methodology, called Cowboy, specifically created for programmers who are working alone, which he refers to as...cowboys. This is a big deal to me, because agile methods are typically centered around software teams, and involve meetings and processes that are just not relevant to a "team" of one. I could probably make a series of simple adjustments to make these methodologies suitable for a "cowboy" like me but I *really didn't want to* so it's nice that someone else has done it for me.

The use of the term "cowboy" is interesting because it's actually has a negative connotation in software development. It's normally used to encapsulate all of the problematic habits that can arise when you're coding by yourself. If someone is accused of "cowboy coding" it usually means their code is messy, confusing, unoptimized, barely tested and poorly documented. Now I can't speak for everybody, but when I'm coding by myself, for myself I notice two patterns that I believe contribute to this reputation.

First off, I'm much more likely to put off good practices like writing thorough tests and comments because I'm not worried about my bad habits being exposed and criticized. When I write code I know a senior dev will end up reviewing I instinctively try to look at my own work through the lens of someone more invested in the quality of my code. I believe this bad habit can be overcome by becoming conscious of it.

The second pattern is much more difficult to shake. When I'm coding, whatever I'm working on at the moment may make perfect sense to me at the time of writing, but when I submit it for review, I often get feedback that it's too confusing from someone much more experienced than I. Sometimes I even go back to my own work only to find that it's borderline unintelligible and I have to spend a significant amount of time relearning how it's supposed to function.

I think that, when we as humans create something meant to communicate something to others, whether it's a code block that needs to be understood by another programmer, or a paragraph of text meant to convey a message to its reader, our minds hold the "payload" of information that is ultimately meant for another human to comprehend. When we're processing out own work, our mind is unconsciously filling in gaps and making mental connections that may be left out of whatever we're creating. It passes our internal "comprehensibility tests" and we send it off into the world, but anyone who doesn't already understand what you're communicating is going to remain completely in the dark. After your mind has forgotten the "payload", you'll likely be in the same boat.

This is the limitation of Cowboy coding that is the most difficult to overcome. Just like a writer might have difficulty being their own editor, a coder will struggle to be their own reviewer, and this is a problem that can actually get *worse* the more experienced you are.

Ugh, yesterday I said I would come up with a user story but all I've done is write about the struggles of solo-coding. So here's a user story and totally not a parachute to bail myself out of a personal commitment:

>"As a user, I would like to input a projects core purpose, and be prompted to input its subtasks"

There, the absolutely bare minimum amount of work to satisfy the goal I set yesterday. Tomorrow I'll definitely talk about what a user story is and what we do with it.