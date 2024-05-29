let textbox = document.getElementById("textbox");
let box = document.getElementById("box");
let todoList = document.getElementById("todoList");


let todos = [];
window.onload =()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo=>addtodo(todo))
}

box.addEventListener('click',()=>{
    todos.push(textbox.value);
    window.localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(textbox.value)   
})

function addtodo(todo){
           let para = document.createElement("p");
            para.innerHTML = todo;
            todoList.appendChild(para);
            
            textbox.value = '';
            para.addEventListener('click',()=>{
                para.style.textDecoration = "line-through";
                remove(todo)
            })
        
            para.addEventListener('dblclick',()=>{
                todoList.removeChild(para);
                remove(todo)
            })
        
        
        }


function remove(todo){
    let index = todos.indexOf(todo)
    console.log(index); 
    if(index>-1){
        todos.splice(index,1)

    }   
    window.localStorage.setItem('todos',JSON.stringify(todos))
}