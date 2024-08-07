"use strict";

const addNumbers = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const answerElement = document.getElementById("answer");
    answerElement.innerHTML = num1+num2;

    answerElement.style.color = "red";
}
let timeout;
function debounceGetData(){
   clearTimeout(timeout);
   timeout =  setTimeout(function(){
        getData();
    },1000);
}

const getData = async () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const answerElement = document.getElementById("answer");

    fetch(`http://localhost:8000/add?num1=${num1}&num2=${num2}`)
    .then(function(response){
        response.json().then(function(data){
            answerElement.innerHTML = data.result;
        })
    })
    
    
    
}
