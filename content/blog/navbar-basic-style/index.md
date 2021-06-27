---
title: Navbar - Part One of My Navbar Style Update
date: "2021-06-26T22:12:03.284Z"
description: "First navbar update discussion"
---

When I first started building Clicks to Code back in April 2021, my wife was pregnant with our first baby. I believed that I could finish a basic version of Clicks to Code before the baby arrived… Well, I was wrong. Here is a much needed blog post after two months of learning how to be a dad!

### Enhancement Proposal

Now that Clicks to Code is live and *functioning,* it is time to create a styled navigation bar. The current navigation bar in Clicks to Code looks like this:

![Image of current navbar](current-navbar.png)

It is technically a navigation bar, but it is lacking style, responsiveness, and pre-loading of navigation items provided by Gatsby.

I have listed out my requirements below for a successful first navigation bar upgrade:

1. Styling
    - Choose color theme for the navbar
    - Update font for brand text
    - Update font for clickable links
    - Separate Brand from clickable buttons
    - Add state to buttons on mouse hover
    - When a button is clicked, it should be underlined or highlighted in some way so that the user knows what page they are on 
2. Functionality
    - Make the navbar responsive to size changes, similar to a bootstrap implementation
    - Button click should not require a full page reload, it should utilize gatsby routing to load all pages on first page load so that clicks are seamless
    - The mobile nabber should implement a hamburger stack that can be clicked and display clickable tab options

### Result of Development Work

Here is the result of my development work:

<insert image here>

For the styling, I chose a sky blue as the main color for the navbar. Inactive tabs will remain sky blue and active tabs will have a white background to show state. I chose lime-green for the mouse hover color, which I thought could also be used for subtle highlights in the homepage, blog, and about me sections as well. I found a ridiculous pixelated font for the Clicks to Code branding and it is growing on me! I think it gives the site a fun and code centric feel. I didn’t change the font for the Home, Blog, and About tabs as I thought the standard text used is good enough for now. 

For the functionality piece, I used css flex to separate the Clicks to Code branding from the navigation items. What’s nice about flex box is that the tab size change with the size of the screen you are viewing them on. To accommodate smaller screens, I implemented a media query that will remove the navigation brand so that the navigation times are the only things remaining. I tried to implement a hamburger menu to keep the navigation branding up, but I was unsuccessful. I will discuss this more in the lessons learned section. Lastly, I used Gatsby Link to replace the <a> tags for the Brand, Home, Blog, and About sections, which utilizes Gatsby to preload the page for faster loading times on mouse click.

Here is an example of Gatsby link in my code:


    <div className={navbarStyles.navItems}>
      <Link to="/" activeClassName={navbarStyles.active}>Home</Link>
      <Link to="/blogs/" activeClassName={navbarStyles.active} partiallyActive={true}>Blog</Link>
      <Link to="/about/" activeClassName={navbarStyles.active}>About</Link>
    </div>


### Lessons Learned

Building the navigation bar opened my eyes to the complexity of CSS. While I was able to use CSS Modules to implement flex box and media queries to make my navbar responsive, I was not able to develop a hamburger menu due to limited understanding of css positioning rules. I need to focus on understanding the basics of Position, Flex, and Grid CSS properties.

Another area that gave me some difficulties is with Google and the links in my project. In order to preserve state with my blog articles, I used ‘partiallyactive = true’ to show active state on the blog tab when blog articles are open. In order for partial active to work, I needed to append ‘/blog/‘ to each blog post url string, which ended up breaking my website in Google searches. I will need to keep  this in mind in the future so that I don’t deal with broken links.

