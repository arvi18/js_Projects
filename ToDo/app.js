/// <reference path="D:\codin\WebD\Js\Node.js\typings\globals\jquery\index.d.ts" />

$('document').ready(getTodods)
$(".todo-button").click((e)=>{
    e.preventDefault();
    $(`<div class="proc"><li class="todo-item">${$(".todo-input").val()}</li><div class="btns"><button id="check"><i class="fas fa-check"></i></button><button id="trash"><i class="fas fa-trash"></i></button></div></div>`).prependTo(".todo");
    saveTodos($(".todo-input").val());
    $(".todo-input").val("");

    $("#check").click(function(){    
        $(this).closest('.proc').toggleClass("crossed");
    });
    $("#trash").click(function(){
        let tobedeleted=$(this).closest(".proc").children("li").html()
        deleteTodos(tobedeleted)

        $(this).closest('.proc').fadeOut(600);
        setTimeout(()=>$(this).closest('.proc').remove(), 700)
    });
    
});
$("#filter-todo").click(function(){
    const todos=$("#filter-todo  > option:selected");
    todos.val()==="all" ? $(".proc").removeClass("trashed")
    : todos.val()==="completed" ? ($(".proc").removeClass("trashed"), $(".proc").not(".crossed").addClass("trashed") )
    : todos.val()==="uncompleted" ? ($(".proc").removeClass("trashed"), $(".crossed").addClass("trashed"))  : console.log('totka hein dosto!') 
})

function saveTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[]; 
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodods(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[]; 
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        $(`<div class="proc"><li class="todo-item">${todo}</li><div class="btns"><button id="check"><i class="fas fa-check"></i></button><button id="trash"><i class="fas fa-trash"></i></button></div></div>`).prependTo(".todo");
    });
};

function deleteTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.splice(todos.indexOf(todo), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}