const quizData=[
    {
        question: "Java isn't a ?",
        answers: [
            { text: "Scripting lang", correct: true},
            { text: "High level lang", correct: false},
            { text: "Object oriented lang", correct: false},
            ],
    },
    
    {
        question: "Which are non-primtive data types ?",
        answers: [
            { text: "int , byte , float", correct: false},
            { text: "string , char , boolean", correct: false},
            { text: "array , class", correct: true},
            ],
    },

    {
        question: "JDK stands for?",
        answers: [
            { text: "java development kit", correct: true},
            { text: "java design kit", correct: false},
            { text: "java database kit", correct: false},
            ],
    },

    {
        question: "Which are not operators?",
        answers: [
            { text: "+ - / ++ -- == >", correct: false},
            { text: ".  : ", correct: true},
            { text: "&&  &  ||  | ! <", correct: false},
            ],
    },

    {
        question: "Which is a seprator?",
        answers: [
            { text: " {} ", correct: true},
            { text: " // ", correct: false},
            { text: " : ", correct: false},
            ],
    },
    
    {
        question: "Variables are used to?",
        answers: [
            { text: " memory to store values", correct: true},
            { text: " point to another addresss of variable", correct: false},
            { text: " none of above", correct: false},
            ],
    },

    {
        question: "Which is correct?",
        answers: [
            { text: " string c ", correct: false},
            { text: " int n ", correct: true},
            { text: " String $main ", correct: false},
            ],
    },

    {
        question: "we can declare variables anywhere in program?",
        answers: [
            { text: " no variables are only static  ", correct: false},
            { text: " yes ", correct: true},
            { text: " no ", correct: false},
            ],
    },

    {
        question: "Package used to take user input ?",
        answers: [
            { text: " Scanner ", correct: true},
            { text: " SQL ", correct: false},
            { text: " ReaderUser ", correct: false},
            ],
    },

    {
        question: "System.out.____  , pick incorrect?",
        answers: [
            { text: " println ", correct: false},
            { text: "  printf", correct: false},
            { text: " scan ", correct: true},
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
    <a href="Java_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="Java_Quiz_L2.html"><button class="Levels">Next-Level</button></a>`;
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