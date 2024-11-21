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
    document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/474451488/photo/firework-clusters-colorful.jpg?s=612x612&w=0&k=20&c=kVd4klKalWkypkoH2QRcwLcig_iciCr0OBeUudMjq9w=")';
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));