import styled from "styled-components";
import { ButtonWrapperProps } from "../../types/types";

export const QuizPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  background-color: #0c1d2d;
  color: white;
  text-align: center;
  padding: 15px;

  .title {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 1.2px;
    margin-bottom: 20px;

    @media (min-width: 640px) {
      font-size: 80px;
    }
  }

  .score {
    font-size: 25px;
    margin-bottom: 20px;
  }

  .questions {
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    width: 100%;
    color: black;

    @media (min-width: 640px) {
      width: 600px;
    }

    @media (min-width: 992px) {
      width: 800px;
    }

    .quest-title {
      margin: 30px;
    }

    .quest-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0;

      li {
        width: 100%;
        border-radius: 12px;
        color: white;
        cursor: pointer;

        button {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          background-color: #0c1d2d;
          color: white;
        }
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    button {
      background-color: white;
      color: black;
      font-weight: bold;
      padding: 10px 25px;
      border-radius: 12px;
      border: none;
      cursor: pointer;
    }

    .quest-num {
      display: none;

      @media (min-width: 640px) {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      span {
        width: 30px;
        height: 30px;
        display: grid;
        place-content: center;
        background-color: white;
        color: black;
        border-radius: 12px;
        cursor: pointer;
      }
    }
  }

  .linkBtn {
    margin: auto;
    width: fit-content;
    background-color: #f26321;
    padding: 15px 30px;
    border: none;
    border-radius: 13px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    user-select: none;
    width: 100%;
    padding: 13px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 17px;
    border: none;
    cursor: pointer;
    color: white;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !$correct && $userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
