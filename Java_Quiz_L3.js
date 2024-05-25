const quizData=[
    {
        question: "...used to store homogenous data in contigous memory location",
        answers: [
            { text: "array", correct: true},
            { text: "objects", correct: false},
            { text: "switch statements", correct: false},
            ],
    },
    
    {
        question: "initialization of array in java",
        answers: [
            { text: "Array array_name[size];", correct: false},
            { text: "String char[]; char=5;", correct: false},
            { text: "int []num; num = new num[5];", correct: true},
            ],
    },

    {
        question: "int arr[][];",
        answers: [
            { text: "Two d array", correct: true},
            { text: "One d array", correct: false},
            { text: "its not a array", correct: false},
            ],
    },

    {
        question: "Is not used to take user input",
        answers: [
            { text: "Scanner", correct: false},
            { text: "ReadUser", correct: true},
            { text: "BufferedReader", correct: false},
            ],
    },

    {
        question: "public static void main(String args[])",
        answers: [
            { text: " all of the below ", correct: true},
            { text: " main() of java program", correct: false},
            { text: " program entery section", correct: false},
            ],
    },
    
    {
        question: "Arguments i.e. passed at time of running java program is",
        answers: [
            { text: " command line arguments", correct: true},
            { text: " not a command line argument", correct: false},
            { text: " none of above", correct: false},
            ],
    },

    {
        question: "Arguments supplied to command line are...type arguments",
        answers: [
            { text: " int", correct: false},
            { text: " String ", correct: true},
            { text: " boolean ", correct: false},
            ],
    },

    {
        question: "Method of not Scanner class",
        answers: [
            { text: "nextInt()", correct: false},
            { text: "hasNEXT()", correct: true},
            { text: "nextShort()", correct: false},
            ],
    },

    {
        question: "Extention for java file",
        answers: [
            { text: " .java", correct: true},
            { text: " .exe", correct: false},
            { text: " .class ", correct: false},
            ],
    },

    {
        question: "Extension for compiled java file",
        answers: [
            { text: " .java ", correct: false},
            { text: "  .exe", correct: false},
            { text: " .class ", correct: true},
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
    <a href="Java_Quiz_L4.html"><button class="Levels">Next-Level</button></a>`;
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