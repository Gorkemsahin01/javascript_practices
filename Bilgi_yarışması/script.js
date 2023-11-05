const questions=[
    {
        question:"who is the most handsome man in the world",
        answers:[
            {text:"Görkem Şahin", correct: true},
            {text:"Brad Pitt", correct: false},
            {text:"Hanry Cavill", correct: false},
            {text:"Aslan Şahin", correct: false},
        ]
    },
{
    

    question:"Who is the biggest animal in the world",
    answers:[
        {text:"Görkem Şahin", correct:false},
        {text:"Dog", correct: false},
        {text:"T-rex", correct: true},
        {text:"Cat", correct: false},
    ]

},

{
    

    question:"What are the units that manage the physical memory that can be used by the computer's operating system called? ",
    answers:[
        {text:"CPU", correct: false},
        {text:"RAM", correct: true},
        {text:"HDD", correct: false},
        {text:"SSD", correct: false},
    ]
},

]

const questionElement=document.getElementById("question");
const answerButtton=document.getElementById("answer-button");
const nextButton= document.getElementById("next-btn");






let currentQuestionİndex=0;
let score=0;

function startQuiz(){
    currentQuestionİndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQestion();
}

function showQestion(){

    resetState();
let currentQuestion=questions[currentQuestionİndex];
let questionNo=currentQuestionİndex+ 1;
questionElement.innerHTML=questionNo+ "."+currentQuestion.question;
    



currentQuestion.answers.forEach(answers => {
    const button =document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtton.appendChild(button);
    
});
}

function resetState(){
    nextButton.style.display= "none";
    while(answerButttons.firstChild){
        answerButttons.removeChild(answerButttons.firstChild);
    }


}
startQuiz();