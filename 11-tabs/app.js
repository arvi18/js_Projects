/// <reference path="D:\codin\WebD\Js\Node.js\typings\globals\jquery\index.d.ts" />

$(".tab-btn").click(function(){
    $(".tab-btn").removeClass("active");
    $(".content").removeClass("active");
    $(this).addClass("active");
    $(".content#"+this.id).addClass("active");
});