---
layout: post
title:  "A JS trick to get element array count and text"
date:   2020-02-10 23:15:00 +0530
categories: blog
description: A neat JS trick to count the array of elements satisfying a css selector. Usefull in cases where one wants to check text options in a dropdown for example.
image: "/assets/header_main.png"  
author: Prashant Shukla
---

Console `Javascript` comes in very handy while doing quick manipulation of HTML or extracting data from a web page we are testing. I am writing this little trick I use get some assistance while testing web applications

##### Using JS to get text of multiple elements

_Example: Getting count or text of gooogle home page result table_

Use following js snippet to get size or text content of the component in the chrome dev tool

`$$('table.nrgt .l').map(e=>e.innerText)`

<a href="/assets/img/blog-images/google-table-result.png" data-lightbox="js-example-1">
    <img src="/assets/img/blog-images/google-table-result.png" alt="Example of element count on Google" style="width:40%">
<a>

##### Explanation

* `$$` in console returns array of elements based on css provided
  * e.g. `$$('table.nrgt')` returns all the elements with tag table and class nrgt
  * `$x` returns elements with provided xpath
  * single `$` returns the first element satisfying the css selector criteria
