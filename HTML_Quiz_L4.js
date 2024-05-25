const quizData=[
    {
        question: "How is black color represented in terms of RGB values?",
        answers: [
            { text: "RGB(0, 0, 0)", correct: true},
            { text: "RGB(100, 100, 100)", correct: false},
            { text: "RGB(100, 100, 0)", correct: false},
            ],
    },

    {
        question: "What does the Alpha value in RGBA represent?",
        answers: [
            { text: "Opacity value for a color.", correct: false},
            { text: "The shade of a color.", correct: false},
            { text: "Both A and B.", correct: true},
            ],
    },

    {
        question: "What does the Alpha value of 0.0 represent?",
        answers: [
            { text: "Fully Opaque.", correct: true},
            { text: "Fully Transparent.", correct: false},
            { text: "50% transparent.", correct: false},
            ],
    },

    {
        question: "How to set a font for a whole page?  <___>",
        answers: [
            { text: "targetfont", correct: false},
            { text: "defaultfont", correct: true},
            { text: "font", correct: false},
            ],
    },

    {
        question: "The CSS inside HTML elements used alongside style attribute is called?",
        answers: [
            { text: " Inline CSS ", correct: true},
            { text: " Internal CSS", correct: false},
            { text: "  External CSS", correct: false},
            ],
    },
  
    {
        question: "Which of the following colors contain equal amounts of RBG?",
        answers: [
            { text: "White", correct: true},
            { text: " Gray", correct: false},
            { text: " Black", correct: false},
            ],
    },

    {
        question: " What is the speciality about the <small> and <big> tags in HTML?",
        answers: [
            { text: "They work on anything.", correct: false},
            { text: "They can be used for text only.", correct: true},
            { text: " They can be repeated.", correct: false},
            ],
    },

    {
        question: "Which of the following tags is used to add a row to a table in HTML?  <___>",
        answers: [
            { text: " tr", correct: false},
            { text: " td ", correct: true},
            { text: "  th ", correct: false},
            ],
    },

    {
        question: "Which property allows an image link to show a text label?",
        answers: [
            { text: "  alt", correct: true},
            { text: " str ", correct: false},
            { text: "alternative", correct: false},
            ],
    },

    {
        question: `If a background image is smaller than the screen on which it is being displayed, what will occur on the webpage?`,
        answers: [
            { text: " The blank space will be shown in black. ", correct: false},
            { text: "   The image will be stretched", correct: false},
            { text: " The image will be repeated ", correct: true},
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
    <a href="HTML_Quiz_L5.html"><button class="Levels">Next-Level</button></a>`;
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





