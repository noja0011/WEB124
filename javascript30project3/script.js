//Nora Jaafar 11/20/2024
const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;
  let molesWhacked = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Ah nah thats the same one bud');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    if (!hole.querySelector('.mole').classList.contains('clicked')) {
    hole.classList.add('up');
}
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    molesWhacked = 0;
    moles.forEach(mole => mole.classList.remove('clicked'));
    peep();
    setTimeout(() => {
        timeUp = true;
        allWhacked();
    }, 30000);
  }

  function bonk(e) {
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
    this.classList.add('clicked');
    molesWhacked++;
    allWhacked();
  }

  function allWhacked() {
    if (molesWhacked === moles.length) {
        changeBackground();
    }
  }

  function changeBackground() {
    document.body.style.backgroundImage = 'url("data:image/jpeg;base64,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")';
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));