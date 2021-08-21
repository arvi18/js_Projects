/// <reference path="D:\codin\WebD\Js\Node.js\typings\globals\jquery\index.d.ts" />
// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
dateYear=new Date().getFullYear(); 
$("#date").html(dateYear)
// ********** close links ************
$(".nav-toggle").click(function(){
    // $(".links-container").toggleClass("show-links")
    const linksHeight=document.querySelector(".links").getBoundingClientRect().height;
    console.log('linksHeight:', linksHeight)
    const conatainerHeight=document.querySelector(".links-container").getBoundingClientRect().height;
    console.log('conatainerHeight:', conatainerHeight)
});

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links









(".links-container")
$(".links")