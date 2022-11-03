import {
  SectionContainer,
  InfoContainer,
  InfoTitle,
  ScoreContainer,
  ScroreSection,
  ScoreInner,
  Score,
  TotalScore,
  RestartButton,
  Board,
  Square,
} from "./style";
import { useEvent } from "../hooks/useHook";
import { Logic } from "../helpers/Logic";
import { useState, useEffect } from "react";

const Container = () => {
  const [matrix, setMatrix] = useState([
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ]);

  const {
    swipeDown,
    swipeLeft,
    swipeRight,
    score,
    swipeUp,
    addNumber,
    cloneDeep,
    setScore,
    setGameOver,
    gameOver,
  } = Logic();

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  const clearBoard = () => {
    let emptyMatrix = [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ];
    addNumber(emptyMatrix);
    addNumber(emptyMatrix);
    setMatrix([...emptyMatrix]);
    setScore(0);
    setGameOver(false);
  };

  const init = () => {
    let newMatrix = cloneDeep(matrix);
    addNumber(newMatrix);
    addNumber(newMatrix);
    setMatrix([...newMatrix]);
  };

  const handleKeyDown = (e) => {
    if (gameOver) {
      alert("Game over");
      return;
    }

    if (e.key === "ArrowUp") {
      const action = swipeUp(matrix);
      setMatrix([...action]);
    } else if (e.key === "ArrowDown") {
      const action = swipeDown(matrix);
      setMatrix([...action]);
    } else if (e.key === "ArrowLeft") {
      const action = swipeLeft(matrix);
      setMatrix([...action]);
    } else if (e.key === "ArrowRight") {
      const action = swipeRight(matrix);
      setMatrix([...action]);
    } else {
      return;
    }
  };

  const getClass = (num) => {
    switch (num) {
      case " ":
        return "no-value";
      case 2:
        return "white-blank";
      case 4:
        return "sand";
      case 8:
        return "orange-blank";
      case 16:
        return "carrot-blank ";
      case 32:
        return "carrot";
      case 64:
        return "carrot-contrast";
      case 128:
        return "yellow-blank";
      case 256:
        return "yellow";
      case 512:
        return "yellow-contrast";
      case 1024:
        return "yellow-close-max";
      case 2048:
        return "yellow-max";
    }
  };

  useEvent("keydown", handleKeyDown);

  const CreateBoard = () => {
    return matrix.map((el) => {
      return el.map((element, index) => {
        return (
          <Square key={index} className={"square" + " " + getClass(element)}>
            {element}
          </Square>
        );
      });
    });
  };

  return (
    <SectionContainer>
      <InfoContainer>
        <InfoTitle>2048</InfoTitle>
        <ScroreSection>
          <ScoreInner>
            <ScoreContainer>
              <Score>
                Score<TotalScore>{score}</TotalScore>
              </Score>
            </ScoreContainer>
          </ScoreInner>
          <RestartButton onClick={clearBoard}>New Game</RestartButton>
        </ScroreSection>
      </InfoContainer>
      <Board>
        <CreateBoard />
      </Board>
    </SectionContainer>
  );
};

export default Container;
