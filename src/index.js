import 'p5';
import Game from './game';

let canvas;
let game;

const setGameProps = () => {
    background(150, 150, 200);
    frameRate(60);
}

window.setup = function() {
    createCanvas(800, 600);
    setGameProps();
    game = new Game();
}

// window.windowResized = function() {
//     resizeCanvas(windowWidth, windowHeight);
//     setGameProps();
// }

window.draw = function() {
    game.tick();
    game.render();
}
