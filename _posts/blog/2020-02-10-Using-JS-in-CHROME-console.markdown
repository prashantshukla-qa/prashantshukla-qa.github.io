---
layout: post
title:  "Using JS in chrome developer tools"
date:   2020-02-10 23:15:00 +0530
categories: blog
---

Console `Javascript` comes in very handy while doing quick manipulation of HTML or extracting data from a web page we are testing. I am writing this listicle of tips and tricks I use get some assistance while testing web applications

##### Using JS to get text of multiple elements

_Example: Getting count or text of gooogle home page result table_

![google page](/assets/img/blog-images/google-table-result.png){:height="50%" width="50%"}

Use following js snippet to get size or text content of the component

{% highlight javascript %}
$$('table.nrgt .l').map(e=>e.innerText)
{% endhighlight %}