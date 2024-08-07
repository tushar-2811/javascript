"use strict";

function handleClick(){
     
}

let id = 1;

function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const newTodo = document.createElement('div');
    const markComplete = document.createElement('button');
    markComplete.innerText = "Mark complete";
    markComplete.setAttribute("onClick" , "handleClick()");
    markComplete.setAttribute("id" , id);
    id++;

    newTodo.textContent = `${title} : ${description}`;

    newTodo.append(markComplete);

    const todoList = document.getElementById("todoList");
    todoList.append(newTodo);
}

function updateDomAccordingToState(state){

    const parentElement = document.getElementById('todoList');

    state.forEach(element => {
        const majorChildElement = document.createElement('div');
        const child1 = document.createElement('div');
        const child2 = document.createElement('div');
        const child3 = document.createElement('button');

        child1.innerHTML = `${element.title}`;
        child2.innerHTML = `${element.description}`;
        child3.innerHTML = "add Todo";

        majorChildElement.appendChild(child1);
        majorChildElement.appendChild(child2);
        majorChildElement.appendChild(child3);

        parentElement.appendChild(majorChildElement);
    });
}