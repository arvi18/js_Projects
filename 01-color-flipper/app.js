// 
/// <reference path="D:\codin\WebD\Js\Node.js\typings\globals\jquery\index.d.ts" />

const colors = ["green", "red", "rgba(133,122,200)", "#f15025","hsl(360, 67%, 44%)","hsl(360, 71%, 66%),"];

$(".btn").click(()=>{
    const randomNum=Math.round(Math.random()*(colors.length-1));
    $('body').css("background-color", colors[randomNum]);
    $(".color").css('color', colors[randomNum]);
    $(".color").text(colors[randomNum]);
});