"use strict";

let state = {
    count : 0
}

function increaseCounter(){
    state.count++;
    buttonComponentReRender();
}

function buttonComponentReRender(){
     const parentElement = document.getElementById('container');
     parentElement.innerHTML = '';

     const myButtonElement = document.createElement('button');
     myButtonElement.innerHTML = `counter ${state.count}`;
     myButtonElement.setAttribute('onClick' , 'increaseCounter()')

     parentElement.appendChild(myButtonElement);
}

buttonComponentReRender();