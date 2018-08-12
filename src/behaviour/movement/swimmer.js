import directions from '../../constants/directions';

const determineNewDirectionOfMovement = (state) => {
        const vRandom = Math.random() * 1000;
        const hRandom = Math.random() * 1000;

        let newVDirection = null;
        let newHDirection = null;

        if ( vRandom < 300 ) {
            newVDirection = directions.UP;
        } else if ( vRandom < 600 ) {
            newVDirection = directions.DOWN;
        }

        if ( hRandom < 300 ) {
            newHDirection = directions.RIGHT;
        } else if ( hRandom < 600 ) {
            newHDirection = directions.LEFT;
        }

        return { ...state, hDirection: newHDirection, vDirection: newVDirection }
}

const swimmer = (state) => ({
    attach: (xVel, yVel, atRest, vDirection, hDirection) => ({ ...state, xVel, yVel, atRest, vDirection, hDirection }),
    swim: () => {
        let newX;
        let newY;

        newX = state.x + state.xVel;
        newY = state.y + state.yVel;

        return {...state, x: newX, y: newY};
    },
    turn: () => {
        const newState = {...state};

        if (state.atRest) {

            newState.xVel = 0;
            newState.yVel = 0;

        } else {

            if (state.hDirection == directions.LEFT) {
                newState.xVel = -1;
            } else if (state.hDirection === directions.RIGHT) {
                newState.xVel = 1;
            }

            if (state.vDirection == directions.UP) {
                newState.xVel = -1;
            } else if (state.vDirection == directions.DOWN) {
                newState.xVel = 1;
            }
        }

        return newState;
    },
    shouldTurn: () => {
        if (Math.random() * 1000) {
            return determineNewDirectionOfMovement(state);
        }
    }

});

export default swimmer;

/***
 * Basic Movement
 * 
 * A direction will be determined by the specimen every so often (the time between decisions will be randomly generated.)
 * The specimen will then move in that direction until a new direction is determined.
 * 
 * A specimen can go one of the vertical directions and one of the horizontal directions simultaneously, or it can just go one.
 */