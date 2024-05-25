const quizData=[
    {
        question: "What are the properties of block-level elements?",
        answers: [
            { text: "It always starts on a new line.", correct: true},
            { text: "It always takes the full width available.", correct: false},
            { text: "It has a top and bottom margin.", correct: false},
            ],
    },

    {
        question: "Which of the following are examples of block-level elements in HTML?  <___>",
        answers: [
            { text: "div", correct: false},
            { text: " p", correct: false},
            { text: "h1", correct: true},
            ],
    },

    {
        question: "How many characters can be written in 1KB?",
        answers: [
            { text: "1048", correct: true},
            { text: "1024", correct: false},
            { text: "1000", correct: false},
            ],
    },

    {
        question: "What are some valid character sets available?",
        answers: [
            { text: "UTF-8", correct: false},
            { text: "ANSI", correct: true},
            { text: "ASCII", correct: false},
            ],
    },

    {
        question: "The default value of the BORDER attribute is?",
        answers: [
            { text: " 1pixel ", correct: true},
            { text: " 2pixel ", correct: false},
            { text: " 4pixel ", correct: false},
            ],
    },
   
    {
        question: "What are those objects called which are used for storing data on the client provided by the HTML local storage?",
        answers: [
            { text: " Windows.localStorage", correct: true},
            { text: " Window.sessionStorage", correct: false},
            { text: " Both A and B", correct: false},
            ],
    },

    {
        question: "The most basic part of any HTML page is?",
        answers: [
            { text: " ASCII Text ", correct: false},
            { text: " Binary Text", correct: true},
            { text: " Text ", correct: false},
            ],
    },

    {
        question: "What is the select tag used for?",
        answers: [
            { text: "Creates a combo box.", correct: false},
            { text: " Select some attributes and change their style. ", correct: true},
            { text: " Change text font. ", correct: false},
            ],
    },

    {
        question: " What are the main components of the front end of any working website?",
        answers: [
            { text: " HTML, CSS, Javascript.", correct: true},
            { text: "  HTML only.", correct: false},
            { text: " Javascript only. ", correct: false},
            ],
    },

    {
        question: "Which HTML tag is used to set up a Javascript-like client-side scripting language?  <___>",
        answers: [
            { text: " script ", correct: false},
            { text: " select", correct: false},
            { text: " anchor ", correct: true},
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
    <a href="HTML_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="HTML_Quiz_L6.html"><button class="Levels">Next-Level</button></a>`;
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






