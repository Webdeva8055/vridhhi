const quizData=[
    {
        question: "Which of the following is a correct syntax to display “Hello World” in an alert box using JavaScript?",
        answers: [
            { text: " alertBox('Hello World');", correct: true},
            { text: "alert('Hello World');", correct: false},
            { text: "msgAlert('Hello World');", correct: false},
            ],
    },

    {
        question: "What is the purpose of JavaScript in web development?",
        answers: [
            { text: "To structure web pages", correct: false},
            { text: "To style web pages", correct: false},
            { text: "To add interactivity and dynamic content to web pages", correct: true},
            ],
    },

    {
        question: `Which keyword is used for declaring a variable in JavaScript that can be reassigned?`,
        answers: [
            { text: "const", correct: true},
            { text: "var", correct: false},
            { text: "let", correct: false},
            ],
    },

    {
        question: "In JavaScript, which of the following is a valid variable name?",
        answers: [
            { text: "2names", correct: false},
            { text: "$name", correct: true},
            { text: "-name", correct: false},
            ],
    },

    {
        question: `Which data type in JavaScript is used to represent logical values?`,
        answers: [
            { text: "String", correct: true},
            { text: " Boolean", correct: false},
            { text: " Number", correct: false},
            ],
    },

    {
        question: "What does the undefined value in JavaScript represent?",
        answers: [
            { text: "An unassigned variable", correct: true},
            { text: "A null value", correct: false},
            { text: "A logical false", correct: false},
            ],
    },

    {
        question:`What will be the output of the following code?
        console.log(typeof null);
        `,
        answers: [
            { text: "'object'", correct: false},
            { text: " 'null' ", correct: true},
            { text: "'undefined'", correct: false},
            ],
    },

    {
        question: "Which of the following is an example of a loosely typed language?",
        answers: [
            { text: " Java ", correct: false},
            { text: " C++. ", correct: true},
            { text: "JavaScript", correct: false},
            ],
    },

    {
        question: "Which operator is used to check both the value and the type of a variable in JavaScript?",
        answers: [
            { text: "==", correct: true},
            { text: "===", correct: false},
            { text: "!=", correct: false},
            ],
    },

    {
        question: `What is the output of the following code snippet?
        var a = 10;
        console.log(a);`,
        answers: [
            { text: "10", correct: false},
            { text: "'10'", correct: false},
            { text: "undefined", correct: true},
            ],
    },

];













// //--------------------------------------------------------------------------------

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
    <a href="JS_Quiz_L2.html"><button class="Levels">Next-Level</button></a>`;
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

















