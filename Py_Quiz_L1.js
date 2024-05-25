const quizData=[
    {
        question: "What is the maximum length of a Python identifier?",
        answers: [
            { text: "16", correct: true},
            { text: "128", correct: false},
            { text: "No fixed length is specified", correct: false},
            ],
    },

    {
        question: "output of following code ? print(2**3 + (5 + 6)**(1 + 1))",
        answers: [
            { text: "129", correct: false},
            { text: "121", correct: false},
            { text: "None of the above", correct: true},
            ],
    },


    {
        question: `What will be the datatype of the var in the below code snippet?
        var = 10
        print(type(var))
        var = "Hello"
        print(type(var))`,
        answers: [
            { text: "str and int", correct: true},
            { text: "int and int", correct: false},
            { text: "str and str", correct: false},
            ],
    },
    
    {
        question: "How is a code block indicated in Python?",
        answers: [
            { text: " Brackets", correct: false},
            { text: "Indentation", correct: true},
            { text: " Key.", correct: false},
            ],
    },
 
    {
        question: `What will be the output of the following code snippet?
        a = [1, 2, 3]
        a = tuple(a)
        a[0] = 2
        print(a)`,
        answers: [
            { text: "[2, 2, 3]", correct: true},
            { text: "(2, 2, 3)", correct: false},
            { text: " (1, 2, 3)", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        print(type(5 / 2))
        print(type(5 // 2))`,
        answers: [
            { text: " float and int", correct: true},
            { text: " int and float", correct: false},
            { text: " float and float", correct: false},
            ],
    },


    {
        question: `What will be the output of the following code snippet?
        a = [1, 2, 3, 4, 5]
        sum = 0
        for ele in a:
           sum += ele 
        print(sum)`,
        answers: [
            { text: "15", correct: false},
            { text: "0", correct: true},
            { text: " 20 ", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        a = 3
        b = 1 
        print(a, b)
        a, b = b, a 
        print(a, b)`,
        answers: [
            { text: " 3 1    1 3  ", correct: false},
            { text: "3 1    3 1", correct: true},
            { text: " 1 3    1 3", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        a = [1, 2]
        print(a * 3)`,
        answers: [
            { text: "Error ", correct: true},
            { text: "[1, 2] ", correct: false},
            { text: " [1, 2, 1, 2]", correct: false},
            ],
    },

    {
        question: " Which of the following types of loops are not supported in Python?",
        answers: [
            { text: "for ", correct: false},
            { text: " while", correct: false},
            { text: " None of the above ", correct: true},
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
    <a href="Py_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="Py_Quiz_L2.html"><button class="Levels">Next-Level</button></a>`;
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



























