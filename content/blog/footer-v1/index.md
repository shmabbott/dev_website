---
title: "Footer Enhancement"
date: "2021-07-05T22:12:03.284Z"
description: "Implementation of footer"
---

When I browse the web from my computer or mobile device, all websites seem to have a few things in common: they have a navigation bar, a footer, and pages containing interesting content. With each passing week, I am adding more and more content to Clicks to Code to meet the criteria of a website. For this weeks development update I have created a footer for my website.

### Footer Enhancement Idea

The footer requirements I have in mind are pretty basic:
1. It must be at the bottom of the view port if no content is present (no scroll bars present on the side of the screen)
2. If content is present, the footer must be at the bottom of the page and below the content (if scroll bars ARE present on the side of the screen)
3. A secondary color must be chosen that compliments the navigation bar
4. There must be an icon of github located in the footer
5. Clicking the icon should link the user to my personal github page
6. Beneath the github icon, there should be copywrite information

### Results of Development work

The footer was less complicated to work with in comparison to the navigation bar. I chose a complimentary gray color that goes along nicely with the blueish color of the navigation bar. I centered the text and icon image using text-align: center;

For the icon, I used React Icons package to import a github icon into my footer component. I then configured the icon by importing InconContext into my footer, which allowed me to target and style the icon with CSS. 


The tricky part of this enhancement was getting the footer to stay at the bottom of the page. There are two scenarios to consider here: the footer must remain at the bottom of the screen when there is no content on the page AND the footer must remain at the bottom of the page when there is more content on the page than what the view port is able to display. In order to accomplish this task, I had to do the following:
- I used the Style.css file to target both the Layout.js and footer.js components instead of creating a module css file for the footer and Layout components
- I created a div element, with a class name of main-layout-container, that encompasses the header, main, and footer elements
- I set the min-height of the main-layout-container element to 100 vh so that it displays at 100% of the view port
- *Here is the important part:* I set the position of main-layout-container to position: relative; this allows me to position any of the child elements of main-layout-container using position:absolute and top, bottom, left, and right css attributes
- Now, I set the footer, with id="footer1," to position:absolute; and set the bottom attribute to ; this will keep footer at the bottom of the page if there is no content and it will keep the footer below the content the main tag if there is content present
- Lastly, I gave the footer a static height of 150px and I gave the main content element a padding-bottom of 150px so there is no overlap between the footer and content

*No Content Footer*
![Image of footer with no content](no-content-footer.png)

*Content Footer*
![Image of footer with content](content-footer.png)

### Lessons learned

Getting to use the position property to solve for the positioning of the footer element was the better part of this project. Going into this project, I had a brief understanding of the different positioning properties, but I feel like I have a better understanding Relative and Absolute positoning now. This has sparked an interest for a dedicated future blog post to dive deeper into css positioning.

The second item I learned more about it using React Icons. While it wasn't very difficult to implement, it is good to know that there is a library of icons I can use for future projects that is easy to implement and customize.