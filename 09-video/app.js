/// <reference path="D:\codin\WebD\Js\Node.js\typings\globals\jquery\index.d.ts" />
// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const switchBtn=$(".switch-btn")
switchBtn.click(()=>{
    switchBtn.hasClass("slide") ? (switchBtn.removeClass("slide"),
    document.querySelector(".video-container").pause())
    :(switchBtn.addClass("slide"),document.querySelector(".video-container").play())
})

this.addEventListener("load", ()=>$(".preloader").addClass("hide-preloader"))