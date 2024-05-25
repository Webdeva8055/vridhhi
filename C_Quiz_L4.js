const quizData=[
    {
        question: `    What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            int x = 1, y = 2;
            printf(x > y ? "Greater" : x == y ? "Equal" : "Lesser");
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "Greater", correct: true},
            { text: "Lesser", correct: false},
            { text: "Equal", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            int n = 24;
            int l = 0, r = 100, ans = n;
            while(l <= r) {
                int mid = (l + r) / 2;
                if(mid * mid <= n) {
                    ans = mid;
                    l = mid + 1;
                }
                else {
                    r = mid - 1;
                }
            }
            printf("%d", ans);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "5", correct: false},
            { text: "4", correct: false},
            { text: "3", correct: true},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            printf("%d ", 9 / 2);
            printf("%f", 9.0 / 2);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "4 4.5000", correct: true},
            { text: "4 4.000", correct: false},
            { text: "4.5000 4.5000", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            int x = 2;
            printf("%d", (x << 1) + (x >> 1));
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "5", correct: false},
            { text: "4", correct: true},
            { text: "2", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        #define VAL 5
        int getInput() {
            return VAL;
        }
        void solve() {
            const int x = getInput();
            printf("%d", x);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: "5 ", correct: true},
            { text: " Garbage Value", correct: false},
            { text: " Compilation Error", correct: false},
            ],
    },

    {
        question: "How to find the length of an array in C?",
        answers: [
            { text: "sizeof(a)", correct: true},
            { text: " sizeof(a[0])", correct: false},
            { text: "sizeof(a) / sizeof(a[0])", correct: false},
            ],
    },

    {
        question: "Which of the following is not a storage class specifier in C?",
        answers: [
            { text: "volatile", correct: false},
            { text: "extern", correct: true},
            { text: " typedef", correct: false},
            ],
    },

    {
        question:`What will be the output of the following code snippet?
        #include <stdio.h>
        void solve(int x) {
            if(x == 0) {
                printf("%d ", x);
                return;
            }
            printf("%d ", x);
            solve(x - 1);
            printf("%d ", x);
        }
        int main() {
            solve(3);
            return 0;
        }`,
        answers: [
            { text: " 3 2 1 0 1 2 3 ", correct: false},
            { text: "3 2 1 0 ", correct: true},
            { text: " 0 1 2 3 ", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        int search(int l, int r, int target, int a[]) {
            int mid = (l + r) / 2;
            if(a[mid] == target) {
                return mid;
            }
            else if(a[mid] < target) {
                return search(mid + 1, r, target, a);
            }
            else {
                return search(0, mid - 1, target, a);
            }
        }
        void solve() {
            int a[] = {1, 2, 3, 4, 5};
            printf("%d", search(0, 5, 3, a));
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 2", correct: true},
            { text: " 3 ", correct: false},
            { text: "4", correct: false},
            ],
    },

    {
        question:` What will be the output of the following code snippet?
        #include <stdio.h>
        int get(int n) {
            if(n <= 1) {
                return n;
            }
            return get(n - 1) + get(n - 2);
        }
        void solve() {
            int ans = get(6);
            printf("%d", ans);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 5 ", correct: false},
            { text: "  1", correct: false},
            { text: "0", correct: true},
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
    <a href="C_Quiz_L5.html"><button class="Levels">Next-Level</button></a>`;
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






