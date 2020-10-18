import React from "react";
import styled from "styled-components";
import { colors } from "./GlobalStyles";
import App from "./App";

const LetterKey = ({ letters, usedLetters }) => {
  const used = usedLetters;

  return letters.map((letter) => (
    <Wrapper
      onClick={onKeyboardLetterButtonClick}
      disabled={used.includes(letter) ? true : false}
    >
      {letter}
    </Wrapper>
  ));
};

const onKeyboardLetterButtonClick = () => {
  alert("have fun!");
};

const Wrapper = styled.button`
  background: ${colors.green};
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  font-size: 32px;
  transition: all linear 400ms;

  &:hover {
    background: ${colors.fuchsia};
  }

  &:disabled,
  &:hover:disabled {
    background: #707070;
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export default LetterKey;
