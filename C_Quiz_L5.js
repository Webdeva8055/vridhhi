const quizData=[
    {
        question:`What is the output of the following code snippet?
        #include <stdio.h>
        #include<stdlib.h>
        void set(int *to) {
            to = (int*)malloc(5 * sizeof(int));
        }
        void solve() {
            int *ptr;
            set(ptr);
            *ptr = 10;
            printf("%d", *ptr);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "10", correct: true},
            { text: "Garbage Value", correct: false},
            { text: "The program may crashd", correct: false},
            ],
    },
    
    {
        question: " Which of the following will occur if we call the free() function on a NULL pointer?",
        answers: [
            { text: " Compilation Error.", correct: false},
            { text: "Runtime Error.", correct: false},
            { text: "Undefined Behaviour", correct: true},
            ],
    },

    {
        question: "Which of the following should be used to free memory from a pointer allocated using the “new” operator?",
        answers: [
            { text: " free()", correct: true},
            { text: "delete", correct: false},
            { text: "realloc()", correct: false},
            ],
    },

    {
        question: "Which data structure is used to handle recursion in C?",
        answers: [
            { text: "Stack.", correct: false},
            { text: "Queue.", correct: true},
            { text: "Deque.", correct: false},
            ],
    },

    {
        question:` What will be the output of the following code snippet?
        #include <stdio.h>
        #define CUBE(x) x * x * x
        void solve() {
            int ans = 216 / CUBE(3);
            printf("%d", ans);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "8", correct: true},
            { text: "648", correct: false},
            { text: "72", correct: false},
            ],
    },
 
    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        struct School {
            int age, rollNo;
        };
        void solve() {
            struct School sc;
            sc.age = 19;
            sc.rollNo = 82;
            printf("%d %d", sc.age, sc.rollNo);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 19 82", correct: true},
            { text: " Compilation Error", correct: false},
            { text: " 82 19", correct: false},
            ],
    },

    {
        question: " Which of the following is not true about structs in C?",
        answers: [
            { text: " No Data Hiding.", correct: false},
            { text: " Functions are allowed inside structs.", correct: true},
            { text: " Constructors are not allowed inside structs. ", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        struct School {
            int age, rollNo;
        };
        void solve() {
            struct School sc;
            sc.age = 19;
            sc.rollNo = 82;
            printf("%d", (int)sizeof(sc));
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "1 ", correct: false},
            { text: " 4", correct: true},
            { text: "8", correct: false},
            ],
    },

    {
        question:` What will be the output of the following code snippet?
        #include <stdio.h>
        union School {
            int age, rollNo;
            double marks;
        };
        void solve() {
            union School sc;
            sc.age = 19;
            sc.rollNo = 82;
            sc.marks = 19.04;
            printf("%d", (int)sizeof(sc));
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 4 ", correct: true},
            { text: " 8 ", correct: false},
            { text: " 16 ", correct: false},
            ],
    },

    {
        question: `    What will be the output of the following code snippet?
        #include <stdio.h>
        #include<string.h>
        void solve() {
            char s[] = "Hello";
            printf("%s ", s);
            char t[40];
            strcpy(t, s);
            printf("%s", t);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "Hello Hello", correct: false},
            { text: " Hello", correct: false},
            { text: " Compilation Error ", correct: true},
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
    <a href="C_Quiz.html"><button class="Levels">Levels</button></a>`;
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














