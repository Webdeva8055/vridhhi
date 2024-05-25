const quizData=[
    {
        question: " Which of the following tags doesn’t require a closing tag?  <___>",
        answers: [
            { text: "br", correct: false},
            { text: "hr", correct: false},
            { text: "Both A and B", correct: true},
            ],
    },

    {
        question: "What is meant by an empty tag in HTML?",
        answers: [
            { text: "There is no such concept of an empty tag in HTML", correct: false},
            { text: "An empty tag does not require a closing tag", correct: true},
            { text: "An empty tag cannot have any content within it", correct: false},
            ],
    },

    {
        question: "What are the attributes used to change the size of an image?",
        answers: [
            { text: "Width and height", correct: false},
            { text: "Big and Small", correct: false},
            { text: "Top and bottom", correct: true},
            ],
    },

    {
        question: "Which attribute is used to provide a unique name to an HTML element?",
        answers: [
            { text: "id", correct: true},
            { text: "class", correct: false},
            { text: "type", correct: false},
            ],
    },

    {
        question: "What is the function of the HTML style attribute?",
        answers: [
            { text: " It is used to add styles to an HTML element.", correct: false},
            { text: " It is used to uniquely identify some specific styles of some element. ", correct: true},
            { text: "Both A and B.", correct: false},
            ],
    },

    {
        question: "Which of the following is the correct syntax for using the HTML style attribute?  <___>",
        answers: [
            { text: "tagname style = “property: value;”", correct: false},
            { text: "tagname style = “property;”", correct: false},
            { text: "tagname style ", correct: true},
            ],
    },

    {
        question: "Which HTML element is used to define description data?  <___>",
        answers: [
            { text: " li ", correct: false},
            { text: " ol", correct: true},
            { text: " dd ", correct: false},
            ],
    },

    {
        question: "Which of the following properties is used to change the font of text?",
        answers: [
            { text: " font-family", correct: false},
            { text: " font-size", correct: false},
            { text: " text-align ", correct: true},
            ],
    },

    {
        question: " How are quotations defined in HTML?  <___>",
        answers: [
            { text: " quote ", correct: true},
            { text: " block", correct: false},
            { text: " blockquote ", correct: false},
            ],
    },

    {
        question: "What tag is used to render an image on a webpage?  <___>",
        answers: [
            { text: " img ", correct: true},
            { text: " src", correct: false},
            { text: " image", correct: false},
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
    <a href="HTML_Quiz_L3.html"><button class="Levels">Next-Level</button></a>`;
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











