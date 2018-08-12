import 'p5';
import imageProvider from './util/image-provider';
import Game from './game';

let canvas;
let game;

const clearWindow = () => {
    background(150, 150, 200);
}

const setGameProps = () => {
    clearWindow();
    frameRate(60);
    angleMode(DEGREES);
}

window.preload = function() {
    imageProvider.loadImages();
}

window.setup = function() {
    createCanvas(1600, 900)
    setGameProps();
    game = new Game();
}

// window.windowResized = function() {
//     resizeCanvas(windowWidth, windowHeight);
//     setGameProps();
// }

window.draw = function() {
    clearWindow();
    game.render();
}
