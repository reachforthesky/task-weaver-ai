# Blog
All Posts

{% for post in site.posts %}
  - [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
{% endfor %}