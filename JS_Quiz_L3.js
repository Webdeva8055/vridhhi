const quizData=[
    {
        question: `Find the error in the following code:
        for (let i = 0; i <= 5; i++) {
        if(i % 2 == 0) continue;
        console.log(i);
        }`,
        answers: [
            { text: "It doesn't print any number", correct: true},
            { text: "It only prints odd numbers", correct: false},
            { text: "It only prints even numbers", correct: false},
            ],
    },

    {
        question: "What is the purpose of a function in JavaScript?",
        answers: [
            { text: "To store data ", correct: false},
            { text: "To repeat a task multiple times", correct: false},
            { text: "To encapsulate code that performs a specific task", correct: true},
            ],
    },

    {
        question: "How do you define a function in JavaScript?",
        answers: [
            { text: "function = myFunc() {}", correct: true},
            { text: "function: myFunc() {}", correct: false},
            { text: "function myFunc() {}", correct: false},
            ],
    },

    {
        question: `What will be the output of this function call?
        function sum(a, b) {
        return a + b;
        }
        console.log(sum(3, 4));`,
        answers: [
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "7", correct: false},
            ],
    },

    {
        question: "In JavaScript, what is a callback function?",
        answers: [
            { text: "A function that runs after the page loads", correct: true},
            { text: " A function passed as an argument to another function", correct: false},
            { text: "A function that calls itself", correct: false},
            ],
    },
  
    {
        question: "Which of the following is true about arrow functions in JavaScript?",
        answers: [
            { text: "They do not have their own this context", correct: true},
            { text: "They can be used as constructors", correct: false},
            { text: "They must have a return statement", correct: false},
            ],
    },

    {
        question: `What is the result of trying to extend the length of an array using a function in JavaScript?
        function extendArray(arr) {
        arr.push(5);
        }
        let myArr = [1, 2, 3];
        extendArray(myArr);
        console.log(myArr.length);`,
        answers: [
            { text: " 3", correct: false},
            { text: "  4 ", correct: true},
            { text: "5 ", correct: false},
            ],
    },

    {
        question: `Consider the following code snippet:
        function greet() {
        return 'Hello World';
        }
        console.log(greet());
        What is the output?`,
        answers: [
            { text: "'greet'", correct: false},
            { text: "'Hello World'", correct: true},
            { text: "undefined", correct: false},
            ],
    },

    {
        question: `What does the following function return?
        function checkEven(number) {
        return number % 2 === 0;
        }
        console.log(checkEven(3));`,
        answers: [
            { text: "true", correct: true},
            { text: " false", correct: false},
            { text: " 3 ", correct: false},
            ],
    },

    {
        question:`Identify the error in this function:
        function multiply(a, b) {
        console.log(a * b);
        }`,
        answers: [
            { text: "It does not return any value ", correct: false},
            { text: "It returns the wrong value", correct: false},
            { text: "Syntax error", correct: true},
            ],
    },


];












//--------------------------------------------------------------------------------

const questionElm=document.getElementById("question");
const answerbtn=document.getElementById("answer-btn");
const nextbtn=document.getElementById("next-btn");
const last=document.getElementById("out");
const most_outer=document.getElementById("quiz-section")

let current_que_ind=0;
let score=0;


function startQuiz(){
    current_que_ind=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let curr_que=quizData[current_que_ind];
    let que_no=current_que_ind + 1;
    questionElm.innerHTML = que_no +". "+curr_que.question;

    curr_que.answers.forEach(ans => {
        const button=document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add("answer-btns");
        answerbtn.appendChild(button);
       
        if(ans.correct){
            button.dataset.correct= ans.correct;
        }

        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct=="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextbtn.style.display="block";
}

function showScore(){
     resetState();
    // questionElm.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    // nextbtn.innerHTML=" Play Again";
    // nextbtn.style.display="block";
    // document.getElementById("quiz-section").style.height = 40

    last.innerHTML = `
    <div class="result">
    <h2> Your score : ${score}/${quizData.length} Correct Answers</h2>
    <p>The quiz is only to check your studies...</p>
    <button class="reload-button" onclick="location.reload()">Play Again</button>
    <a href="JS_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="JS_Quiz_L4.html"><button class="Levels">Next-Level</button></a>`;
}

function handleNextButton(){
    current_que_ind+= 1;
    if(current_que_ind < quizData.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextbtn.addEventListener("click",()=>{
    if(current_que_ind < quizData.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();



