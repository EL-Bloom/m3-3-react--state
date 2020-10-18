import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import Deadman from "./DeadMan";
import DeadLetters from "./DeadLetters";
import TheWord from "./TheWord";
import Keyboard from "./Keyboard";
import GameOverModal from "./GameOverModal";
import { useState } from "react";
import words from "../data/words.json";
import letters from "../data/letters.json";

import { colors, contentWidth } from "./GlobalStyles";

const initialGameState = { started: false, over: false, win: false };

const App = () => {
  const [game, setGame] = useState(initialGameState);
  const [word, setWord] = useState({ str: "" });
  const [gameStart, toggle] = useState(true);
  const [wrongGuesses, setWrongGuesses] = useState(["a", "b"]);
  const [usedLetters, setUsedLetters] = useState([ "x", "y", "z"]);
 
  const handleStart = () => {
    setGame({ ...game, started: !game.started });
    if (word.str === "") {
      GetNewWord();
    }
    toggle(!gameStart);
  }; 

  const GetNewWord = () => {
    let newWord = words[Math.floor(Math.random() * words.length)];
    let revealed = [];
    for (let i = 0; i < newWord.length; i++) {
      revealed.push("");
    }
    setWord(() => {
      console.log(revealed);
      return { ...word, str: newWord, revealed: revealed };
    }); 
    
  };
 
const handleGuess = () => {  

  setUsedLetters (usedLetters.push(word.revealed))
}
    
  


  return (
    <Wrapper>
      {/* <GameOverModal /> */}
      <Header />
      <Nav>
        <Button onClickFunc={handleStart} gameStart={gameStart}>
          {gameStart ? "Start" : "Pause"}
        </Button>
        <Button>Reset</Button>
      </Nav>
      {game.started && (
        <>
          <Container>
            <Deadman />
            <RightColumn>
              <DeadLetters wrongGuesses={wrongGuesses} />
              <TheWord word={word} />
            </RightColumn>
          </Container>
          <Keyboard usedLetters={usedLetters} letters={letters} />
        </>
      )}
      ;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 0 0 64px 0;
`;
const Nav = styled.div`
  max-width: ${contentWidth};
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentWidth};
  min-width: 320px;
  position: relative;
  padding: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default App;
