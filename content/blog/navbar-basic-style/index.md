---
title: Navbar - The First Style Update!
date: "2021-04-16T22:12:03.284Z"
description: "This post will cover the list of enhancements needed, development work, and a brief retro at the end."
---

### Overview and Statement of Problem

Now that Clicks to Code is live and has basic styling and a first blog post, it is time to begin improving Clicks to Code to be more appealing to the eyes. The first item on the docket is the Navigation bar. The current navbar is the result of a rushed effort to  get *something* on the website to outline a skeleton that later development will fill in. The time has come to make the navbar appealing and usable.

### Current Navbar and Behaviors

![Image of current navbar](current-navbar.png)

This section will be brief: the current navbar is a boring grey, the text is left justified, and it is not responsive to web page changes.

### Desired Navbar Behavior

The desired styling and behaviors are as follows:

1. Styling
    - Choose color scheme for navbar
    - Update font for brand text
    - Update font for clickable links
    - Separate Brand from clickable buttons
    - Add state to buttons on mouse hover
    - When a button is clicked, it should be underlined or highlighted in some way so that the user knows what page they are on 
2. Functionality
    - Make the navbar responsive to size changes, similar to a bootstrap implementation
    - Button click should not require a full page reload, it should utilize gatsby routing to load all pages on first page load so that clicks are seemless
    - When a button is pressed, there should be a css transition highlighting one button to another, thus utilizing react state

### Style Enhancement

The color 


### Result of Development Work

### Lessons Learned