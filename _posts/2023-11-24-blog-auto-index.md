---
layout: post
title: "Automatic Blog Index"
date: 2023-11-24 12:00:00 -0000
categories: [blog]
---

11/24/2023

I'm not really a big fan of "work", and I hate repetitive work the most. Who's got the time to add a whole line of markup to my blog index *every single day*? 

this is what my blog.md file looks like right now. It's even in a [code block!](https://chat.openai.com/share/29ceb38a-fdc5-46f3-8f47-5f4fc80de1cd)

    # Blog

    - [My First Blog Post](./_posts/2023-11-21-my-first-blog-post.md)
    - [My Second Blog Post](./_posts/2023-11-22-my-second-blog-post.md)
    - [Happy Thankgiving!](./_posts/2023-11-23-happy-thanksgiving.md)

Let's [replace that with a loop.](https://chat.openai.com/share/29639709-635a-49de-9402-b831ac0bfd52)

    # Blog

    {% for post in site.posts %}
      - [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
    {% endfor %}

ChatGPT is extra helpful here because I have no intention of learning Jekyll/Liquid syntax. I'm already starting to rub up against the limitations of Github Pages and could see myself migrating this blog to something a bit more purpose-built. That being said, I'm pretty happy with the state of the blog for now, I think I'll leave it alone for awhile. Tomorrow I'll actually get started on the project.