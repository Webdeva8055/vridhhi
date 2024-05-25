const quizData=[
    {
        question: `What will be the output of the following code snippet?
        example = ["Sunday", "Monday", "Tuesday", "Wednesday"];
        del example[2]
        print(example)`,
        answers: [
            { text: " ['Sunday', 'Monday', 'Tuesday', 'Wednesday']", correct: false},
            { text: "['Sunday', 'Monday', 'Wednesday']", correct: false},
            { text: "['Monday', 'Tuesday', 'Wednesday']", correct: true},
            ],
    },
    
    {
        question: " Which of the following is the proper syntax to check if a particular element is present in a list?",
        answers: [
            { text: "if ele in list", correct: false},
            { text: "if not ele not in list", correct: true},
            { text: "Both A and B", correct: false},
            ],
    },

    {
        question: `What will be the type of the variable sorted_numbers in the below code snippet?
        numbers = (4, 7, 19, 2, 89, 45, 72, 22)
        sorted_numbers = sorted(numbers)
        print(sorted_numbers)`,
        answers: [
            { text: "List", correct: false},
            { text: "Tuple", correct: false},
            { text: "String", correct: true},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        def thrive(n):
         if n % 15 == 0:
           print("thrive", end = “ ”)
         elif n % 3 != 0 and n % 5 != 0:
           print("neither", end = “ ”)
         elif n % 3 == 0:
           print("three", end = “ ”)
         elif n % 5 == 0:
           print("five", end = “ ”)
        thrive(35)
        thrive(56)
        thrive(15)
        thrive(39)`,
        answers: [
            { text: "five neither thrive three", correct: true},
            { text: "five neither three thrive", correct: false},
            { text: "three three three three", correct: false},
            ],
    },

    {
        question:`What will be the output of the following code snippet?
        numbers = (4, 7, 19, 2, 89, 45, 72, 22)
        sorted_numbers = sorted(numbers)
        even = lambda a: a % 2 == 0
        even_numbers = filter(even, sorted_numbers)
        print(type(even_numbers))`,
        answers: [
            { text: "  filter ", correct: false},
            { text: "int", correct: true},
            { text: "list", correct: false},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        def check(a):
           print("Even" if a % 2 == 0 else "Odd")
           
        check(12)`,
        answers: [
            { text: "Even", correct: false},
            { text: "Odd", correct: false},
            { text: " Error", correct: true},
            ],
    },

    {
        question: `What will be the output of the following code snippet?
        numbers = (4, 7, 19, 2, 89, 45, 72, 22)
        sorted_numbers = sorted(numbers)
        odd_numbers = [x for x in sorted_numbers if x % 2 != 0]
        print(odd_numbers)`,
        answers: [
            { text: " [7, 19, 45, 89] ", correct: false},
            { text: " [2, 4, 22, 72] ", correct: true},
            { text: " [4, 7, 19, 2, 89, 45,72, 22] ", correct: false},
            ],
    },

    {
        question:`What will be the output of the following code snippet?
        example = ["Sunday", "Monday", "Tuesday", "Wednesday"];
        print(example[-3:-1])`,
        answers: [
            { text: " ['Monday', 'Tuesday']", correct: false},
            { text: "['Sunday', 'Monday']", correct: false},
            { text: " ['Tuesday', 'Wednesday'] ", correct: true},
            ],
    },

    {
        question:`What will be the output of the following code snippet?
        def is_even(number):
          message =  f"{number} is an even number" if number % 2 == 0 else  f"{number} is an odd number"
         return message
        print(is_even(54))`,
        answers: [
            { text: "54 is an even number", correct: true},
            { text: " 54 is an odd number", correct: false},
            { text: "number is an even number ", correct: false},
            ],
    },

    {
        question:`What will be the output of the following code snippet?
        dict1 = {'first' : 'sunday', 'second' : 'monday'}
        dict2 = {1: 3, 2: 4}
        dict1.update(dict2)
        print(dict1)`,
        answers: [
            { text: " {'first': 'sunday', 'second': 'monday', 1: 3, 2: 4}", correct: true},
            { text: "{'first': 'sunday', 'second': 'monday'}", correct: false},
            { text: "{1: 3, 2: 4}", correct: false},
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
    <a href="Py_Quiz_L3.html"><button class="Levels">Next-Level</button></a>`;
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














