const quizData=[
    {
        question: "What is the range of values that can be stored by int datatype in C?",
        answers: [
            { text: "-(2^31) to (2^31) - 1", correct: true},
            { text: "-256 to 255", correct: false},
            { text: "0 to (2^31) - 1", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        int main() {
            int a = 3, b = 5;
            int t = a;
            a = b;
            b = t;
            printf("%d %d", a, b);
            return 0;
        }`,
        answers: [
            { text: " 3 5", correct: true},
            { text: "3 3", correct: false},
            { text: "5 3", correct: false},
            ],
    },

    {
        question: `How is an array initialized in C language?`,
        answers: [
            { text: " int a[3] = {1, 2, 3};", correct: true},
            { text: "int a = {1, 2, 3};", correct: false},
            { text: "int a[] = new int[3]", correct: false},
            ],
    },

    {
        question: `What is the output of the following code snippet?  #include <stdio.h>
        int main() {
            int a[] = {1, 2, 3, 4};
            int sum = 0;
            for(int i = 0; i < 4; i++) {
                sum += a[i];
            }
            printf("%d", sum);
            return 0;
        }`,
        answers: [
            { text: " 1", correct: false},
            { text: "4", correct: true},
            { text: " 20", correct: false},
            ],
    },
   
    {
        question: ` What is the output of the following code snippet?
        int main() {
            int sum = 2 + 4 / 2 + 6 * 2;
            printf("%d", sum);
            return 0;
        }`,
        answers: [
            { text: "2", correct: true},
            { text: "15", correct: false},
            { text: " 16", correct: false},
            ],
    },
 
    {
        question: "How is the 3rd element in an array accessed based on pointer notation?",
        answers: [
            { text: " *a + 3", correct: true},
            { text: " *(a + 3)", correct: false},
            { text: "*(*a + 3)", correct: false},
            ],
    },
   
    {
        question: "How are String represented in memory in C?",
        answers: [
            { text: "An array of characters.", correct: false},
            { text: "The object of some class.", correct: true},
            { text: " Same as other primitive data types.", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            int a[] = {1, 2, 3, 4, 5};
            int sum = 0;
            for(int i = 0; i < 5; i++) {
                if(i % 2 == 0) {
                    sum += *(a + i);
                }
                else {
                    sum -= *(a + i);
                }
            }
            printf("%d", sum);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 2 ", correct: false},
            { text: " 15 ", correct: true},
            { text: "Syntax Error ", correct: false},
            ],
    },


    {
        question: `What will be the output of the following code snippet?
        #include <stdio.h>
        void solve() {
            int first = 10, second = 20;
            int third = first + second;
            {
                int third = second - first;
                printf("%d ", third);
            }
            printf("%d", third);
        }
        int main() {
            solve();
            return 0;
        }`,
        answers: [
            { text: " 10 30", correct: true},
            { text: "30 10 ", correct: false},
            { text: " 10 20", correct: false},
            ],
    },

    {
        question: "What is the disadvantage of arrays in C?",
        answers: [
            { text: " The amount of memory to be allocated should be known beforehand. ", correct: false},
            { text: "  Elements of an array can be accessed in constant time", correct: false},
            { text: "Elements are stored in contiguous memory blocks ", correct: true},
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
    <a href="C_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="C_Quiz_L2.html"><button class="Levels">Next-Level</button></a>`;
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






































