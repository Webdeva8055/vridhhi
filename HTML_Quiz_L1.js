const quizData=[
    {
        question: "What does the abbreviation HTML stand for?",
        answers: [
            { text: " HyperText Markup Language.", correct: true},
            { text: "HighText Markup Language.", correct: false},
            { text: "HyperText Markdown Language.", correct: false},
            ],
    },

    {
        question: "How many sizes of headers are available in HTML by default?",
        answers: [
            { text: " 5", correct: false},
            { text: "1", correct: false},
            { text: "3", correct: true},
            ],
    },

    {
        question: `What is the smallest header in HTML by default?`,
        answers: [
            { text: "h1", correct: true},
            { text: "h2", correct: false},
            { text: "h6", correct: false},
            ],
    },
 
    {
        question: "What are the types of lists available in HTML?",
        answers: [
            { text: "Ordered, Unordered Lists.", correct: false},
            { text: "Bulleted, Numbered Lists.", correct: true},
            { text: "Named, Unnamed Lists", correct: false},
            ],
    },

    {
        question: `How to create an ordered list in HTML?`,
        answers: [
            { text: "ul", correct: true},
            { text: "ol", correct: false},
            { text: " href", correct: false},
            ],
    },

    {
        question: "HTML files are saved by default with the extension?",
        answers: [
            { text: ".html", correct: true},
            { text: " .h", correct: false},
            { text: ".ht", correct: false},
            ],
    },

    {
        question: "We enclose HTML tags within?",
        answers: [
            { text: " { }", correct: false},
            { text: " < > ", correct: true},
            { text: "! ! ", correct: false},
            ],
    },

    {
        question: "What is the effect of the <b> tag?",
        answers: [
            { text: " It converts the text within it to bold font.  ", correct: false},
            { text: " It is used to write black-colored font. ", correct: true},
            { text: " It is used to change the font size. ", correct: false},
            ],
    },

    {
        question: "Which of the following is correct about HTML?",
        answers: [
            { text: "HTML uses User Defined Tags.", correct: true},
            { text: " HTML uses tags defined within the language. ", correct: false},
            { text: "Both A and B. ", correct: false},
            ],
    },

    {
        question: "How to display preformatted text in HTML?",
        answers: [
            { text: " p ", correct: false},
            { text: " pre", correct: false},
            { text: " hr ", correct: true},
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
    <a href="HTML_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="HTML_Quiz_L2.html"><button class="Levels">Next-Level</button></a>`;
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






































