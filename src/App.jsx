import  { useState } from 'react';
import './App.css'
import Navber from './Components/Navber';
const quizData = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is closest to the sun?',
    choices: ['Venus', 'Earth', 'Mercury', 'Mars'],
    correctAnswer: 'Mercury',
  },
  {
    question: 'Which bangladesh second capital?',
    choices: ['Dhaka', 'barisal', 'chattogram', 'sylet'],
    correctAnswer: 'Dhaka',
  },
  {
    question: 'Which river is the longest in Bangladesh?',
    choices: ['Brahmaputra', 'padma', 'megna', 'jamuna'],
    correctAnswer: 'Brahmaputra',
  },
  {
    question: 'Who is the best footballer in the world 2022?',
    choices: ['Lionel Messi', 'Robert Lewandowski', 'megnaKylian Mbappé,', 'Cristiano Ronaldo'],
    correctAnswer: 'Lionel Messi',
  },
  
];
function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer) => {
    const currentQuizData = quizData[currentQuestion];

    if (answer === currentQuizData.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };



  return (
    <>
    <Navber></Navber>
    <div className=" bg-purple-100 text-yellow-600 text-center rounded-md md:max-w-4xl mx-auto ">
      <h1 className='text-4xl font-extrabold p-6'>Simple Quiz</h1>
      {showScore ? (
        <div id="result">
          <p>You scored {score} out of {quizData.length}!</p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className=' text-3xl' id="question">{quizData[currentQuestion].question}</div>
          <div id="choices">
            {quizData[currentQuestion].choices.map((choice, index) => (
              <div className='py-2' key={index}>
                <button className='btn btn-outline w-1/2  text-red-400' key={index} onClick={() => handleAnswer()}>
                {choice}
              </button>
              </div>
            ))}
          </div>
      <div className='mt-5 p-3'>
      <button className='btn w-1/2' onClick={() => handleAnswer(null)}>next</button>
      </div>
        </>
      )}
    </div>
         
    
    </>
  )
}

export default App
