function randomRgbCode() {
  const redCode = Math.floor(Math.random() * 255);
  const greenCode = Math.floor(Math.random() * 255);
  const blueCode = Math.floor(Math.random() * 255);

  return `(${redCode}, ${greenCode}, ${blueCode})`;
}

function createColorBalls() {
  const parentElement = document.getElementById('colors-options');

  for (let index = 0; index < 6; index += 1) {
    const colorBall = document.createElement('div');

    colorBall.className = 'ball';
    colorBall.style.backgroundColor = `rgb${randomRgbCode()}`;

    parentElement.appendChild(colorBall);
  }
}

function setRgbToGuess() {
  const colorToGuess = document.getElementById('rgb-color');
  const colorBall = document.querySelectorAll('.ball');
  const colorOptions = [];

  for (let index = 0; index < colorBall.length; index += 1) {
    colorOptions[index] = colorBall[index].style.backgroundColor;
  }

  const randomIndex = Math.floor(Math.random() * 6);
  const rgbCode = colorOptions[randomIndex].substring('rgb'.length);

  colorToGuess.innerHTML = rgbCode;
}

function eventGuessColor() {
  const colorBalls = document.querySelectorAll('.ball');
  const colorToGuess = document.getElementById('rgb-color').innerHTML;
  const answer = document.getElementById('answer');
  const score = document.getElementById('score');

  for (let index = 0; index < colorBalls.length; index += 1) {
    colorBalls[index].addEventListener('click', (event) => {
      const ballColor = event.target.style.backgroundColor.substring('rgb'.length);

      if (ballColor === colorToGuess) {
        answer.innerHTML = 'Acertou!';
        score.innerHTML = `${Number(score.innerHTML) + 3}`;
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}

function removeColorBalls() {
  const parentElement = document.getElementById('colors-options');
  const colorBalls = document.querySelectorAll('.ball');

  for (let index = 0; index < colorBalls.length; index += 1) {
    parentElement.removeChild(colorBalls[index]);
  }
}

function eventResetGame() {
  const resetButton = document.getElementById('reset-game');
  const answer = document.getElementById('answer');

  resetButton.addEventListener('click', () => {
    removeColorBalls();
    createColorBalls();
    setRgbToGuess();
    eventGuessColor();
    answer.innerHTML = 'Escolha uma cor';
  });
}

createColorBalls();
setRgbToGuess();
eventGuessColor();
eventResetGame();
