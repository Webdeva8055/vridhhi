const quizData=[
    {
        question: " OOP's concepts aren't include ",
        answers: [
            { text: "Inheritance", correct: false},
            { text: "Thread", correct: false},
            { text: "Web-Dev", correct: true},
            ],
    },
    
    {
        question: "choose incorrect",
        answers: [
            { text: "if(condition){ statement }", correct: false},
            { text: "else(condition) { statement }", correct: true},
            { text: "else if(condition){ statement }", correct: false},
            ],
    },

    {
        question: "Which is invalid",
        answers: [
            { text: "for(start;condition;increment/decrement) {}", correct: false},
            { text: "while(condition) {}", correct: false},
            { text: "while(condition) {} do", correct: true},
            ],
    },

    {
        question: "Loop whithin a loop means",
        answers: [
            { text: "nested loop", correct: true},
            { text: "loop ladder", correct: false},
            { text: "none of above", correct: false},
            ],
    },

    {
        question: "Which is used to skip the current iteration",
        answers: [
            { text: " skip ", correct: false},
            { text: " continue ", correct: true},
            { text: " break ", correct: false},
            ],
    },
    
    {
        question: "Which loop java doesn't support",
        answers: [
            { text: " for each", correct: false},
            { text: " for", correct: false},
            { text: " for of", correct: true},
            ],
    },

    {
        question: "if , if-else , if-else if-else are....",
        answers: [
            { text: " selection statements ", correct: false},
            { text: " iteration statements ", correct: true},
            { text: " jump statements ", correct: false},
            ],
    },

    {
        question: "i=2; if(i==3){ i=2; } i=4;",
        answers: [
            { text: " output 4 will be shown", correct: false},
            { text: " output 2 will be shown ", correct: false},
            { text: " no output will shown ", correct: true},
            ],
    },

    {
        question: "i=1; do{ if(i%1==0){System.out.println(i);}i++}while(i>5);",
        answers: [
            { text: " 1 ", correct: true},
            { text: " 0 ", correct: false},
            { text: " 5 ", correct: false},
            ],
    },

    {
        question: "When two operators have same precedence...",
        answers: [
            { text: " use associativity ", correct: true},
            { text: " use bodmos", correct: false},
            { text: " calculate serially ", correct: false},
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
    <a href="Java_Quiz_L3.html"><button class="Levels">Next-Level</button></a>`;
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