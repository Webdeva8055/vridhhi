const quizData=[
    {
        question: "Which of the following blocks will always be executed whether an exception is encountered or not in a program?",
        answers: [
            { text: "try", correct: true},
            { text: "except", correct: false},
            { text: "finally", correct: false},
            ],
    },
   
    {
        question: `What will be the output of the following code snippet?
        from math import *
        a = 2.19
        b = 3.999999
        c = -3.30
        print(int(a), floor(b), ceil(c), fabs(c))`,
        answers: [
            { text: "2 3 -3 3.3", correct: false},
            { text: "3 4 -3 3", correct: false},
            { text: "2 3 -3 3", correct: true},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        set1 = {1, 3, 5}
        set2 = {2, 4, 6}
        print(len(set1 + set2))`,
        answers: [
            { text: "3", correct: true},
            { text: "6", correct: false},
            { text: "Error", correct: false},
            ],
    },

    {
        question: " What keyword is used in Python to raise exceptions?",
        answers: [
            { text: "raise", correct: false},
            { text: "try", correct: true},
            { text: "goto", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        s1 = {1, 2, 3, 4, 5}
        s2 = {2, 4, 6}
        print(s1 ^ s2)`,
        answers: [
            { text: " {1, 2, 3, 4, 5} ", correct: true},
            { text: "{1, 3, 5, 6}", correct: false},
            { text: "{2, 4}", correct: false},
            ],
    },
   
    {
        question: "Which of the following is not a valid set operation in python?",
        answers: [
            { text: " Union", correct: true},
            { text: " Intersection", correct: false},
            { text: "Difference", correct: false},
            ],
    },

    {
        question:`What will be the output of the following code snippet?
        a = [1, 2, 3, 4]
        b = [3, 4, 5, 6]
        c = [x for x in a if x not in b]
        print(c)`,
        answers: [
            { text: "  [1, 2]", correct: false},
            { text: " [5, 6] ", correct: true},
            { text: "[1, 2, 5, 6] ", correct: false},
            ],
    },

    {
        question: "Which of the following are valid escape sequences in Python?",
        answers: [
            { text: " \n ", correct: false},
            { text: " \t ", correct: true},
            { text: "All of the above ", correct: false},
            ],
    },
 
    {
        question: "Which of the following are valid string manipulation functions in Python?",
        answers: [
            { text: " count()", correct: true},
            { text: " upper()", correct: false},
            { text: " All of the above", correct: false},
            ],
    },

    {
        question: " Which of the following modules need to be imported to handle date time computations in Python?",
        answers: [
            { text: " datetime ", correct: false},
            { text: "  date", correct: false},
            { text: " timedate ", correct: true},
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
    <a href="Py_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="Py_Quiz_L5.html"><button class="Levels">Next-Level</button></a>`;
    ;
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














