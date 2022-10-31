import { useState } from "react";

export const Logic = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const addNumber = (matrix) => {
    let spotX = Math.floor(Math.random() * 4),
      spotY = Math.floor(Math.random() * 4);

    if (matrix[spotX][spotY] === " ") {
      matrix[spotX][spotY] = Math.floor(Math.random() > 0.5) ? 2 : 4;
    }

    // let checkIsGameOver = checkIfGameOver(matrix);
    // if (checkIsGameOver) {
    //   alert("Game over");
    //   setGameOver(true);
    // }
  };

  const cloneDeep = (matrix) => {
    let newMatrix = matrix;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newMatrix[i][j] = matrix[i][j];
      }
    }
    return newMatrix;
  };

  const swipeLeft = (matrix) => {
    let newArray = cloneDeep(matrix);
    for (let i = 0; i < 4; i++) {
      let b = newArray[i];
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow] === " " && b[fast] === " ") {
          fast++;
        } else if (b[slow] === " " && b[fast] !== " ") {
          b[slow] = b[fast];
          b[fast] = " ";
          fast++;
        } else if (b[slow] !== " " && b[fast] === " ") {
          fast++;
        } else if (b[slow] !== " " && b[fast] !== " ") {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            let sum = b[slow];
            setScore((score) => score + +sum);
            b[fast] = " ";
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    addNumber(newArray);
    return newArray;
  };

  const swipeRight = (matrix) => {
    let newArray = cloneDeep(matrix);

    for (let i = 3; i >= 0; i--) {
      let b = newArray[i];
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow] === " " && b[fast] === " ") {
          fast--;
        } else if (b[slow] === " " && b[fast] !== " ") {
          b[slow] = b[fast];
          b[fast] = " ";
          fast--;
        } else if (b[slow] !== " " && b[fast] === " ") {
          fast--;
        } else if (b[slow] !== " " && b[fast] !== " ") {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            let sum = b[slow];
            setScore((score) => score + +sum);
            b[fast] = " ";
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }

    addNumber(newArray);
    return newArray;
  };

  const swipeDown = (matrix) => {
    let b = cloneDeep(matrix);
    let oldData = JSON.parse(JSON.stringify(matrix));
    for (let i = 3; i >= 0; i--) {
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow][i] === " " && b[fast][i] === " ") {
          fast--;
        } else if (b[slow][i] === " " && b[fast][i] !== " ") {
          b[slow][i] = b[fast][i];
          b[fast][i] = " ";
          fast--;
        } else if (b[slow][i] !== " " && b[fast][i] === " ") {
          fast--;
        } else if (b[slow][i] !== " " && b[fast][i] !== " ") {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            let sum = b[slow][i];
            setScore((score) => score + +sum);
            b[fast][i] = " ";
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }
    if (JSON.stringify(b) !== JSON.stringify(oldData)) {
      addNumber(b);
    }
    return b;
  };

  const swipeUp = (matrix) => {
    let b = cloneDeep(matrix);
    let oldData = JSON.parse(JSON.stringify(matrix));
    for (let i = 0; i < 4; i++) {
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow][i] === " " && b[fast][i] === " ") {
          fast++;
        } else if (b[slow][i] === " " && b[fast][i] !== " ") {
          b[slow][i] = b[fast][i];
          b[fast][i] = " ";
          fast++;
        } else if (b[slow][i] !== " " && b[fast][i] === " ") {
          fast++;
        } else if (b[slow][i] !== " " && b[fast][i] !== " ") {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            let sum = b[slow][i];
            setScore((score) => score + +sum);
            b[fast][i] = " ";
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldData) !== JSON.stringify(b)) {
      addNumber(b);
    }

    return b;
  };

  const checkIfGameOver = (matrix) => {
    let checker = swipeLeft(),
      checker2 = swipeDown(),
      checker3 = swipeRight(),
      checker4 = swipeUp();

    if (JSON.stringify(matrix) !== JSON.stringify(checker)) {
      return false;
    }
    if (JSON.stringify(matrix) !== JSON.stringify(checker2)) {
      return false;
    }
    if (JSON.stringify(matrix) !== JSON.stringify(checker3)) {
      return false;
    }
    if (JSON.stringify(matrix) !== JSON.stringify(checker4)) {
      return false;
    }

    return true;
  };

  return {
    swipeUp,
    swipeDown,
    swipeLeft,
    swipeRight,
    cloneDeep,
    addNumber,
    score,
    setScore,
    checkIfGameOver,
    gameOver,
    setGameOver,
  };
};
