---
title: "Old Star Wars Site Updates"
date: "2023-07-06"
prevArticle: '2022-10-15_tweet-2022-10-15-07-20-05'
nextArticle: '2023-07-18_Old-Star-Wars-Site-Updates-Left-Menu'
tags: Star Wars - Website - JavaScript
---
Recently I have been looking at some old websites that I created back in the day and see how I might actually update them. The first I looked at in any detail was an old Star Wars site that I created between 2000 and 2003. It was a site specifically for Irish fans of Star Wars to join. I also had some Trivia competitions and polls and there was a chat applet at one stage too. It was reasonably successful in that we did get a few members and good traffic. The site was basic HTML using tables for layouts which was common at the time. It also used extensive spacer gifs and gifs to get round corners on the site. There was very little use of CSS but I did use JavaScript to display the nav menu and the areas of the site that were needed on each page.

One of the first things I changed was a JavaScript file which output some Yoda quotes, as Yoda was the mascot of the site.

The original version used an array to hold each quote.
```
//store the quotations in arrays
quotes = new Array(34);
quotes[0] = "May the force be with you.";
quotes[1] = "No! No different! Only different in your mind.";
quotes[2] = "Hard to see, the dark side is.";
quotes[3] = "When nine hundred years old you reach, look as good you will not. Hmm?";
quotes[4] = "Mudhole? Slimy? My home this is.";
quotes[5] = "No! Try not. Do. Or do not. There is no try.";
...
```
And it would pick a random quote and display it each time the site or page was refreshed.
```
//calculate a random index
index = Math.floor(Math.random() * quotes.length);
//display the quotation
document.write("" + "\"" + quotes[index] + "\"\n");
```
You can see that the way the quote was output was by using a `document.write` method which means this quotes file needed to be in the correct position in the HTML structure of the page to show the quote in the position that I wanted. The Array also had each quote specifically numbered. I don't now rememebr if that was required or if I just didn't know how to work with arrays. I do know that back then I did get a lot of scripts from online resources so it might just have been how this was implemented in the examples I found on the web.

I changed the way the Array was implemented first by creating an empty array and then using the `array.push` method to add each quote.
```
const quotes = []
quotes.push("May the force be with you.");
quotes.push("No! No different! Only different in your mind.");
quotes.push("Hard to see, the dark side is.");
quotes.push("When nine hundred years old you reach, look as good you will not. Hmm?");
quotes.push("Mudhole? Slimy? My home this is.");
quotes.push("No! Try not. Do. Or do not. There is no try.");
...
```
This means I did not have to number each quote individually and would be easier to add or remove quotes as needed.

Displaying the quote also changed. Now I was using a `document.querySelector` to find where I had added the `main` tag for the site. Then I created a paragraph element and made the `textContent` of that paragraph into the quote with the random index.
```
const mainSection = document.querySelector('main');
const pQuote = document.createElement('p');
pQuote.textContent = `"${quotes[index]}"`;
```
Finally I used the `prepend` option to add the paragraph to the beginning of the `main` tag. This means the quote would appear at the top of each `main` section and I could move the .js file to the head of the HTML.
```
mainSection.prepend(pQuote);
```
After a while I realised that I was getting some errors on this code in specific pages of the site. I soon realised that if the page did not have a `main` section then the `querySelector` was failing. So I added a check at the beginning of the code for the `main` section. It was only affecting those pages that I had not updated yeat but there was no harm in doing the check anyway.
```
if (document.querySelector('main')) {
...
}
```
I hope to add further posts on changes that I made to this site so stay tuned.

[GitHub Repository](https://github.com/paddyfed/OldStarWarsSite)  
[Deployed Site on Vercel](https://old-star-wars-site.vercel.app/)

Paddy.