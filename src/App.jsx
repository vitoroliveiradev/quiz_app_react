import './App.css'
import Welcome from './components/Welcome/Welcome'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import Question from "./components/Question/Question";
import GameOver from './components/GameOver/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // Embaralhar questions
    dispatch({type: "REORDER_QUESTIONS"});
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
