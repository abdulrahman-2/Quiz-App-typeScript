import React from "react";
import { StartPageWarper } from "./StartPage.style";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <StartPageWarper>
      <h1>Welcome to the Quiz! Test your knowledge and challenge yourself</h1>
      <Link className="linkBtn" to="/quizPage">
        <button>Start Now</button>
      </Link>
    </StartPageWarper>
  );
};

export default StartPage;
