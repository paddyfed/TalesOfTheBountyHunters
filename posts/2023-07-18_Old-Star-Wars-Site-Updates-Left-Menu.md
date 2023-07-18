---
title: "Old Star Wars Site Updates - Left Menu"
date: "2023-07-18"
prevArticle: '2023-07-06_Old-Star-Wars-Site-Updates'
nextArticle: ''
tags: Star Wars - Website - JavaScript
---
The next part of the site that I tackled was the menu on the left hand side of the site. The original implementation used a JavaScript file to ```document.write()``` the urls of each page of the site. I did it this way becaue, back in the day, there was no easy way to create reusable code on multiple pages. So the original way to add the menu to each page was to copy and paste to each HTML file. This meant that each change to the menu needed to be updated on each HTML file. The JavaScript file (originally called left.js) was a way to add the menu items to each page but to have one place to make any updates.

```
// LEFT MENU

document.write('<img src="men_men.gif" width="150" height="30" border="0" alt="Menu">');
document.write('<a href="main.html"><img src="men_main.gif" width="150" height="15" border="0" alt="Main"></a>');
document.write('<a href="member.html"><img src="men_mem.gif" width="150" height="15" border="0" alt="Members"></a>');
document.write('<a href="join.html"><img src="men_join.gif" width="150" height="15" border="0" alt="Join"></a>');
document.write('<a href="edit.html"><img src="men_edit.gif" width="150" height="15" border="0" alt="Editorial"></a>');
...
```

Using ```document.write()``` meant I needed to have the file added to the correct position on the HTML file. Each menu item was also using a GIF image to display the menu text. I'm not really sure why I used images for the menu, probably to get a specific font or to have a hover over effect, though that doesn't seem to have been implemented.

The first thing I did was to create a new JavaScript file and to update the references to the file on each HTML page. I was able to add the new reference to the head of each page as I was going to be using query selectors to position the menu items instead.
```
const menu = document.querySelector('#menu');
```
I then added each of the menu items to an array of objects, with the url of the page and the text of the link in each object.
```
const menuItems = [
    { url: 'index.html', linkText: 'Main' },
    { url: 'member.html', linkText: 'Members' },
    { url: 'join.html', linkText: 'Join' },
    { url: 'editorials.html', linkText: 'Editorial' },
    ...
]
```
The script then loops through the array and for each object it creates an anchor tag with the url as the HREF attribute and the text as the link text. It then appends the link to a list item and then appends the list item to an unordered list.
```
let menuUl = document.createElement('ul');

menuItems.forEach(element => {
    let a = document.createElement('a');
    a.href = element.url;
    a.textContent = element.linkText;
    let li = document.createElement('li');
    li.appendChild(a);
    menuUl.appendChild(li);
});
```
Finally we add a menu heading and append this and the unordered list to the HTML tag that has an id of #menu which was defined by the query selector at the beginning.
```
const menuHeading = document.createElement('h1');
menuHeading.textContent = "Menu";

menu.appendChild(menuHeading);
menu.appendChild(menuUl);
```
Now if I want to add or modify any menu items I only need to update the items in the array. This came in handy as I changed the filename of the Editorial section (it was originally called edit.html) so I only needed to update that array entry to have the link updated on each page.

[GitHub Repository](https://github.com/paddyfed/OldStarWarsSite)  
[Deployed Site on Vercel](https://old-star-wars-site.vercel.app/)

Paddy.