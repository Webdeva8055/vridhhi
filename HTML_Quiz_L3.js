const quizData=[
    {
        question: "Apart from <i> tag, which of the following tag is used to render a text in italics? <___>",
        answers: [
            { text: "em", correct: true},
            { text: "strong", correct: false},
            { text: "b", correct: false},
            ],
    },

    {
        question: "What is the correct syntax to write an HTML comment?  <___>",
        answers: [
            { text: "!-- Comment --", correct: false},
            { text: "// Comment", correct: false},
            { text: "# Comment", correct: true},
            ],
    },

    {
        question: "Colors are defined in HTML using?",
        answers: [
            { text: "RGB Values", correct: true},
            { text: "HEX Values", correct: false},
            { text: "RGBA values", correct: false},
            ],
    },

    {
        question: "Which property is used to set colors in HTML?",
        answers: [
            { text: "color", correct: false},
            { text: "background-color", correct: true},
            { text: "font-color", correct: false},
            ],
    },

    {
        question: "What are the types of unordered lists in HTML?",
        answers: [
            { text: "Circle, square, disc. ", correct: true},
            { text: " Triangle, Square, disc.", correct: false},
            { text: "Triangle, Circle, Disc.", correct: false},
            ],
    },
    
    {
        question: "Which property is used to set border colors in HTML?",
        answers: [
            { text: " border-color", correct: true},
            { text: " border", correct: false},
            { text: " Both A and B", correct: false},
            ],
    },

    {
        question: "Which of the following tags is used to indicate the page’s start and endpoints?  <___>",
        answers: [
            { text: " body", correct: false},
            { text: " html ", correct: true},
            { text: "head ", correct: false},
            ],
    },

    {
        question: "Which of the following things are necessary to create an HTML page?",
        answers: [
            { text: "A text editor.", correct: false},
            { text: "Web Browser", correct: true},
            { text: "Both A and B", correct: false},
            ],
    },

    {
        question: " Which of the following is true about HTML tags?",
        answers: [
            { text: " Are case sensitive", correct: true},
            { text: " Are not case sensitive", correct: false},
            { text: " Are in uppercase ", correct: false},
            ],
    },

    {
        question: "Which HTML tag is called the root element of an HTML document?  <___>",
        answers: [
            { text: "html ", correct: false},
            { text: " body", correct: false},
            { text: " title ", correct: true},
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
    <a href="HTML_Quiz_L4.html"><button class="Levels">Next-Level</button></a>`;
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





