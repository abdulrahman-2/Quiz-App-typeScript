import styled from "styled-components";

export const StartPageWarper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  background-color: #0c1d2d;
  color: white;

  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    max-width: 1100px;
  }

  .linkBtn {
    margin: 30px auto;
  }

  .linkBtn button {
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
