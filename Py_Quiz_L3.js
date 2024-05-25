const quizData=[
    {
        question:`What will be the output of the following code snippet?
        s = {1, 2, 3, 3, 2, 4, 5, 5}
        print(s)`,
        answers: [
            { text: "{1, 2, 3, 3, 2, 4, 5, 5}", correct: true},
            { text: "{1, 2, 3, 4, 5}", correct: false},
            { text: "None", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        a = {'Hello':'World', 'First': 1}
        b = {val: k for k , val in a.items()}
        print(b)`,
        answers: [
            { text: "{'Hello':'World', 'First': 1}", correct: false},
            { text: "{'World': 'Hello', 1: 'First'}", correct: false},
            { text: "Can be both A or B", correct: true},
            ],
    },

    {
        question: "Which of the following functions converts date to corresponding time in Python?",
        answers: [
            { text: "strptime()", correct: true},
            { text: "strftime()", correct: false},
            { text: "Both A and B", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        word = "Python Programming"
        n = len(word)
        word1 = word.upper()
        word2 = word.lower()
        converted_word = ""
        for i in range(n):
         if i % 2 == 0:
           converted_word += word2[i]
         else:
           converted_word += word1[i]
        print(converted_word)`,
        answers: [
            { text: "pYtHoN PrOgRaMmInG", correct: false},
            { text: "Python Programming", correct: true},
            { text: "python programming", correct: false},
            ],
    },

    {
        question:`What will be the output of the following code snippet?
        a = "4, 5"
        nums = a.split(',')
        x, y = nums
        int_prod = int(x) * int(y)
        print(int_prod)`,
        answers: [
            { text: " 20", correct: true},
            { text: "45", correct: false},
            { text: "54", correct: false},
            ],
    },
  
    {
        question: `What will be the output of the following code snippet?
        square = lambda x: x ** 2
        a = []
        for i in range(5):
           a.append(square(i))
           
        print(a)`,
        answers: [
            { text: "  [0, 1, 4, 9, 16]", correct: true},
            { text: " [1, 4, 9, 16, 25]", correct: false},
            { text: " [0, 1, 2, 3, 4]", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        def tester(*argv):
           for arg in argv:
               print(arg, end = ' ')
        tester('Sunday', 'Monday', 'Tuesday', 'Wednesday')`,
        answers: [
            { text: " Sunday", correct: false},
            { text: "  Wednesday", correct: true},
            { text: " Sunday Monday Tuesday Wednesday", correct: false},
            ],
    },

    {
        question: "As what datatype are the *args stored, when passed into a function?",
        answers: [
            { text: "List.", correct: false},
            { text: "Tuple.", correct: true},
            { text: "Dictionary.", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        def tester(**kwargs):
           for key, value in kwargs.items():
               print(key, value, end = " ")
        tester(Sunday = 1, Monday = 2, Tuesday = 3, Wednesday = 4)`,
        answers: [
            { text: "Sunday 1 Monday 2 Tuesday 3 Wednesday 4", correct: true},
            { text: "  Sunday 1", correct: false},
            { text: " Wednesday 4 ", correct: false},
            ],
    },

    {
        question: "As what datatype are the *kwargs stored, when passed into a function?",
        answers: [
            { text: "Lists.", correct: false},
            { text: "Tuples.", correct: false},
            { text: " Dictionary. ", correct: true},
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
    <a href="Py_Quiz.html"><button class="Levels">Levels</button></a>
    <a href="Py_Quiz_L4.html"><button class="Levels">Next-Level</button></a>`;
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



