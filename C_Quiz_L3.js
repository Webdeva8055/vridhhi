const quizData=[
    {
        question: "Which of the following are not standard header files in C?",
        answers: [
            { text: "stdio.h", correct: true},
            { text: "stdlib.h", correct: false},
            { text: "conio.h", correct: false},
            ],
    },

    {
        question:  `What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            printf("%d %d", (023), (23));
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 023 23", correct: false},
            { text: "23 23", correct: false},
            { text: "19 23", correct: true},
            ],
    },

    {
        question:`What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            printf("%d %d %d", (076), (28), (0x87));
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "76 28 87", correct: true},
            { text: "076 28 0x87", correct: false},
            { text: "62 28 135", correct: false},
            ],
    },

    {
        question:`What will be the result of the following code snippet?
        #include <stdio.h>
        void solve() {
            char ch[10] = "abcdefghij";
            int ans = 0;
            for(int i = 0; i < 10; i++) {
                ans += (ch[i] - 'a');
            }
            printf("%d", ans);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "45", correct: false},
            { text: "36", correct: true},
            { text: "20", correct: false},
            ],
    },

    {
        question: `   What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            bool ok = false;
            printf(ok ? "YES" : "NO");
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " Yes ", correct: true},
            { text: " No", correct: false},
            { text: " Compilation Error", correct: false},
            ],
    },

    {
        question: "In which of the following languages is function overloading not possible?",
        answers: [
            { text: " C", correct: true},
            { text: "C++", correct: false},
            { text: "Java", correct: false},
            ],
    },

    {
        question: " Which of the following function is used to open a file in C++?",
        answers: [
            { text: "fopen", correct: false},
            { text: "fclose", correct: true},
            { text: "fseek ", correct: false},
            ],
    },

    {
        question: " Which of the following are correct file opening modes in C?",
        answers: [
            { text: "r", correct: false},
            { text: "rb", correct: true},
            { text: "w", correct: false},
            ],
    },

    {
        question: "What is the return type of the fopen() function in C?",
        answers: [
            { text: " Pointer to a FILE object.", correct: true},
            { text: "Pointer to an integer.", correct: false},
            { text: "An integer. ", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            int ch = 2;
            switch(ch) {
                case 1: printf("1 ");
                case 2: printf("2 ");
                case 3: printf("3 ");
                default: printf("None");
            }
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 1 2 3 None", correct: false},
            { text: "  2", correct: false},
            { text: " 2 3 None ", correct: true},
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
    <a href="C_Quiz_L4.html"><button class="Levels">Next-Level</button></a>`;
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







