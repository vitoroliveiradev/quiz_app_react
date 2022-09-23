import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Option from "../Option/Option";
import "./Question.css";

const Question = () => {
  const [quizstate, dispatch] = useContext(QuizContext);
  const currentQuestion = quizstate.questions[quizstate.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {
        answer: currentQuestion.answer,
        option,
      },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizstate.currentQuestion + 1} de {quizstate.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizstate.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
