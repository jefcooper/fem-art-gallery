# Frontend Mentor - Art gallery website solution

This is a solution to the [Art gallery website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/art-gallery-website-yVdrZlxyA). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- **Bonus**: Use [Leaflet JS](https://leafletjs.com/) to create an interactive location map with custom location pin

### Screenshot

#### Desktop

![Desktop Home](./screenshots/screenshot-desktop-home.webp)
![Desktop Location](./screenshots/screenshot-desktop-location.webp)

#### Tablet

![Tablet](./screenshots/screenshot-ipad.webp)

#### Mobile

![Mobile](./screenshots/screenshot-mobile.webp)

### Links

- Solution URL: [Github Repository](https://github.com/jefcooper/front-end-mentor/tree/main/art-gallery-website)
- Live Site URL: [Github Pages](https://jefcooper.github.io/front-end-mentor/art-gallery-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- LeafletJS map library

### What I learned

- when line-height is less than 1, such as when closely spacing the display font in headings, it is not shown unless the style is also display: block.
- opening the chrome dev tools docked inside to the right side allows narrowing the browser pane to less than 500px without turning on responsive mode (which can have side-effects).
- whitespace: pre-line, all newlines count, even from the tag to the start of text, so starting the text on a new line for readabilty in html will result in extra space in the layout.
- use of srcset with multiple image resolutions for low and hidpi, i.e. @2x images within a picture element and in background-image.
- container at different break-points with differing inline margins.
- transition is added to the button hover to make it less jarring. Because the colors are swapping, it has large visual impact. Slowing down and fading from one to another softens the change and makes it better. Also carried this through to hover on other interactive elements because I liked the effect.
- Testing on Safari, word wrapping is different for my hero title text. The before is not breaking at the desired spot. Am using white-space: pre-line to explicitly set. Since this doesn't work, changing to use a fixed pixel width on the title to get the desired break.

### Bugs and Finishing Steps

- ~~Panning in map makes it impossible to scroll on an iphone. Look to turn off panning and retain zoom. Also maybe limit zoom range.~~
- ~~Review accessibility with keyboard and voiceover.~~

### Useful resources

- https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
- https://stackoverflow.com/questions/35172256/why-cant-we-set-line-height-less-than-1-for-span-element
- https://dev.to/ingosteinke/responsive-background-images-with-image-set-the-srcset-for-background-image-259a
- https://pixboost.com/blog/optimising-images-for-high-dpi-displays/
- https://onestepcode.com/leaflet-markers-svg-icons/
- https://stackoverflow.com/questions/60428521/change-color-of-leaflet-map
- https://leafletjs.com/examples/accessibility/

#### Tooling

- https://www.joshwcomeau.com/css/custom-css-reset/
- https://leafletjs.com/
- https://svg-sprite-generator.vercel.app/
- https://medium.com/swlh/better-ways-to-organise-css-properties-9a066e7ded62

#### Unsplash

- https://unsplash.com/@ryanstefan
- [Hero Image](https://unsplash.com/photos/5K98ScREEUY)
- https://unsplash.com/@robin_schreiner
- [Art gallery bench](https://unsplash.com/photos/YKE4zTW5lic)

#### My Codepens

- [My White/Black text experiment in Codepen]()
- [Leaflet Experiment](https://codepen.io/jefcooper/pen/JjBKoOB)
- [.container](https://codepen.io/jefcooper/pen/GRBqrQG)
- [.visually-hidden](https://codepen.io/jefcooper/pen/yLqJOvx)

## Author

- Website - [Jeff Cooper](https://jefcooper.github.io)
- Frontend Mentor - [@jefcooper](https://www.frontendmentor.io/profile/jefcooper)

## Acknowledgments
