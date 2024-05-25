const quizData=[
    {
        question: `What is wrong with this function declaration?
        function power(base, exponent) {
        if (exponent == 0) return 1;
        else return base * power(base, exponent - 1);
        } console.log(power(2));`,
        answers: [
            { text: "It doesn't handle the case when exponent is not provided", correct: true},
            { text: "It returns the wrong value", correct: false},
            { text: "It causes an infinite loop", correct: false},
            ],
    },

    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        answers: [
            { text: "push()", correct: false},
            { text: "unshift()", correct: false},
            { text: "pop()", correct: true},
            ],
    },

    {
        question: "How do you find the length of an array in JavaScript?",
        answers: [
            { text: "array.size()", correct: true},
            { text: "array.length", correct: false},
            { text: "array.count()", correct: false},
            ],
    },

    {
        question: "What does the splice method do in an array?",
        answers: [
            { text: "Copies a portion of an array", correct: false},
            { text: "Concatenates arrays", correct: true},
            { text: "Changes the content of an array", correct: false},
            ],
    },

    {
        question: "In JavaScript, how can you check if a variable is an array?",
        answers: [
            { text: " typeof variable ", correct: true},
            { text: " variable.isArray()", correct: false},
            { text: "Array.isArray(variable)", correct: false},
            ],
    },

     {
        question: "Which of the following array methods in JavaScript does not change the original array?",
        answers: [
            { text: "sort()", correct: true},
            { text: "splice()", correct: false},
            { text: "forEach()", correct: false},
            ],
    },

    {
        question: `What is the output of this code snippet?
        let arr = [10, 20, 30, 40];
        let newArr = arr.map(x => x / 10);
        console.log(newArr);`,
        answers: [
            { text: "[1, 2, 3, 4]", correct: false},
            { text: "[10, 20, 30, 40]", correct: true},
            { text: " [0.1, 0.2, 0.3, 0.4]", correct: false},
            ],
    },

    {
        question: `What is the output of the following code?
        let fruits = ['apple', 'banana', 'mango'];
        console.log(fruits[1]);`,
        answers: [
            { text: "apple", correct: false},
            { text: "banana", correct: true},
            { text: " mango ", correct: false},
            ],
    },

    {
        question: `What will be the output of this code snippet?
        let numbers = [1, 2, 3];
        numbers[10] = 11;
        console.log(numbers.length);`,
        answers: [
            { text: " 3", correct: true},
            { text: "4 ", correct: false},
            { text: "11", correct: false},
            ],
    },

    {
        question: `Consider the following code:
        let arr = [1, 2, 3];
        arr[5] = 5;
        console.log(arr.filter(x => x === undefined).length);
        What is the output?`,
        answers: [
            { text: " 0", correct: false},
            { text: " 2", correct: false},
            { text: "3", correct: true},
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
    <a href="JS_Quiz_L5.html"><button class="Levels">Next-Level</button></a>`;
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


