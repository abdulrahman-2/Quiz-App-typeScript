import React from "react";
import { QuestionProps } from "../../types/types";
import { ButtonWrapper } from "../../pages/quizPage/QuizPage.style";

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <>
      <h3>
        Question {questionNr} / {totalQuestions}
      </h3>
      <div className="question">
        <h2 className="quest-title">{question}</h2>
        <ul className="quest-list">
          {answers.map((answer: string, index: number) => (
            <ButtonWrapper
              key={index}
              $correct={userAnswer?.correctAnswer === answer}
              $userClicked={userAnswer?.answer === answer}
            >
              <li>
                <button disabled={!!userAnswer} onClick={(e) => callback(e)}>
                  {answer}
                </button>
              </li>
            </ButtonWrapper>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuestionCard;
