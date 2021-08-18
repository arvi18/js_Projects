/// <reference path="D:\codin\WebD\Js\Node.js\typings\globals\jquery\index.d.ts" />

$(".todo-button").click((e)=>{
    e.preventDefault();
    $(`<div class="proc"><li class="todo-item">${$(".todo-input").val()}</li><div class="btns"><button id="check"><i class="fas fa-check"></i></button><button id="trash"><i class="fas fa-trash"></i></button></div></div>`).prependTo(".todo");
    $(".todo-input").val("")
    $("#check").click(function(){    
        console.log($(this).closest('.proc').toggleClass("crossed"))
    });
    $("#trash").click(function(){
        $(this).closest('.proc').remove();
    });
});