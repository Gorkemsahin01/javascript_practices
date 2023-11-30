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

// const questionElement = document.getElementById('question')
// const answerButton = document.getElementById('answer-button')
// const nextButton = document.getElementsByClassName('next-btn')

// const answer1 = document.getElementsByClassName('btn1')
// const answer2 = document.getElementsByClassName('btn2')
// const answer3 = document.getElementsByClassName('btn3')
// const answer4 = document.getElementsByClassName('btn4')

// console.log(answer1[0].innerHTML)
// console.log(answer2[0].innerHTML)
// console.log(answer3[0].innerHTML)
// console.log(answer4[0].innerHTML)

// let a = questionElement.innerHTML
// a = questions[0]
// console.log(a)

// showquestion()

// function showquestion() {
//   questionElement.innerHTML = questions[0].question
// }

// let firstAnswer = questions[0].answers[0].text
// answer1[0].innerHTML = firstAnswer

// let secondAnswer = questions[0].answers[1].text
// answer2[0].innerHTML = secondAnswer

// let thirdAnswer = questions[0].answers[2].text
// answer3[0].innerHTML = thirdAnswer

// let fourtAnswer = questions[0].answers[3].text
// answer4[0].innerHTML = fourtAnswer

// nextButton.addEventListener('click', () => {
//   const selectedAnswer = questions[currentQuestionIndex].answers[0]

//   if (selectedAnswer.correct) {
//     console.log('Correct!')
//     console.log('Incorrect!')
//   }

//   currentQuestionIndex++

//   if (currentQuestionIndex < questions.length) {
//     showQuestion()
//   } else {
//     console.log('Quiz finished!')
//   }
// })

const questionElement = document.getElementById('question')
const answerButtons = document.querySelectorAll('.btn1, .btn2, .btn3, .btn4')
const nextButton = document.querySelector('.next-btn')

let currentQuestionIndex = 0

showQuestion()

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex]
  questionElement.innerHTML = currentQuestion.question

  currentQuestion.answers.forEach((answer, index) => {
    answerButtons[index].innerHTML = answer.text
    answerButtons[index].addEventListener('click', () => {
      checkAnswer(answer.correct)
    })
  })
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    // Handle correct answer
    console.log('Correct!')
  } else {
    // Handle wrong answer
    console.log('Wrong!')
  }

  // Move to the next question
  currentQuestionIndex++

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    showQuestion()
  } else {
    // No more questions, quiz is finished
    console.log('Quiz finished!')
  }
}

// Add event listener for the next button
nextButton.addEventListener('click', () => {
  // Move to the next question
  currentQuestionIndex++

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    showQuestion()
  } else {
    // No more questions, quiz is finished
    console.log('Quiz finished!')
  }
})
