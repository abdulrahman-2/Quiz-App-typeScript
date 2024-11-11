import React, { useCallback, useEffect, useState } from "react";
import { QuizPageWrapper } from "./QuizPage.style";
import QuestionCard from "../../components/question/QuestionCard";
import { getQuestions } from "../../api/api";
import { AnswerObject, Difficulty, QuestionsState } from "../../types/types";
import { BeatLoader } from "react-spinners";
// ... (other imports)

const QuizPage = () => {
  const TOTAL_QUESTIONS = 10;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setError("");

    try {
      const newQuestions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
    } catch (error) {
      setError(`Error fetching questions: ${error}`);
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    startTrivia();
  }, []);

  const checkAnswer = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!gameOver) {
        const selectedAnswer = e.currentTarget.textContent;
        const correct = questions[number].correct_answer === selectedAnswer;

        if (correct) setScore((prev) => prev + 1);

        const answerObject: AnswerObject = {
          question: questions[number].question,
          answer: selectedAnswer!,
          correct,
          correctAnswer: questions[number].correct_answer,
        };

        setUserAnswers((prev) => [...prev, answerObject]);
      }
    },
    [gameOver, number, questions]
  );

  const nextQuestion = useCallback(() => {
    const nextQuestionNumber = number + 1;
    if (nextQuestionNumber === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestionNumber);
    }
  }, [number]);

  const renderPagination = useCallback(
    () => (
      <div className="quest-num">
        {Array.from({ length: TOTAL_QUESTIONS }, (_, index) => (
          <span
            key={index}
            onClick={() => setNumber(index)}
            style={{
              backgroundColor: number === index ? "gray" : "white",
              color: number === index ? "white" : "black",
            }}
          >
            {index + 1}
          </span>
        ))}
      </div>
    ),
    [number]
  );

  return (
    <QuizPageWrapper>
      <h1 className="title">React Quiz</h1>
      <h3 className="score">
        Score: <span>{score}</span>
      </h3>
      {loading ? (
        <div
          style={{
            margin: "auto",
          }}
        >
          <BeatLoader
            color="white"
            size={20}
            loading={true}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {gameOver && !loading && !error ? (
            <button className="linkBtn" onClick={startTrivia}>
              Start Again
            </button>
          ) : (
            <div className="questions">
              {questions[number] && !error ? (
                <QuestionCard
                  questionNr={number + 1}
                  totalQuestions={TOTAL_QUESTIONS}
                  question={questions[number].question}
                  answers={questions[number].answers}
                  userAnswer={userAnswers ? userAnswers[number] : undefined}
                  callback={checkAnswer}
                />
              ) : (
                <p style={{ color: "red" }}>{error}</p>
              )}
            </div>
          )}
        </>
      )}
      {!gameOver && !loading && (
        <div className="pagination">
          <button disabled={number === 0} onClick={() => setNumber(number - 1)}>
            Prev
          </button>
          {renderPagination()}
          <button
            onClick={nextQuestion}
            disabled={userAnswers.length <= number}
          >
            {number === TOTAL_QUESTIONS - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </QuizPageWrapper>
  );
};

export default QuizPage;
