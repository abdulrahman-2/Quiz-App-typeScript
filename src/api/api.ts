import axios from "axios";
import { Difficulty, Question, QuestionsState } from "../types/types";
import { shuffleArray } from "../utils/utils";

export const getQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState[]> => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=18`;
  try {
    const response = await axios.get(endPoint);
    return response.data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};
