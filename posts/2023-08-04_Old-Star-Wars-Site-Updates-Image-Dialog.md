---
title: "Old Star Wars Site Updates - Image Dialog"
date: "2023-08-04"
prevArticle: "2023-07-18_Old-Star-Wars-Site-Updates-Left-Menu"
nextArticle: "2023-10-03_Dracula-By-Day"
tags: Star Wars - Website - JavaScript
---

The site has a number of images that I scanned from different sources, mostly the RTÉ Guide. In the old versions of the site I had a simple link to the image which would open the image in a new window or browser tab. Sometimes I would name the target so that it would update when subsequent images were selected. This avoided mutiple windows being opened.

```
<H4>December 2002</H4>
<P><A HREF="rteguide_epiguide.jpg" TARGET="guide">Episode I article</a>
<BR><A HREF="rteguide_quigonpic.jpg" TARGET="guide">Qui-Gon Jinn picture</a></P>
```

I wanted these images to instead open in a dialog. I could never remember what this was called, but I subsequently learned it is called a Lightbox. I first had to create the dialog modal and I was interested in using the `<dialog>` tag instead of using a `<div>`.

```
<dialog id="dialogForImage">
    <header>
        <h1></h1>
        <form>
            <button value="cancel" formmethod="dialog">
                <i class="fa fa-times"></i>
            </button>
        </form>
    </header>
    <article>
        <img id="dialogImg" alt="">
    </article>
    <footer></footer>
</dialog>
```

The dialog is built up using `document.createElement()` JavaScript and could therefore be added to every page on the site.

I then created a helper function to display the dialog with the correct image.

```
function showImage(imgSrc, altText) {
    const dialog = document.getElementById("dialogForImage");
    const dialogImage = document.getElementById("dialogImg");
    const header = document.querySelector('dialog header h1');

    dialogImage.src = imgSrc;
    dialogImage.alt = altText;
    header.textContent = altText;
    dialog.showModal();
}
```

This function takes an image source and the alt text for the image. It then finds the correct elements from the dialog and sets the correct image source, alt text and heading text for the image that is clicked. Finally, it shows the modal to the user.

Each link that opened the image previously was changed to use an `onClick` action instead of the more usual `href` attribute. The `return: false` attribute prevents the browser from navigating to the image that is still selected in `href`.

```
<h2>December 2002</h2>
<p><a href="rteguide_epiguide.jpg" onclick="showImage('rteguide_epiguide.jpg','Episode I article'); return false;">Episode I article</a></p>
<p><a href="rteguide_quigonpic.jpg" onclick="showImage('rteguide_quigonpic.jpg','Qui-Gon Jinn picture'); return false;">Qui-Gon Jinn picture</a></p>
```

It worked out quite well, although there is sometimes a delay in loading the image. This means that if a user selects a lot of images after each other then the previous image will be visible for a split second while the new image loads.

[GitHub Repository](https://github.com/paddyfed/OldStarWarsSite)  
[Deployed Site on Vercel](https://old-star-wars-site.vercel.app/)

Paddy.
