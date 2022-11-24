export default {
    increment(state) {
        state.counter = state.counter + 1;
    },
    /** payload is custom, can be anything */
    increase(state, payload) {
        console.log(state);
        state.counter = state.counter + payload.value;
    },
};