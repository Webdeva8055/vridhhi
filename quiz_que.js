const quizData=[
    {
        question: "ky khato tu?",
        options: [
            "AAm",
            "Softy",
            "red lip",
        ],
        correct:1,
    },
    
    {
        question: "who is slut ?",
        options: [
             "kenzie",
            "mansi",
            "social media star",
        ],
    correct:2,
    },

    {
        question: "who is your love ?",
        options: [
             "pihu",
            "anjubai",
            "vriddhi",
        ],
    correct:0,
    },

    
];




const answerElm=document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3] = 
        document.querySelectorAll(
            "#question , .option_1 , .option_2 , .option_3"
            );

const submitbtn = document.querySelector("#submit");


let currentQuiz = 0;
let score = 0;


const loadQuiz=()=>{
    const {question, options} =quizData[currentQuiz];
    console.log(question);
    questionElm.innerText=question;

    options.forEach((curOption,index)=> window[`option_${index + 1}`].innerText=curOption)
}


loadQuiz();


const getSelectedOption= () =>{
    // let ans_index;
    // answerElm.forEach((curOption,index)=>{
    //     if(curOption.checked){
    //         ans_index=index;
    //     }
    // });
    // return ans_index;

    let answerElement= Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswers =() =>{
    return answerElm.forEach((curElem)=>curElem.checked = false);
};

submitbtn.addEventListener('click',()=>{
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    currentQuiz++;
    

    if(currentQuiz < quizData.length){
        deselectedAnswers();
        loadQuiz();
    }

});


