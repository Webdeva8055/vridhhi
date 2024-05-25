const quizData=[
    {
        question:`    What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            int a = 3;
            int res = a++ + ++a + a++ + ++a;
            printf("%d", res);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "12", correct: false},
            { text: " 24", correct: false},
            { text: "20", correct: true},
            ],
    },

    {
        question: `What will be the value of x in the following code snippet?
        #include <stdio.h>
        void solve() {
            int x = printf("Hello");
            printf(" %d", x);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "10", correct: false},
            { text: "5", correct: true},
            { text: "1", correct: false},
            ],
    },


    {
        question:`What does the following declaration indicate?
        int x: 8;`,
        answers: [
            { text: "x stores a value of 8", correct: false},
            { text: "x is an 8-bit integer.", correct: false},
            { text: "Both A and B.", correct: true},
            ],
    },

    {
        question: " Which of the following is the proper syntax for declaring macros in C?",
        answers: [
            { text: "#define long long ll", correct: true},
            { text: "#define ll long long", correct: false},
            { text: "#define long long", correct: false},
            ],
    },

    {
        question: "Which of the following is an exit controlled loop?",
        answers: [
            { text: " While loop ", correct: false},
            { text: " For loop. ", correct: true},
            { text: "do-while loop", correct: false},
            ],
    },

    {
        question: "What is the size of the int data type (in bytes) in C?",
        answers: [
            { text: "  4", correct: false},
            { text: " 8", correct: false},
            { text: " 2", correct: true},
            ],
    },

    {
        question:`    What will be the output of the following code snippet?
        #include <stdio.h>
        void swap(int *a, int *b) {
            int t = *a;
            *a = *b;
            *b = t;
        }
        void solve() {
            int a = 3, b = 5;
            swap(&a, &b);
            printf("%d %d", a, b);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 3 5", correct: false},
            { text: " 5 3", correct: true},
            { text: "5 5", correct: false},
            ],
    },

    {
        question: "How to declare a double-pointer in C?",
        answers: [
            { text: "int *val", correct: false},
            { text: " int **val ", correct: false},
            { text: " int &val ", correct: true},
            ],
    },


    {
        question:`What will be the output of the following code snippet?
        #include <stdio.h>
        #define VAL 3 * (2 + 6)
        void solve() {
            int a = 10 + VAL;
            printf("%d", a);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "104 ", correct: true},
            { text: "24", correct: false},
            { text: " 10 ", correct: false},
            ],
    },

    {
        question: `If p is an integer pointer with a value 1000, then what will the value of p + 5 be?`,
        answers: [
            { text: " 1020", correct: true},
            { text: " 1005", correct: false},
            { text: "1004", correct: false},
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
    <a href="C_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="C_Quiz_L3.html"><button class="Levels">Next-Level</button></a>`;
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







