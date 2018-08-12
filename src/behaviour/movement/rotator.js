const rotator = (state) => ({
    attach: () => ({ ...state, rotation: 0 }),
    spin: () => {
        const centreX = state.x + (state.width / 2);
        const centreY = state.y + (state.height / 2);
        const newRotation = state.rotation + 1;

        translate(centreX, centreY);
        rotate(newRotation)

        return { ...state, rotation: newRotation };
    }
});

export default rotator;