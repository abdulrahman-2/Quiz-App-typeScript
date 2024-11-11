import { Route, Routes } from "react-router";
import StartPage from "./pages/startPage/StartPage";
import QuizPage from "./pages/quizPage/QuizPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/quizPage" element={<QuizPage />} />
    </Routes>
  );
};

export default App;
