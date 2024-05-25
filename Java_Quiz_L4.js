const quizData=[
    {
        question: "...is instance of class",
        answers: [
            { text: "object", correct: true},
            { text: "array", correct: false},
            { text: "method", correct: false},
            ],
    },
    
    {
        question: "How many public class can we create maximum",
        answers: [
            { text: "as we want", correct: false},
            { text: "0", correct: false},
            { text: "1", correct: true},
            ],
    },

    {
        question: "Predefined class in java",
        answers: [
            { text: "DateTime", correct: true},
            { text: "Myclass", correct: false},
            { text: "Student_Sql", correct: false},
            ],
    },

    {
        question: "we can access methods of class using",
        answers: [
            { text: "creating new class", correct: false},
            { text: "objects", correct: true},
            { text: "none of above", correct: false},
            ],
    },

    {
        question: "class mypen{ myspen(){i=3;}} , pick correct",
        answers: [
            { text: " mypen m= new mypen(); ", correct: true},
            { text: " new mypen() = mypen();", correct: false},
            { text: " mypen().new;", correct: false},
            ],
    },
    
    {
        question: "Class consist of",
        answers: [
            { text: " both", correct: true},
            { text: " methods", correct: false},
            { text: " data members", correct: false},
            ],
    },

    {
        question: "return_type name(parameter){ body } ...is syntax of",
        answers: [
            { text: " class ", correct: false},
            { text: " methods ", correct: true},
            { text: " objects ", correct: false},
            ],
    },

    {
        question: "Which symbol used to access methods of class",
        answers: [
            { text: " -> ", correct: false},
            { text: " . ", correct: true},
            { text: " : ", correct: false},
            ],
    },

    {
        question: "Can we create user defined classes ",
        answers: [
            { text: " yes", correct: true},
            { text: " no ", correct: false},
            { text: " maybe ", correct: false},
            ],
    },

    {
        question: "Method which allows the change in value of class variables",
        answers: [
            { text: " changer ", correct: false},
            { text: "  accessor", correct: false},
            { text: " mutator ", correct: true},
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
    <a href="Java_Quiz_L5.html"><button class="Levels">Next-Level</button></a>`;
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