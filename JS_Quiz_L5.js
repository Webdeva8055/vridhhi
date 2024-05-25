const quizData=[
    {
        question:`Identify the issue in this array declaration:
        let numbers = new Array(-5);`,
        answers: [
            { text: "Negative size", correct: true},
            { text: "Syntax error", correct: false},
            { text: "Logical error", correct: false},
            ],
    },

    {
        question: `Spot the mistake in this code snippet:
        let data = [1, 2, 3];
        delete data[1];
        console.log(data[1]);`,
        answers: [
            { text: "undefined is logged instead of 2", correct: false},
            { text: "2 is not deleted", correct: false},
            { text: "Syntax error", correct: true},
            ],
    },

    {
        question: "How do you access the value of a property in a JavaScript object?",
        answers: [
            { text: "object{propertyName}", correct: true},
            { text: "object[propertyName]", correct: false},
            { text: "object.propertyName", correct: false},
            ],
    },

    {
        question: "What will be the output of console.log(typeof {})? ",
        answers: [
            { text: "'object'", correct: false},
            { text: "'array'", correct: true},
            { text: "'null'", correct: false},
            ],
    },

    {
        question: "In JavaScript, what is a method?",
        answers: [
            { text: "A predefined function", correct: true},
            { text: " A loop inside an object ", correct: false},
            { text: "A function stored as an object property", correct: false},
            ],
    },
 
    {
        question: "How do you create a new object in JavaScript?",
        answers: [
            { text: "Object.create()", correct: true},
            { text: " new Object()", correct: false},
            { text: " Both A and B", correct: false},
            ],
    },

    {
        question: "What is the purpose of the this keyword in JavaScript objects?",
        answers: [
            { text: " Refer to the global object ", correct: false},
            { text: " Refer to the current object", correct: true},
            { text: "Create a new object", correct: false},
            ],
    },

    {
        question: "What is the result of accessing a property that doesn’t exist on an object?",
        answers: [
            { text: "null", correct: false},
            { text: " undefined ", correct: true},
            { text: " 0", correct: false},
            ],
    },

    {
        question: `What is the output of the following code snippet?
        let obj = { a: 1, b: 2 };
        console.log(obj.a);`,
        answers: [
            { text: " 1", correct: true},
            { text: " 2", correct: false},
            { text: "undefined", correct: false},
            ],
    },

    {
        question: `Consider the code:
        let person = { name: 'Alice', age: 25 };
        delete person.age; console.log(person.age);
        What is the output?`,
        answers: [
            { text: " 'Alice' ", correct: false},
            { text: "  25", correct: false},
            { text: " undefined ", correct: true},
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
    <a href="JS_Quiz.html"><button class="Levels">Levels</button></a>`;
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





