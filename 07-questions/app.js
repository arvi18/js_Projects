/// <reference path="D:\codin\WebD\Js\Node.js\typings\globals\jquery\index.d.ts" />

$(".question-btn").click(function(){
    $(this).parent().parent().toggleClass("show-text");
});
