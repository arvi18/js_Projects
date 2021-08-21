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
    const conatainerHeight=document.querySelector(".links-container").getBoundingClientRect().height;
    if(conatainerHeight===0){
        $(".links-container").css("height", `${linksHeight}px`)
    }else{
        $(".links-container").css("height", `0px`)
    }
});

// ********** fixed navbar ************
$(this).scroll(()=>{
    let scrollHeight=this.pageYOffset
    let navHeight=document.querySelector("#nav").getBoundingClientRect().height;
    if(scrollHeight>=navHeight){
        document.querySelector("#nav").classList.add("fixed-nav");
    }else{
        document.querySelector("#nav").classList.remove("fixed-nav");
    }
    if(scrollHeight>500){
        $(".top-link").addClass("show-link")
    }else{
        $(".top-link").removeClass("show-link")
    }
});
// ********** smooth scroll ************
// select links










$(".links")