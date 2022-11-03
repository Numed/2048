import { useState } from "react";

export const Logic = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const addNumber = (matrix) => {
    let counter = 0;

    let spotX = Math.floor(Math.random() * 4),
      spotY = Math.floor(Math.random() * 4);

    if (matrix[spotX][spotY] === " ") {
      matrix[spotX][spotY] = Math.floor(Math.random() > 0.5) ? 2 : 4;
    }
    counter++;

    if (counter > 50) {
      let checkIsGameOver = checkIfGameOver(matrix);
      if (checkIsGameOver) {
        alert("Game over");
      }
    }
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
      let arr = newArray[i];
      let prev = 0;
      let next = 1;
      while (prev < 4) {
        if (next === 4) {
          next = prev + 1;
          prev++;
          continue;
        }
        if (arr[prev] === " " && arr[next] === " ") {
          next++;
        } else if (arr[prev] === " " && arr[next] !== " ") {
          arr[prev] = arr[next];
          arr[next] = " ";
          next++;
        } else if (arr[prev] !== " " && arr[next] === " ") {
          next++;
        } else if (arr[prev] !== " " && arr[next] !== " ") {
          if (arr[prev] === arr[next]) {
            arr[prev] = arr[prev] + arr[next];
            let sum = arr[prev];
            setScore((score) => score + +sum);
            arr[next] = " ";
            next = prev + 1;
            prev++;
          } else {
            prev++;
            next = prev + 1;
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
      let arr = newArray[i];
      let next = arr.length - 1;
      let prev = next - 1;
      while (next > 0) {
        if (prev === -1) {
          prev = next - 1;
          next--;
          continue;
        }
        if (arr[next] === " " && arr[prev] === " ") {
          prev--;
        } else if (arr[next] === " " && arr[prev] !== " ") {
          arr[next] = arr[prev];
          arr[prev] = " ";
          prev--;
        } else if (arr[next] !== " " && arr[prev] === " ") {
          prev--;
        } else if (arr[next] !== " " && arr[prev] !== " ") {
          if (arr[next] === arr[prev]) {
            arr[next] = arr[next] + arr[prev];
            let sum = arr[next];
            setScore((score) => score + +sum);
            arr[prev] = " ";
            prev = next - 1;
            next--;
          } else {
            next--;
            prev = next - 1;
          }
        }
      }
    }

    addNumber(newArray);

    return newArray;
  };

  const swipeDown = (matrix) => {
    let arr = cloneDeep(matrix);
    let oldData = JSON.parse(JSON.stringify(matrix));
    for (let i = 3; i >= 0; i--) {
      let next = arr.length - 1;
      let prev = next - 1;
      while (next > 0) {
        if (prev === -1) {
          prev = next - 1;
          next--;
          continue;
        }
        if (arr[next][i] === " " && arr[prev][i] === " ") {
          prev--;
        } else if (arr[next][i] === " " && arr[prev][i] !== " ") {
          arr[next][i] = arr[prev][i];
          arr[prev][i] = " ";
          prev--;
        } else if (arr[next][i] !== " " && arr[prev][i] === " ") {
          prev--;
        } else if (arr[next][i] !== " " && arr[prev][i] !== " ") {
          if (arr[next][i] === arr[prev][i]) {
            arr[next][i] = arr[next][i] + arr[prev][i];
            let sum = arr[next][i];
            setScore((score) => score + +sum);
            arr[prev][i] = " ";
            prev = next - 1;
            next--;
          } else {
            next--;
            prev = next - 1;
          }
        }
      }
    }
    if (JSON.stringify(arr) !== JSON.stringify(oldData)) {
      addNumber(arr);
    }
    return arr;
  };

  const swipeUp = (matrix) => {
    let arr = cloneDeep(matrix);
    let oldData = JSON.parse(JSON.stringify(matrix));
    for (let i = 0; i < 4; i++) {
      let prev = 0;
      let next = 1;
      while (prev < 4) {
        if (next === 4) {
          next = prev + 1;
          prev++;
          continue;
        }
        if (arr[prev][i] === " " && arr[next][i] === " ") {
          next++;
        } else if (arr[prev][i] === " " && arr[next][i] !== " ") {
          arr[prev][i] = arr[next][i];
          arr[next][i] = " ";
          next++;
        } else if (arr[prev][i] !== " " && arr[next][i] === " ") {
          next++;
        } else if (arr[prev][i] !== " " && arr[next][i] !== " ") {
          if (arr[prev][i] === arr[next][i]) {
            arr[prev][i] = arr[prev][i] + arr[next][i];
            let sum = arr[prev][i];
            setScore((score) => score + +sum);
            arr[next][i] = " ";
            next = prev + 1;
            prev++;
          } else {
            prev++;
            next = prev + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldData) !== JSON.stringify(arr)) {
      addNumber(arr);
    }

    return arr;
  };

  const checkIfGameOver = (matrix) => {
    let checker = swipeLeft(matrix),
      checker2 = swipeDown(matrix),
      checker3 = swipeRight(matrix),
      checker4 = swipeUp(matrix);

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
