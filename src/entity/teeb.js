import imageProvider from '../util/image-provider';
import directions from '../constants/directions';

import rotator from '../behaviour/movement/rotator';
import swimmer from '../behaviour/movement/swimmer';

class Teeb {
    constructor(x, y) {
        this.img = imageProvider.getImage('teeb');

        const entityWidth = this.img.width;
        const entityHeight = this.img.height; 

        this.state = {
            x,
            y,
            width: entityWidth,
            height: entityHeight,
            centreX: -(entityWidth / 2),
            centreY: -(entityHeight / 2),
        }  

        this.attachBehaviours();
    }

    attachBehaviours() {
        this.state = rotator(this.state).attach();
        this.state = swimmer(this.state).attach(1, 1, false, directions.UP, directions.LEFT);
    }

    isAtRest() {
        const random = Math.random() * 2000;
        if (random < 1000) {
            this.state = { ...this.state, atRest: true };
        } else {
            this.state = { ...this.state, atRest: false }
        }
    }

    // separate these direcgtion based things out into a behaviour script. probably not the swimmer one cos we wanna keep all those funcs pure
    
    behave() {

        this.state = swimmer(this.state).swim();
        this.state = swimmer(this.state).shouldTurn();
        this.state = swimmer(this.state).turn();
        this.state = rotator(this.state).spin();
    }

    render() {
        const { centreX, centreY } = this.state;

        push();
        this.behave();
        image(this.img, centreX, centreY);
        pop();
    }
}

export default Teeb;