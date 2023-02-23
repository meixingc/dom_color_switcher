// Write your DOM code here!
const body = document.querySelector('body')
const red = document.querySelector('.red');
const white = document.querySelector('.white');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

const changeRed = () => {
    if (body.classList.toggle('white')){
        body.classList.toggle('white')
    }
    if (body.classList.toggle('blue')){
        body.classList.toggle('blue')
    }
    if (body.classList.toggle('yellow')){
        body.classList.toggle('yellow')
    }
    if (!body.classList.toggle('red')){
        body.classList.toggle('red');
    }
  }
const changeWhite = () => {
    if (body.classList.toggle('red')){
        body.classList.toggle('red')
    }
    if (body.classList.toggle('blue')){
        body.classList.toggle('blue')
    }
    if (body.classList.toggle('yellow')){
        body.classList.toggle('yellow')
    }
    if (!body.classList.toggle('white')){
        body.classList.toggle('white');
    }
}
const changeBlue = () => {
    if (body.classList.toggle('white')){
        body.classList.toggle('white')
    }
    if (body.classList.toggle('red')){
        body.classList.toggle('red')
    }
    if (body.classList.toggle('yellow')){
        body.classList.toggle('yellow')
    }
    if (!body.classList.toggle('blue')){
        body.classList.toggle('blue');
    }
  }
const changeYellow = () => {
    if (body.classList.toggle('white')){
        body.classList.toggle('white')
    }
    if (body.classList.toggle('blue')){
        body.classList.toggle('blue')
    }
    if (body.classList.toggle('red')){
        body.classList.toggle('red')
    }
    if (!body.classList.toggle('yellow')){
        body.classList.toggle('yellow');
    }
}

//red
red.addEventListener('click', changeRed); 
//white
white.addEventListener('click', changeWhite);
//blue
blue.addEventListener('click', changeBlue);
//yellow
yellow.addEventListener('click', changeYellow);