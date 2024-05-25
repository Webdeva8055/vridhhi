const quizData=[
    {
        question: `What is the output of the following code snippet?
        let x = 'Hello';
        let y = 'World';
        console.log(x + ' ' + y);`,
        answers: [
            { text: "HelloWorld", correct: false},
            { text: "'Hello World'", correct: false},
            { text: "'Hello' 'World'", correct: true},
            ],
    },

    {
        question: " Which statement is used to execute a block of code multiple times in JavaScript?",
        answers: [
            { text: "for", correct: false},
            { text: "if", correct: true},
            { text: "break", correct: false},
            ],
    },

    {
        question: "What does the if statement in JavaScript do?",
        answers: [
            { text: "Declares a variable", correct: false},
            { text: "Executes a block of code based on a condition", correct: false},
            { text: "Prints a message to the console", correct: true},
            ],
    },

    {
        question: "Which of the following is not a loop structure in JavaScript?",
        answers: [
            { text: "while", correct: true},
            { text: "for", correct: false},
            { text: "if", correct: false},
            ],
    },

    {
        question: "In a switch statement, what keyword is used to terminate a case in JavaScript?",
        answers: [
            { text: " end", correct: false},
            { text: "break", correct: true},
            { text: "stop", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code?
        let a = 2;
        if(a > 3) {
        console.log('Yes');
        } else {
        console.log('No');
        }`,
        answers: [
            { text: "Yes”>", correct: false},
            { text: "No", correct: false},
            { text: "Undefined", correct: true},
            ],
    },

    {
        question: "In a for loop, what are the three optional expressions, separated by semicolons?",
        answers: [
            { text: " Initializer, Condition, Incrementer", correct: false},
            { text: " Condition, Incrementer, Initializer", correct: true},
            { text: " Incrementer, Initializer, Condition", correct: false},
            ],
    },

    {
        question: `Consider the following code:
        let x = 5;
        let result = (x > 3) ? 'Yes' : 'No';
        console.log(result);
        What is the output?`,
        answers: [
            { text: "'Yes'", correct: false},
            { text: "  'No'", correct: false},
            { text: "true", correct: true},
            ],
    },

    {
        question: `What is the output of this code snippet?
        for (let i = 0; i < 3; i++) {
        console.log(i);
        }`,
        answers: [
            { text: "012", correct: true},
            { text: "123", correct: false},
            { text: "0-1-2", correct: false},
            ],
    },

    {
        question: `Identify the problem in this code:
        let i = 0;
        while (i < 3) {
        console.log(i);
        }`,
        answers: [
            { text: "Infinite loop", correct: true},
            { text: "Syntax error", correct: false},
            { text: " Logical error", correct: false},
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
    <a href="JS_Quiz_L3.html"><button class="Levels">Next-Level</button></a>`;
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







