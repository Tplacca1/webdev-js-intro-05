"use strict";

const todos = [ 
    "Wash the dishes", 
    "Clean the gutters", 
    "Mow the yard", 
    "Do some coding",
    "Rake the leaves", 
]; 
    
// Declare your two immutable variables
 const shiftValueEl = document.getElementById("shift-value"); 
 const popValueEl = document.getElementById("pop-value"); 
 
// Create mutable variables
 let shiftValue;
 let popValue; 

// Declaring constant variables to store references to the elements

const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two"); 
const answerThreeEl = document.getElementById("answer-three"); 
const answerFourEl = document.getElementById("answer-four"); 
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six"); 
const submissionBtn = document.getElementById("submission-btn"); 

function updateAnswerOne() { 
    answerOneEl.innerText = todos.join(", ");
} 
 
 function updateAnswerTwo() { 
    answerTwoEl.innerText = todos.length;
} 

 function removeLastValue() { 
    popValue = todos.pop(); 
    answerThreeEl.innerText = todos.join(", "); 
    popValueEl.innerText = popValue;
} 

 function removeFirstValue() { 
    shiftValue = todos.shift(); 
    answerFourEl.innerText = todos.join(", "); 
    shiftValueEl.innerText = shiftValue; 
} 

function addShiftAndPopValues() { 
    if (shiftValue) { 
        todos.push(shiftValue);
     } 
     if (popValue) { 
        todos.unshift(popValue); 
    } answerFiveEl.innerText = todos.join(", "); 
} 

function reverseTodoList() { 
    todos.reverse(); 
    answerSixEl.innerText = todos.join(", "); 
}

function render() { 
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    removeFirstValue();
    addShiftAndPopValues();
    reverseTodoList();
}

submissionBtn.addEventListener("click", function () { 
    render()
});
