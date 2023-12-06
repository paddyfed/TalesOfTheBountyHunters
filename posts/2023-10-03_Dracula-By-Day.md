---
title: "Dracula by Day"
date: "2023-10-03"
prevArticle: "2023-10-01_Solar-Update-September-2023"
nextArticle: "2023-11-01_Solar-Update-October-2023"
tags: Website - JavaScript
---

I recently listened to an abriged version of Dracula as an audio book. I knew that it was a book that was written like a journal but I hadn't realised that the whole book was like that. Nor did I ever realise that some of the events are placed out of sequence. So I wanted to see what the book would be like if you read each entry day by day.

I started a new Next.js app to get it working, which also allowed me to try to learn what an app would be like with a JSON file as the data source. There must have been a new version of Next.js released since I started this site and the dracula site because insted of using page routers, it was now using the app router.

The site has an API with the JSON as the data source which brings back the latest journal entries or letter entries from that date. The main page shows the latest entries for the current date and there are navigations for the previous and next entries in case you want to scroll through them all. Links at the top of the page look at the different sources for the entires and the different types of sources.

Some entries have been styled based on their type. Newspaper cuttings are styled like a newspaper, letters are styled with handwriting, Telegrams are styled like short telegram notes and memorandum entries are styled like they were made on a typewriter.

[Dracula By Day](https://dracula-by-day.vercel.app/)  
[GitHub Repository](https://github.com/paddyfed/dracula-by-day)

While looking to see if someone had already made a Dracula API, I found a very similar site [Dracula Daily](https://draculadaily.substack.com/) where the events are sent to your email every day. When I found it I thought, this has already been done, why should I bother continuing. But thankfully I realised that if nothing else this would be a learning exercise. It's not like I'm looking to do anything major with the idea except learn a few more things about Next.js and React so I'm glad I continued.

Paddy.
