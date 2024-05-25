const quizData=[
    {
        question: "Access modifiers in java",
        answers: [
            { text: "all of shown", correct: true},
            { text: "default , friendly", correct: false},
            { text: "public , private, protected", correct: false},
            ],
    },
    
    {
        question: "Public access modifier can access by",
        answers: [
            { text: "within same class", correct: false},
            { text: "no one", correct: false},
            { text: "for any class", correct: true},
            ],
    },

    {
        question: "Private access modifier can access by",
        answers: [
            { text: "within same class", correct: true},
            { text: "no one", correct: false},
            { text: "for any class", correct: false},
            ],
    },

    {
        question: "Syntax for access modifiers",
        answers: [
            { text: "public void srtb(){}", correct: false},
            { text: "both", correct: true},
            { text: "private int numera;", correct: false},
            ],
    },

    {
        question: "Does java support array of objects",
        answers: [
            { text: " yes ", correct: true},
            { text: " need special class ", correct: false},
            { text: " no ", correct: false},
            ],
    },
    
    {
        question: "How to create array of objects ",
        answers: [
            { text: " class_name []obj_name= new class_name[size];", correct: true},
            { text: " class_name.createArray()", correct: false},
            { text: " class_name.obj_name.createArray()", correct: false},
            ],
    },

    {
        question: " is not a type of constructors",
        answers: [
            { text: " default ", correct: false},
            { text: " seprate", correct: true},
            { text: " parameterised ", correct: false},
            ],
    },

    {
        question: "Constructor name and class name are different",
        answers: [
            { text: " yes  ", correct: false},
            { text: " no ", correct: true},
            { text: " we use first characters of class ", correct: false},
            ],
    },

    {
        question: "Constructors need to call seprately after creating obj of class",
        answers: [
            { text: " called automatically ", correct: true},
            { text: " True ", correct: false},
            { text: " require methods ", correct: false},
            ],
    },

    {
        question: "parametrs for parameterised constructor should pass while ",
        answers: [
            { text: " nothing to do ", correct: false},
            { text: " defining methods", correct: false},
            { text: " creating class obj ", correct: true},
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
    <a href="Java_Quiz_L6.html"><button class="Levels">Next-Level</button></a>`;
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