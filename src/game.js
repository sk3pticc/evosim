import Teeb from './entity/teeb';

class Game {
    constructor() {
        this.teeb = new Teeb(500, 500);
    }

    render() {
        this.teeb.render();
    }
};

export default Game;