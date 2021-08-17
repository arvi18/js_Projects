/// <reference path="D:\codin\WebD\Js\Node.js\typings\globals\jquery\index.d.ts" />

$(".todo-button").click((e)=>{
    e.preventDefault();
    $(`<div class="proc"><li class="todo-item">hey</li><button class="complete-button"><i class="fas fa-check"></i></button><button class="complete-button"><i class="fas fa-trash"></i></button></div>`).appendTo(".todo");
});

