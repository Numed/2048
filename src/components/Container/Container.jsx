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

import { useState, useEffect } from "react";

const Container = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [matrix, setMatrix] = useState([
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ]);
  const [options, setOptions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 3, y: 2 },
    { x: 3, y: 3 },
  ]);

  const blankedMatrix = () => {
    let extra = [
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ];
    return extra;
  };

  useEffect(() => {
    addNumber();
    addNumber();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.table(matrix);
    // eslint-disable-next-line
  }, [matrix]);

  const clearBoard = () => {
    setMatrix([
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
      [" ", " ", " ", " "],
    ]);
  };

  const addNumber = () => {
    if (options.length > 0) {
      let spotX = Math.floor(Math.random() * 4),
        spotY = Math.floor(Math.random() * 4);

      matrix[spotX][spotY] = Math.floor(Math.random() > 0.5) ? 2 : 4;
      setMatrix([...matrix]);
    }
  };

  const slide = (row) => {
    let arr = row.filter((x) => x),
      missing = 4 - arr.length,
      zeros = Array(missing).fill(" ");

    arr = zeros.concat(arr);
    return arr;
  };

  const combine = (row) => {
    for (let i = 3; i >= 1; i--) {
      let a = row[i],
        b = row[i - 1];

      if (a === b) {
        row[i] = a + b;
        row[i - 1] = "";
      }
    }
    return row;
  };

  const operate = (row) => {
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
  };

  const compare = (a, b) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (a[i][j] !== b[i][j]) {
          return true;
        }
      }
    }
    return false;
  };

  const copyMatrix = (matrix) => {
    let extra = [...matrix];
    return extra;
  };

  const flip = (matrix) => {
    console.log("MATRIX Before", matrix);
    for (let i = 0; i < 4; i++) {
      matrix[i].reverse();
    }
    console.log("MATRIX AFTER", matrix);
    return matrix;
  };

  const rotate = (matrix) => {
    let newMatrix = blankedMatrix();
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newMatrix[i][j] = matrix[i][j];
      }
    }
  };

  window.addEventListener("keydown", (e) => {
    let flipped = false;
    let rotated = false;
    if (e.key === "ArrowUp") {
      flip(matrix);
      setMatrix(matrix);
      flipped = true;
    } else if (e.key === "ArrowDown") {
      console.log(e.key);
    } else if (e.key === "ArrowLeft") {
      flip(matrix);
      matrix = rotate(matrix);
      setMatrix(matrix);
      rotated = true;
    } else if (e.key === "ArrowRight") {
      //right
    } else {
      return;
    }
    let pastMatrix = copyMatrix(matrix);
    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = operate(matrix[i]);
    }
    let changed = compare(pastMatrix, matrix);

    if (flipped) {
      flip(matrix);
    }

    if (rotated) {
      matrix = rotate(matrix);
      matrix = rotate(matrix);
      matrix = rotate(matrix);
    }

    if (changed) {
      addNumber();
    }
  });

  const CreateBoard = () => {
    return matrix.map((el) => {
      return el.map((element, index) => {
        return (
          <Square key={index} className="square no-value">
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
            <ScoreContainer>
              <Score>
                Best<TotalScore>{best}</TotalScore>
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
