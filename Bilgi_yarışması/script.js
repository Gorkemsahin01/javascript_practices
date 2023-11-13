const questions = [
  {
    question: 'who is the most handsome man in the world ?',
    answers: [
      { text: 'Görkem Şahin', correct: true },
      { text: 'Brad Pitt', correct: false },
      { text: 'Hanry Cavill', correct: false },
      { text: 'Aslan Şahin', correct: false },
    ],
  },
  {
    question: 'Who is the biggest animal in the world ?',
    answers: [
      { text: 'Görkem Şahin', correct: false },
      { text: 'Dog', correct: false },
      { text: 'T-rex', correct: true },
      { text: 'Cat', correct: false },
    ],
  },

  {
    question: "What are the units that manage the physical memory that can be used by the computer's operating system called ? ",
    answers: [
      { text: 'CPU', correct: false },
      { text: 'RAM', correct: true },
      { text: 'HDD', correct: false },
      { text: 'SSD', correct: false },
    ],
  },
]

const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-button')
const nextButton = document.getElementById('#next-btn')

let a = questionElement.innerHTML
a = questions[0]
console.log(a)

showquestion()

function showquestion() {
  questionElement.innerHTML = questions[0].question
}

let b = questions[0].answers()

console.log(b)

showAnswers()

function showAnswers() {
  answerButton.innerHTML = b.text
}
